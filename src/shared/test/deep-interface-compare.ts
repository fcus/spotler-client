export function deepInterfaceCompare(input: any) {
    return analyse(input, {});
}

function analyse(input: any, collection: any) {
    const typeOfName = typeOf(input);

    switch (typeOfName) {
        case 'array':
            const listItem = {};

            for (const item of input) {
                Object.assign(listItem, analyse(item, collection));
            }

            return [listItem];

        case 'object':
            const item: { [keyof: string]: any } = {};

            for (const [key, value] of Object.entries(input)) {
                item[key] = analyse(value, item);
            }

            return item;

        default:
            return typeof input;
    }
}

function typeOf(input: any) {
    return Array.isArray(input) ? 'array' : typeof input;
}
