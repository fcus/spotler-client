import test, { ExecutionContext } from 'ava';
import { deepInterfaceCompare } from '../../shared/test/deep-interface-compare';
import { spotlerClientTestContext } from '../../shared/test/spotler-client-test-context';
import { SpotlerMailingRepository } from './spotler-mailing.repository';

test.before(spotlerClientTestContext);

test('list', async (t: ExecutionContext<any>) => {
    const client = new SpotlerMailingRepository(t.context.config);

    const result = await client.list();

    t.deepEqual(deepInterfaceCompare(result), {});
});
