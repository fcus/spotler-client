import { SpotlerBaseRepository } from '../../shared/base/spotler-base.repository';
import { SpotlerConfig } from '../../shared/config/spotler-config';

export class SpotlerMailingRepository extends SpotlerBaseRepository {
    protected readonly resource = 'mailing';

    constructor(protected config: SpotlerConfig) {
            super();
    }

    async getMailedContacts(args: {
            encryptedMailingId: string,
        after?: number,
        pageSize?: number
        }) {
        return this.get({
            endpoint: `/${args.encryptedMailingId}/recipients`,
            params: {
                after: args.after,
        pageSize: args.pageSize
            }
        }) as Promise<any[]>;
    }

    async getMailingBounceResponse(args: {
            encryptedMailingId: string,
        after?: number,
        pageSize?: number
        }) {
        return this.get({
            endpoint: `/${args.encryptedMailingId}/bounces`,
            params: {
                after: args.after,
        pageSize: args.pageSize
            }
        }) as Promise<any[]>;
    }

    async getMailingClickResponse(args: {
            encryptedMailingId: string,
        after?: number,
        pageSize?: number
        }) {
        return this.get({
            endpoint: `/${args.encryptedMailingId}/clicks`,
            params: {
                after: args.after,
        pageSize: args.pageSize
            }
        }) as Promise<any[]>;
    }

    async getMailingContactClicksResponse(args: {
            encryptedMailingId: string,
        externalId: string,
        after?: number,
        pageSize?: number
        }) {
        return this.get({
            endpoint: `/${args.encryptedMailingId}/clicks/${args.externalId}`,
            params: {
                after: args.after,
        pageSize: args.pageSize
            }
        }) as Promise<any[]>;
    }

    async getMailingContactOpensResponse(args: {
            encryptedMailingId: string,
        externalId: string,
        after?: number,
        pageSize?: number
        }) {
        return this.get({
            endpoint: `/${args.encryptedMailingId}/opens/${args.externalId}`,
            params: {
                after: args.after,
        pageSize: args.pageSize
            }
        }) as Promise<any[]>;
    }

    async getMailingDetails(args: {
            encryptedMailingId: string
        }) {
        return this.get({
            endpoint: `/${args.encryptedMailingId}`,
        }) as Promise<any[]>;
    }

    async getMailingOpensResponse(args: {
            encryptedMailingId: string,
        after?: number,
        pageSize?: number
        }) {
        return this.get({
            endpoint: `/${args.encryptedMailingId}/opens`,
            params: {
                after: args.after,
        pageSize: args.pageSize
            }
        }) as Promise<any[]>;
    }

    async getMailingStats(args: {
            encryptedMailingId: string
        }) {
        return this.get({
            endpoint: `/${args.encryptedMailingId}/statistics`,
        }) as Promise<any[]>;
    }

    async getMailings(args: {
            fromDate: string,
        toDate: string
        }) {
        return this.get({
            endpoint: ``,
            params: {
                fromDate: args.fromDate,
        toDate: args.toDate
            }
        }) as Promise<any[]>;
    }
}
