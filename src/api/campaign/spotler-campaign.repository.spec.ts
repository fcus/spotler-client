import test, { ExecutionContext } from 'ava';
import { deepInterfaceCompare } from '../../shared/test/deep-interface-compare';
import { spotlerClientTestContext } from '../../shared/test/spotler-client-test-context';
import { SpotlerCampaignRepository } from './spotler-campaign.repository';

test.before(spotlerClientTestContext);

test('list', async (t: ExecutionContext<any>) => {
    const client = new SpotlerCampaignRepository(t.context.config);

    const result = await client.list();

    t.deepEqual(deepInterfaceCompare(result), [
        {
            active: 'boolean',
            encryptedId: 'string',
            name: 'string',
            triggers: [
                {
                    encryptedId: 'string',
                    name: 'string',
                },
            ],
        },
    ]);
});
