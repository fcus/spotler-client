import { SpotlerPaging } from './spotler-paging';
import { SpotlerCampaignMailingBounce } from './spotler-campaign-mailing-bounce';

export class SpotlerCampaignMailingBounceResponse {
    paging!: SpotlerPaging;
    bounces!: SpotlerCampaignMailingBounce;
}
