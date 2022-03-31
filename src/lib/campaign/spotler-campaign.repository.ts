import { SpotlerCampaign } from '../../model/spotler-campaign';
import { SpotlerCampaignStopRequest } from '../../model/spotler-campaign-stop-request';
import { SpotlerCampaignTriggerRequest } from '../../model/spotler-campaign-trigger-request';
import { SpotlerBaseRepository } from '../../shared/base/spotler-base.repository';
import { SpotlerConfig } from '../../shared/config/spotler-config';

export class SpotlerCampaignRepository extends SpotlerBaseRepository {
    protected readonly resource = 'campaign';

    constructor(protected config: SpotlerConfig) {
        super();
    }

    async getCampaignMailings(args: { encryptedCampaignId: string }) {
        return this.get({
            endpoint: `${args.encryptedCampaignId}/mailing`,
        }) as Promise<any[]>;
    }

    async list() {
        return this.get({
            endpoint: `list`,
        }) as Promise<SpotlerCampaign[]>;
    }

    async stopCampaign(args: {
        encryptedCampaignId: string;
        body: SpotlerCampaignStopRequest;
    }) {
        return this.post({
            endpoint: `${args.encryptedCampaignId}/stop`,
            body: args.body,
        }) as Promise<any[]>;
    }

    async triggerCampaign(args: {
        encryptedTriggerId: string;
        body: SpotlerCampaignTriggerRequest;
    }) {
        return this.post({
            endpoint: `trigger/${args.encryptedTriggerId}`,
            body: args.body,
        }) as Promise<any[]>;
    }
}
