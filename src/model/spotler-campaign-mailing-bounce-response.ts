import { SpotlerCampaignMailingBounce } from './spotler-campaign-mailing-bounce';
import { SpotlerPaging } from './spotler-paging';

export class SpotlerCampaignMailingBounceResponse {
    paging!: SpotlerPaging;
    bounces!: SpotlerCampaignMailingBounce[];
}
