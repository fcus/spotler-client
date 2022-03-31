import { SpotlerCampaignTrigger } from './spotler-campaign-trigger';

export class SpotlerCampaign {
    encryptedId!: string;
    name!: string;
    active!: boolean;
    triggers!: SpotlerCampaignTrigger;
}
