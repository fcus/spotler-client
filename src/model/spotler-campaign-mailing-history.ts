import { SpotlerCampaignMailing } from './spotler-campaign-mailing';

export class SpotlerCampaignMailingHistory {
    campaignMailing!: SpotlerCampaignMailing;
    campaignSubscriptionId!: number;
    sentDate!: string;
    opened!: boolean;
    clicked!: boolean;
    bounce!: string;
}
