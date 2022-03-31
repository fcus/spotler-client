import { SpotlerMessage } from './spotler-message';
import { SpotlerMailingLink } from './spotler-mailing-link';

export class SpotlerCampaignMailingDetails {
    encryptedId!: string;
    name!: string;
    type!: string;
    message!: SpotlerMessage;
    links!: SpotlerMailingLink;
}
