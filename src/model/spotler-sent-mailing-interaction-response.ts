import { SpotlerPaging } from './spotler-paging';
import { SpotlerMailingInteractionSent } from './spotler-mailing-interaction-sent';

export class SpotlerSentMailingInteractionResponse {
    paging!: SpotlerPaging;
    interactions!: SpotlerMailingInteractionSent;
}
