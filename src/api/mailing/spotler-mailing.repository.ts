import { SpotlerBaseRepository } from '../../shared/base/spotler-base.repository';
import { SpotlerConfig } from '../../shared/config/spotler-config';
import { SpotlerMailing } from './spotler-mailing';

export interface SpotlerMailingListArgs {
    query: {
        fromDate: string;
        toDate: string;
    };
}

export class SpotlerMailingRepository extends SpotlerBaseRepository {
    protected readonly resource = 'mailing';

    constructor(protected config: SpotlerConfig) {
        super();
    }

    async list({ query }: SpotlerMailingListArgs) {
        return this.get({
            endpoint: '',
            query,
        }) as Promise<SpotlerMailing[]>;
    }
}
