import { OAuth } from '@fcus/oauth-1-header';
import { request, RequestOptions } from 'https';
import QS from 'querystring';
import { SpotlerConfig } from '../config/spotler-config';
import { HttpMethod } from '../http-method.type';

export interface SpotlerBaseRepositoryArgs {
    endpoint: string;
    query?: { [keyof: string]: any };
}

export interface SpotlerBaseRepositoryPostPutArgs<
    T,
> extends SpotlerBaseRepositoryArgs {
    body: T;
}

export interface SpotlerClientRequestArgs<T> {
    body?: T;
    endpoint: string;
    method: HttpMethod;
    query?: { [keyof: string]: string };
}

export abstract class SpotlerBaseRepository {
    protected abstract readonly config: SpotlerConfig;
    protected abstract readonly resource: string;

    protected readonly baseUrl = 'restapi.mailplus.nl';
    protected readonly version = '1.1.0';

    protected get apiPath() {
        return `integrationservice-${this.version}/${this.resource}`;
    }

    protected async delete(args: SpotlerBaseRepositoryArgs) {
        return this.request({
            endpoint: args.endpoint,
            method: 'DELETE',
            query: args.query,
        });
    }

    protected async get(args: SpotlerBaseRepositoryArgs) {
        return this.request({
            endpoint: args.endpoint,
            method: 'GET',
            query: args.query,
        });
    }

    protected async patch<T>(args: SpotlerBaseRepositoryPostPutArgs<T>) {
        return this.request({
            endpoint: args.endpoint,
            method: 'PATCH',
            query: args.query,
        });
    }

    protected async post<T>(args: SpotlerBaseRepositoryPostPutArgs<T>) {
        return this.request({
            body: args.body,
            endpoint: args.endpoint,
            method: 'POST',
            query: args.query,
        });
    }

    protected async put<T>(args: SpotlerBaseRepositoryPostPutArgs<T>) {
        return this.request({
            body: args.body,
            endpoint: args.endpoint,
            method: 'PUT',
            query: args.query,
        });
    }

    private async request<T>(args: SpotlerClientRequestArgs<T>) {
        return new Promise((resolve, reject) => {
            const oauthData = OAuth.authorize(
                {
                    method: args.method,
                    url: `https://${this.baseUrl}/${this.apiPath}/${args.endpoint}`,
                    query: args.query,
                    body: args.body as any,
                },
                {
                    consumer: {
                        key: this.config.consumerKey,
                        secret: this.config.consumerSecret,
                    },
                },
            );

            const query = args.query ? `?${QS.stringify(args.query)}` : '';

            const options: RequestOptions = {
                headers: {
                    Accept: 'application/json',
                    Authorization: oauthData,
                },
                hostname: this.baseUrl,
                method: args.method,
                path: `/${this.apiPath}/${args.endpoint}${query}`,
                port: 443,
            };

            const r = request(options, result => {
                let data = '';

                result.setEncoding('utf8');

                result.on('data', d => {
                    data += d;
                });

                result.on('end', () => {
                    try {
                        if (!data) {
                            resolve(null);
                            return;
                        }

                        const json = JSON.parse(data);
                        resolve(json);
                    } catch (exception) {
                        reject(exception);
                    }
                });
            });

            r.on('error', error => {
                reject(error);
            });

            if (args.body) {
                r.write(JSON.stringify(args.body));
            }

            r.end();
        });
    }
}
