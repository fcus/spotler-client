import { SpotlerCampaignMailingClick } from './spotler-campaign-mailing-click';
import { SpotlerPaging } from './spotler-paging';

export class SpotlerCampaignMailingClickResponse {
    paging!: SpotlerPaging;
    clicks!: SpotlerCampaignMailingClick[];
}
