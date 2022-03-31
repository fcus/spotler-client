import { SpotlerContactIdentifier } from './spotler-contact-identifier';

export class SpotlerCampaignMailingBounce {
    contactIdentifier!: SpotlerContactIdentifier;
    bounceDate!: string;
    type!: string;
    campaignSubscriptionId!: number;
}
