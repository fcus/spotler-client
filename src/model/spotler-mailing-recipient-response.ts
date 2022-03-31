import { SpotlerPaging } from './spotler-paging';
import { SpotlerMailingRecipient } from './spotler-mailing-recipient';

export class SpotlerMailingRecipientResponse {
    paging!: SpotlerPaging;
    recipients!: SpotlerMailingRecipient;
}
