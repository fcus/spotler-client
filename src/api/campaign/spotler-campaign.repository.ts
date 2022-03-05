import { SpotlerClientBase } from '../../shared/base/spotler-client-base';
import { SpotlerClientConfig } from '../../shared/config/spotler-client-config';
import { SpotlerCampaign } from './spotler-campaign';

export class SpotlerCampaignRepository extends SpotlerClientBase {
    protected readonly resource = 'campaign';

    constructor(protected config: SpotlerClientConfig) {
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
