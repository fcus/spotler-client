import { SpotlerPaging } from './spotler-paging';
import { SpotlerCampaignMailingHistory } from './spotler-campaign-mailing-history';

export class SpotlerCampaignMailingHistoryResponse {
    paging!: SpotlerPaging;
    campaignMailingHistories!: SpotlerCampaignMailingHistory;
}
