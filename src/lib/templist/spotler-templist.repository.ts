import { SpotlerBaseRepository } from '../../shared/base/spotler-base.repository';
import { SpotlerConfig } from '../../shared/config/spotler-config';
import { SpotlerAddContactsToTemporaryListRequest } from '../../model/spotler-add-contacts-to-temporary-list-request';
import { SpotlerCreateTemporaryListRequest } from '../../model/spotler-create-temporary-list-request';

export class SpotlerTemplistRepository extends SpotlerBaseRepository {
    protected readonly resource = 'templist';

    constructor(protected config: SpotlerConfig) {
            super();
    }

    async addContactsToTemporaryList(args: {
            externalTemporaryListId: string,
        body: SpotlerAddContactsToTemporaryListRequest
        }) {
        return this.post({
            endpoint: `/${args.externalTemporaryListId}`,
            body: args.body,
        }) as Promise<any[]>;
    }

    async createTemporaryList(args: {
            body: SpotlerCreateTemporaryListRequest
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
