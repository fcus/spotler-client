import { SpotlerClientBase } from '../../shared/base/spotler-client-base';
import { SpotlerClientConfig } from '../../shared/config/spotler-client-config';
import { SpotlerMailing } from './spotler-mailing';

export class SpotlerMailingRepository extends SpotlerClientBase {
    protected readonly resource = 'mailing';

    constructor(protected config: SpotlerClientConfig) {
        super();
    }

    async list() {
        return this.get({
            endpoint: '',
        }) as Promise<SpotlerMailing[]>;
    }
}
