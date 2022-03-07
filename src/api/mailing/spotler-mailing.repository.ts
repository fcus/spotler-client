import { SpotlerBaseRepository } from '../../shared/base/spotler-base.repository';
import { SpotlerConfig } from '../../shared/config/spotler-config';
import { SpotlerMailing } from './spotler-mailing';

export class SpotlerMailingRepository extends SpotlerBaseRepository {
    protected readonly resource = 'mailing';

    constructor(protected config: SpotlerConfig) {
        super();
    }

    async list() {
        return this.get({
            endpoint: '',
        }) as Promise<SpotlerMailing[]>;
    }
}
