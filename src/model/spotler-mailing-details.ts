import { SpotlerMessage } from './spotler-message';
import { SpotlerMailingLink } from './spotler-mailing-link';

export class SpotlerMailingDetails {
    encryptedId!: string;
    name!: string;
    scheduledStartDate!: string;
    type!: string;
    archiveLink!: string;
    sentCount!: number;
    sender!: string;
    targetGroup!: string;
    message!: SpotlerMessage;
    links!: SpotlerMailingLink;
}
