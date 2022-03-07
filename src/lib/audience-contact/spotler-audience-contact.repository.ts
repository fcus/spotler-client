import { SpotlerBaseRepository } from '../../shared/base/spotler-base.repository';
import { SpotlerConfig } from '../../shared/config/spotler-config';

export class SpotlerAudienceContactRepository extends SpotlerBaseRepository {
    protected readonly resource = 'audience-contact';

    constructor(protected config: SpotlerConfig) {
            super();
    }

    async addContactsAudience(args: {
            externalId: string,
        body: ChangeContactsAudienceRequest
        }) {
        return this.post({
            endpoint: `/audience/${args.externalId}/contact`,
            body: args.body,
        }) as Promise<any[]>;
    }

    async removeContactsAudience(args: {
            externalId: string,
        body?: ChangeContactsAudienceRequest
        }) {
        return this.delete({
            endpoint: `/audience/${args.externalId}/contact`,
        }) as Promise<any[]>;
    }
}
