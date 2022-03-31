import test from 'ava';
import { deepInterfaceCompare } from './deep-interface-compare';

test('write a test for this feature', t => {
    t.pass();
});

test('deepInterfaceCompare', t => {
    const result = deepInterfaceCompare({
        count: 100,
        isRoot: true,
        list: [
            {
                isList: true,
                value: 80,
            },
            {
                isList: false,
                remark: 'Hey',
                value: 90,
            },
        ],
        message: 'Welcome',
        nested: {
            isNested: true,
        },
    });

    t.deepEqual(result, {
        count: 'number',
        isRoot: 'boolean',
        list: [
            {
                isList: 'boolean',
                remark: 'string',
                value: 'number',
            },
        ],
        message: 'string',
        nested: {
            isNested: 'boolean',
        },
    });
});
