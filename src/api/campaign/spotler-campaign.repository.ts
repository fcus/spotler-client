import { SpotlerBaseRepository } from '../../shared/base/spotler-base.repository';
import { SpotlerConfig } from '../../shared/config/spotler-config';
import { SpotlerCampaign } from './spotler-campaign';

export class SpotlerCampaignRepository extends SpotlerBaseRepository {
    protected readonly resource = 'campaign';

    constructor(protected config: SpotlerConfig) {
        super();
    }

    async list() {
        return this.get({
            endpoint: 'list',
        }) as Promise<SpotlerCampaign[]>;
    }

    async trigger(encryptedCampaignId: string) {
        return this.get({
            endpoint: `trigger/${encryptedCampaignId}`,
        });
    }
}
