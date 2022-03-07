import test, { ExecutionContext } from 'ava';
import { DateTime } from 'luxon';
import { deepInterfaceCompare } from '../../shared/test/deep-interface-compare';
import { spotlerClientTestContext } from '../../shared/test/spotler-client-test-context';
import { SpotlerMailingRepository } from './spotler-mailing.repository';

test.before(spotlerClientTestContext);

test('list', async (t: ExecutionContext<any>) => {
    const client = new SpotlerMailingRepository(t.context.config);

    const query = {
        fromDate: DateTime.now().minus({ years: 2 }).toFormat('yyyy-MM-dd'),
        toDate: DateTime.now().minus({ years: 0 }).toFormat('yyyy-MM-dd'),
    };

    const result = await client.list({ query });

    t.deepEqual(deepInterfaceCompare(result), {});
});
