import { SpotlerPaging } from './spotler-paging';
import { SpotlerCampaignMailingRecipient } from './spotler-campaign-mailing-recipient';

export class SpotlerCampaignMailingRecipientResponse {
    paging!: SpotlerPaging;
    recipients!: SpotlerCampaignMailingRecipient;
}
