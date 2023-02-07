import { SpotlerCampaignMailingOpen } from './spotler-campaign-mailing-open';
import { SpotlerPaging } from './spotler-paging';

export class SpotlerCampaignMailingOpenResponse {
    paging!: SpotlerPaging;
    opens!: SpotlerCampaignMailingOpen[];
}
