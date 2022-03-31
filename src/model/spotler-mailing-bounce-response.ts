import { SpotlerPaging } from './spotler-paging';
import { SpotlerMailingBounce } from './spotler-mailing-bounce';

export class SpotlerMailingBounceResponse {
    paging!: SpotlerPaging;
    bounces!: SpotlerMailingBounce;
}
