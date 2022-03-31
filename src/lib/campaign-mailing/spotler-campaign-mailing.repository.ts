import { SpotlerBaseRepository } from '../../shared/base/spotler-base.repository';
import { SpotlerConfig } from '../../shared/config/spotler-config';

export class SpotlerCampaignMailingRepository extends SpotlerBaseRepository {
    protected readonly resource = 'campaign-mailing';

    constructor(protected config: SpotlerConfig) {
        super();
    }

    async getBounces(args: {
        encryptedMailingId: string;
        after?: number;
        pageSize?: number;
        fromDate?: string;
        toDate?: string;
    }) {
        return this.get({
            endpoint: `/${args.encryptedMailingId}/bounces`,
            query: {
                after: args.after,
                pageSize: args.pageSize,
                fromDate: args.fromDate,
                toDate: args.toDate,
            },
        }) as Promise<any[]>;
    }

    async getCampaignMailingContactClicks(args: {
        encryptedMailingId: string;
        campaignSubscriptionId: number;
        after?: number;
        pageSize?: number;
        fromDate?: string;
        toDate?: string;
    }) {
        return this.get({
            endpoint: `/${args.encryptedMailingId}/clicks/${args.campaignSubscriptionId}`,
            query: {
                after: args.after,
                pageSize: args.pageSize,
                fromDate: args.fromDate,
                toDate: args.toDate,
            },
        }) as Promise<any[]>;
    }

    async getCampaignMailingContactOpens(args: {
        encryptedMailingId: string;
        campaignSubscriptionId: number;
        after?: number;
        pageSize?: number;
        fromDate?: string;
        toDate?: string;
    }) {
        return this.get({
            endpoint: `/${args.encryptedMailingId}/opens/${args.campaignSubscriptionId}`,
            query: {
                after: args.after,
                pageSize: args.pageSize,
                fromDate: args.fromDate,
                toDate: args.toDate,
            },
        }) as Promise<any[]>;
    }

    async getCampaignMailingOpens(args: {
        encryptedMailingId: string;
        after?: number;
        pageSize?: number;
        fromDate?: string;
        toDate?: string;
    }) {
        return this.get({
            endpoint: `/${args.encryptedMailingId}/opens`,
            query: {
                after: args.after,
                pageSize: args.pageSize,
                fromDate: args.fromDate,
                toDate: args.toDate,
            },
        }) as Promise<any[]>;
    }

    async getCampaignMailingsDetails(args: { encryptedMailingId: string }) {
        return this.get({
            endpoint: `/${args.encryptedMailingId}`,
        }) as Promise<any[]>;
    }

    async getClicks(args: {
        encryptedMailingId: string;
        after?: number;
        pageSize?: number;
        fromDate?: string;
        toDate?: string;
    }) {
        return this.get({
            endpoint: `/${args.encryptedMailingId}/clicks`,
            query: {
                after: args.after,
                pageSize: args.pageSize,
                fromDate: args.fromDate,
                toDate: args.toDate,
            },
        }) as Promise<any[]>;
    }

    async getMailedContacts(args: {
        encryptedMailingId: string;
        after?: number;
        pageSize?: number;
        fromDate?: string;
        toDate?: string;
    }) {
        return this.get({
            endpoint: `/${args.encryptedMailingId}/recipients`,
            query: {
                after: args.after,
                pageSize: args.pageSize,
                fromDate: args.fromDate,
                toDate: args.toDate,
            },
        }) as Promise<any[]>;
    }
}
