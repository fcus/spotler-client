import { SpotlerContactIdentifier } from './spotler-contact-identifier';

export class SpotlerCampaignMailingRecipient {
    contactIdentifier!: SpotlerContactIdentifier;
    sendDate!: string;
    campaignSubscriptionId!: number;
}
