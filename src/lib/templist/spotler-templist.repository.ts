import { SpotlerBaseRepository } from '../../shared/base/spotler-base.repository';
import { SpotlerConfig } from '../../shared/config/spotler-config';

export class SpotlerTemplistRepository extends SpotlerBaseRepository {
    protected readonly resource = 'templist';

    constructor(protected config: SpotlerConfig) {
            super();
    }

    async addContactsToTemporaryList(args: {
            externalTemporaryListId: string,
        body: AddContactsToTemporaryListRequest
        }) {
        return this.post({
            endpoint: `/${args.externalTemporaryListId}`,
            body: args.body,
        }) as Promise<any[]>;
    }

    async createTemporaryList(args: {
            body: CreateTemporaryListRequest
        }) {
        return this.post({
            endpoint: ``,
            body: args.body,
        }) as Promise<any[]>;
    }

    async deleteTemporaryList(args: {
            externalTemporaryListId: string
        }) {
        return this.delete({
            endpoint: `/${args.externalTemporaryListId}`,
        }) as Promise<any[]>;
    }

    async getTemporaryLists(args: {
            
        }) {
        return this.get({
            endpoint: ``,
        }) as Promise<any[]>;
    }
}
