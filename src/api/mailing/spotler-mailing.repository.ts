import { SpotlerClientBase } from '../../shared/base/spotler-client-base';
import { SpotlerClientConfig } from '../../shared/config/spotler-client-config';
import { SpotlerMailing } from './spotler-mailing';

export interface SpotlerMailingListArgs {
    query: {
        fromDate: string;
        toDate: string;
    };
}

export class SpotlerMailingRepository extends SpotlerClientBase {
    protected readonly resource = 'mailing';

    constructor(protected config: SpotlerClientConfig) {
        super();
    }

    async list({ query }: SpotlerMailingListArgs) {
        return this.get({
            endpoint: '',
            query,
        }) as Promise<SpotlerMailing[]>;
    }
}
