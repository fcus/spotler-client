import { SpotlerBaseRepository } from '../../shared/base/spotler-base.repository';
import { SpotlerConfig } from '../../shared/config/spotler-config';

export class SpotlerAudienceRepository extends SpotlerBaseRepository {
    protected readonly resource = 'audience';

    constructor(protected config: SpotlerConfig) {
            super();
    }

    async deleteAudience(args: {
            externalId: string
        }) {
        return this.delete({
            endpoint: `/${args.externalId}`,
        }) as Promise<any[]>;
    }

    async getAudience(args: {
            externalId: string
        }) {
        return this.get({
            endpoint: `/${args.externalId}`,
        }) as Promise<any[]>;
    }

    async insertAudience(args: {
            body: CreateAudienceRequest
        }) {
        return this.post({
            endpoint: ``,
            body: args.body,
        }) as Promise<any[]>;
    }

    async updateAudience(args: {
            externalId: string,
        body: Audience
        }) {
        return this.put({
            endpoint: `/${args.externalId}`,
            body: args.body,
        }) as Promise<any[]>;
    }
}
