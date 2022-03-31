import { SpotlerBaseRepository } from '../../shared/base/spotler-base.repository';
import { SpotlerConfig } from '../../shared/config/spotler-config';
import { SpotlerConversion } from '../../model/spotler-conversion';

export class SpotlerConversionRepository extends SpotlerBaseRepository {
    protected readonly resource = 'conversion';

    constructor(protected config: SpotlerConfig) {
            super();
    }

    async createConversionInteraction(args: {
            body: SpotlerConversion
        }) {
        return this.post({
            endpoint: ``,
            body: args.body,
        }) as Promise<any[]>;
    }
}
