import { SpotlerPaging } from './spotler-paging';
import { SpotlerMailingInteraction } from './spotler-mailing-interaction';

export class SpotlerClickedMailingInteractionResponse {
    paging!: SpotlerPaging;
    interactions!: SpotlerMailingInteraction;
}
