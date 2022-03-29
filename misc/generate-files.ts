import fs from 'fs';
import { camelCase, kebabCase, upperFirst } from 'lodash';
import path from 'path';
import { IndentationText, Project, QuoteKind, Scope } from 'ts-morph';

const project = new Project({
    manipulationSettings: {
        indentationText: IndentationText.FourSpaces,
        quoteKind: QuoteKind.Single,
        useTrailingCommas: true,
    },
});

interface Api {
    operations: Operation[];
    path: string;
}

interface Operation {
    method: string;
    nickname: string;
    parameters: Parameter[];
    summary: string;
    type: string;
}

interface Parameter {
    name: string;
    required: true;
    type: string;
    paramType: string;
    allowMultiple: false;
}

interface Model {
    properties: { [keyof: string]: Property };
}

interface Property {
    ref?: string;
    description: string;
    type: string;
    items: { [keyof: string]: { ref: string; type: string } };
}

interface Item {
    apis: Api[];
    models: { [keyof: string]: Model };
    resourcePath: string;
}

interface Repository {
    methods: Method[];
    name: string;
}

interface Method {
    comment: string;
    httpVerb: string;
    name: string;
    parameters: Parameter[];
    path: string;
    response: string;
}

function create() {
    const dir = 'lib';

    const items: Item[] = JSON.parse(
        fs
            .readFileSync(path.resolve(__dirname, '..', 'api.json'), {
                encoding: 'utf-8',
            })
            .replace(/\$/gm, ''),
    );

    console.log(items);

    /**
     * Map to our interface
     */
    const models: { [keyof: string]: Model } = {};
    const repositories: Repository[] = [];

    for (const item of items) {
        const repository: Repository = {
            methods: [],
            name: `${upperFirst(camelCase(item.resourcePath))}`,
        };

        for (const api of item.apis) {
            for (const operation of api.operations) {
                const endpoint: Method = {
                    comment: operation.summary,
                    httpVerb: operation.method,
                    name: operation.nickname,
                    parameters: operation.parameters,
                    path: api.path.replace(item.resourcePath, ''),
                    response: operation.type,
                };

                repository.methods.push(endpoint);
            }
        }

        for (const [modelKey, modelValue] of Object.entries(item.models)) {
            models[modelKey] = modelValue;
        }

        repository.methods.sort((a, b) => (a.name > b.name ? 1 : -1));
        repositories.push(repository);
    }

    /**
     * Create the files
     */
    for (const repository of repositories) {
        const dirPath = path.resolve(
            __dirname,
            '..',
            'src',
            dir,
            kebabCase(repository.name),
        );

        const repositoryFilePath = path.resolve(
            dirPath,
            `spotler-${kebabCase(repository.name)}.repository.ts`,
        );
        const specFilePath = path.resolve(
            dirPath,
            `spotler-${kebabCase(repository.name)}.repository.spec.ts`,
        );

        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath);
        }

        /**
         * Repository file
         */

        if (!fs.existsSync(repositoryFilePath)) {
            fs.writeFileSync(repositoryFilePath, '');
        }

        const repositoryFile = project.createSourceFile(
            repositoryFilePath,
            '',
            {
                overwrite: true,
            },
        );

        repositoryFile.addImportDeclaration({
            namedImports: ['SpotlerBaseRepository'],
            moduleSpecifier: '../../shared/base/spotler-base.repository',
        });
        repositoryFile.addImportDeclaration({
            namedImports: ['SpotlerConfig'],
            moduleSpecifier: '../../shared/config/spotler-config',
        });

        const repositoryFileClass = repositoryFile.addClass({
            isExported: true,
            extends: 'SpotlerBaseRepository',
            name: `Spotler${repository.name}Repository`,
        });

        repositoryFileClass
            .addProperty({
                name: 'resource',
                scope: Scope.Protected,
            })
            .setIsReadonly(true)
            .setInitializer(`'${kebabCase(repository.name)}'`);

        repositoryFileClass
            .addConstructor({
                parameters: [
                    {
                        name: 'config',
                        type: 'SpotlerConfig',
                        scope: Scope.Protected,
                    },
                ],
            })
            .setBodyText(`    super();`);

        for (const method of repository.methods) {
            repositoryFileClass
                .addMethod({
                    parameters: [
                        {
                            name: 'args',
                            type: `{
    ${method.parameters
        .map(p => `${p.name}${p.required ? '' : '?'}: ${replaceType(p.type)}`)
        .join(',\n')}
}`,
                        },
                    ],

                    isAsync: true,
                    name: method.name,
                })
                .setBodyText(
                    methodTemplate(
                        method.httpVerb,
                        method.path,
                        method.parameters.filter(p => p.paramType === 'query'),
                    ),
                );
        }

        repositoryFile.saveSync();

        /**
         * Spec file
         */

        if (!fs.existsSync(specFilePath)) {
            fs.writeFileSync(specFilePath, '');
        }

        const specFile = project.createSourceFile(specFilePath, '', {
            overwrite: true,
        });

        specFile.addImportDeclaration({
            defaultImport: 'test',
            moduleSpecifier: 'ava',
        });

        specFile.saveSync();
    }

    const modelDirPath = path.resolve(__dirname, '..', 'src', 'model');

    if (!fs.existsSync(modelDirPath)) {
        fs.mkdirSync(modelDirPath);
    }

    for (const [entityName, entityValues] of Object.entries(models)) {
        const modelFilePath = path.resolve(
            modelDirPath,
            `spotler-${kebabCase(entityName)}.ts`,
        );

        if (!fs.existsSync(modelFilePath)) {
            fs.writeFileSync(modelFilePath, '');
        }

        const modelFile = project.createSourceFile(modelFilePath, '', {
            overwrite: true,
        });
        const modelClass = modelFile
            .addClass({
                isExported: true,
                name: upperFirst(camelCase(entityName)),
            })
            .addProperties(
                (Object.entries(entityValues.properties) ?? []).map(
                    ([name, properties]) => {
                        let type = '';

                        if (properties.ref) {
                            console.log(properties.ref);
                        }

                        if (properties.type === 'array') {
                            type = `${replaceType(
                                properties.items.ref?.type ??
                                    properties.items.type,
                            )}[]`;
                        } else {
                            type = replaceType(
                                properties.ref ?? properties.type,
                            );
                        }

                        return {
                            name,
                            type,
                        };
                    },
                ),
            );

        modelFile.save();
    }
}

function replaceType<T>(type: T | string) {
    switch (type) {
        case 'integer':
            return 'number';

        case 'date-time':
            return 'string';

        case 'ISODateParam':
            return 'string';

        default:
            return type;
    }
}

function methodTemplate(
    httpVerb: string,
    path: string,
    parameters: Parameter[],
) {
    const method = httpVerb.toLowerCase();
    const endpoint = path.replace(/\{/gm, '${args.');
    let body = '';
    let params = '';

    if (['post', 'put'].includes(method)) {
        body = `
    body: args.body,`;
    }

    if (parameters.length) {
        params = `
    params: {
        ${parameters.map(p => `${p.name}: args.${p.name}`).join(',\n')}
    }`;
    }

    return `return this.${method}({
    endpoint: \`${endpoint}\`,${body}${params}
}) as Promise<any[]>;`;
}

create();
