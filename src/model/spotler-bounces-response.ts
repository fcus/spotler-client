import { SpotlerPaging } from './spotler-paging';
import { SpotlerContactBounce } from './spotler-contact-bounce';

export class SpotlerBouncesResponse {
    paging!: SpotlerPaging;
    bounces!: SpotlerContactBounce;
}
