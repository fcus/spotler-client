import { SpotlerBaseRepository } from '../../shared/base/spotler-base.repository';
import { SpotlerConfig } from '../../shared/config/spotler-config';

export class SpotlerContactRepository extends SpotlerBaseRepository {
    protected readonly resource = 'contact';

    constructor(protected config: SpotlerConfig) {
            super();
    }

    async anonymizeContact(args: {
            externalId: string
        }) {
        return this.put({
            endpoint: `/anonymize/${args.externalId}`,
            body: args.body,
        }) as Promise<any[]>;
    }

    async getAvailableProperties(args: {
            
        }) {
        return this.get({
            endpoint: `/properties/list`,
        }) as Promise<any[]>;
    }

    async getBouncedContactsJson(args: {
            fromDate: string,
        toDate: string,
        after?: number,
        pageSize: number
        }) {
        return this.get({
            endpoint: `/bounces/list`,
            params: {
                fromDate: args.fromDate,
        toDate: args.toDate,
        after: args.after,
        pageSize: args.pageSize
            }
        }) as Promise<any[]>;
    }

    async getCampaignMailingHistory(args: {
            externalId: string,
        after?: number
        }) {
        return this.get({
            endpoint: `/${args.externalId}/campaign-mailings`,
            params: {
                after: args.after
            }
        }) as Promise<any[]>;
    }

    async getContact(args: {
            externalId: string
        }) {
        return this.get({
            endpoint: `/${args.externalId}`,
        }) as Promise<any[]>;
    }

    async getFormHistory(args: {
            externalId: string,
        after?: number,
        pageSize?: number
        }) {
        return this.get({
            endpoint: `/${args.externalId}/forms`,
            params: {
                after: args.after,
        pageSize: args.pageSize
            }
        }) as Promise<any[]>;
    }

    async getMailingHistory(args: {
            externalId: string,
        after?: number
        }) {
        return this.get({
            endpoint: `/${args.externalId}/mailings`,
            params: {
                after: args.after
            }
        }) as Promise<any[]>;
    }

    async getUpdatedContactsJson(args: {
            fromDate: string,
        toDate: string,
        after?: number,
        pageSize: number
        }) {
        return this.get({
            endpoint: `/updates/list`,
            params: {
                fromDate: args.fromDate,
        toDate: args.toDate,
        after: args.after,
        pageSize: args.pageSize
            }
        }) as Promise<any[]>;
    }

    async insertContact(args: {
            body: ContactRequest
        }) {
        return this.post({
            endpoint: ``,
            body: args.body,
        }) as Promise<any[]>;
    }

    async insertContacts(args: {
            body: AddContactsRequest
        }) {
        return this.post({
            endpoint: `/list`,
            body: args.body,
        }) as Promise<any[]>;
    }

    async searchContactsJson(args: {
            after?: number,
        pageSize: number,
        MPSearchQuery: string
        }) {
        return this.get({
            endpoint: `/search`,
            params: {
                after: args.after,
        pageSize: args.pageSize,
        MPSearchQuery: args.MPSearchQuery
            }
        }) as Promise<any[]>;
    }

    async updateContact(args: {
            body: ContactRequest,
        externalId: string
        }) {
        return this.put({
            endpoint: `/${args.externalId}`,
            body: args.body,
        }) as Promise<any[]>;
    }
}
