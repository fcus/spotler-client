import { SpotlerPaging } from './spotler-paging';
import { SpotlerMailingHistory } from './spotler-mailing-history';

export class SpotlerMailingHistoryResponse {
    paging!: SpotlerPaging;
    mailingHistories!: SpotlerMailingHistory;
}
