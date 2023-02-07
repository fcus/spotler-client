import { SpotlerCampaignMailingRecipient } from './spotler-campaign-mailing-recipient';
import { SpotlerPaging } from './spotler-paging';

export class SpotlerCampaignMailingRecipientResponse {
    paging!: SpotlerPaging;
    recipients!: SpotlerCampaignMailingRecipient[];
}
