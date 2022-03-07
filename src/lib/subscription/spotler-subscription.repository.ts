import { SpotlerBaseRepository } from '../../shared/base/spotler-base.repository';
import { SpotlerConfig } from '../../shared/config/spotler-config';

export class SpotlerSubscriptionRepository extends SpotlerBaseRepository {
    protected readonly resource = 'subscription';

    constructor(protected config: SpotlerConfig) {
            super();
    }

    async subscribeContact(args: {
            body: Contact
        }) {
        return this.post({
            endpoint: `/subscribe`,
            body: args.body,
        }) as Promise<any[]>;
    }
}
