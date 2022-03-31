import test, { ExecutionContext } from 'ava';
import { DateTime } from 'luxon';
import { deepInterfaceCompare } from '../../shared/test/deep-interface-compare';
import { spotlerClientTestContext } from '../../shared/test/spotler-client-test-context';
import { SpotlerContactRepository } from './spotler-contact.repository';

test.before(spotlerClientTestContext);

test('Contact repository: get updated contacts', async (t: ExecutionContext<any>) => {
    const client = new SpotlerContactRepository(t.context.config);

    const result = await client.getUpdatedContactsJson({
        fromDate: DateTime.now().toISO(),
        pageSize: 10,
        toDate: DateTime.now().toISO(),
    });

    t.deepEqual(deepInterfaceCompare(result), [
        {
            externalId: 'string',
            created: 'number',
            encryptedId: 'string',
            testGroup: 'boolean',
            lastChanged: 'number',
            temporary: 'boolean',
            properties: {
                permissions: [
                    {
                        description: 'string',
                        bit: 'number',
                        enabled: 'boolean',
                    },
                ],
            },
            channels: [
                {
                    name: 'string',
                    value: 'boolean',
                },
            ],
        },
    ]);
});
