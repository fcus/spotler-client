import test from 'ava';
import { config } from '../../shared/test/spotler-client-test-context';
import { SpotlerCampaignMailingRepository } from './spotler-campaign-mailing.repository';

const encryptedMailingId = process.env.ENCRYPTED_MAILING_ID as string;

let repository: SpotlerCampaignMailingRepository;

test.before(() => {
    repository = new SpotlerCampaignMailingRepository(config);
});

test('should get mailings', async t => {
    const result = await repository.getCampaignMailingsDetails({
        encryptedMailingId,
    });

    t.is(result.encryptedId, encryptedMailingId);
    t.is(result.message?.name, 'test');
    t.is(result.message?.subject, 'test subject');
});

test('should get bounces', async t => {
    const result = await repository.getBounces({
        after: 1,
        encryptedMailingId,
    });

    t.is(Array.isArray(result.bounces), true);
    t.is(result.paging.after, 10);
});

test('should get clicks', async t => {
    const result = await repository.getClicks({
        after: 1,
        encryptedMailingId,
    });

    t.is(Array.isArray(result.clicks), true);
    t.is(result.paging.after, 10);
});
