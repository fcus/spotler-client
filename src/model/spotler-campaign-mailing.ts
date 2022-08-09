import { SpotlerCampaignMailingLink } from './spotler-campaign-mailing-link';
import { SpotlerCampaignMailingMessage } from './spotler-campaign-mailing-message';

export class SpotlerCampaignMailing {
    encryptedId!: string;
    name!: string;
    type!: string;
    message?: SpotlerCampaignMailingMessage;
    links?: SpotlerCampaignMailingLink[];
}
