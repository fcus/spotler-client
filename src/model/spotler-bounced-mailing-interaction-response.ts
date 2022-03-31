import { SpotlerPaging } from './spotler-paging';
import { SpotlerMailingInteractionBounce } from './spotler-mailing-interaction-bounce';

export class SpotlerBouncedMailingInteractionResponse {
    paging!: SpotlerPaging;
    interactions!: SpotlerMailingInteractionBounce;
}
