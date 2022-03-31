import { SpotlerBaseRepository } from '../../shared/base/spotler-base.repository';
import { SpotlerConfig } from '../../shared/config/spotler-config';

export class SpotlerMailingInteractionRepository extends SpotlerBaseRepository {
    protected readonly resource = 'mailing-interaction';

    constructor(protected config: SpotlerConfig) {
        super();
    }

    async getBouncedMailingInteractions(args: {
        fromDate?: string;
        toDate?: string;
        fromChangeDate?: string;
        toChangeDate?: string;
        trendReportIds?: string;
        after?: number;
        pageSize?: number;
    }) {
        return this.get({
            endpoint: `bounced`,
            query: {
                fromDate: args.fromDate,
                toDate: args.toDate,
                fromChangeDate: args.fromChangeDate,
                toChangeDate: args.toChangeDate,
                trendReportIds: args.trendReportIds,
                after: args.after,
                pageSize: args.pageSize,
            },
        }) as Promise<any[]>;
    }

    async getClickedMailingInteractions(args: {
        fromDate?: string;
        toDate?: string;
        fromChangeDate?: string;
        toChangeDate?: string;
        trendReportIds?: string;
        after?: number;
        pageSize?: number;
    }) {
        return this.get({
            endpoint: `clicked`,
            query: {
                fromDate: args.fromDate,
                toDate: args.toDate,
                fromChangeDate: args.fromChangeDate,
                toChangeDate: args.toChangeDate,
                trendReportIds: args.trendReportIds,
                after: args.after,
                pageSize: args.pageSize,
            },
        }) as Promise<any[]>;
    }

    async getOpenedMailingInteractions(args: {
        fromDate?: string;
        toDate?: string;
        fromChangeDate?: string;
        toChangeDate?: string;
        trendReportIds?: string;
        after?: number;
        pageSize?: number;
    }) {
        return this.get({
            endpoint: `opened`,
            query: {
                fromDate: args.fromDate,
                toDate: args.toDate,
                fromChangeDate: args.fromChangeDate,
                toChangeDate: args.toChangeDate,
                trendReportIds: args.trendReportIds,
                after: args.after,
                pageSize: args.pageSize,
            },
        }) as Promise<any[]>;
    }

    async getSentMailings(args: {
        fromDate?: string;
        toDate?: string;
        fromChangeDate?: string;
        toChangeDate?: string;
        trendReportIds?: string;
        after?: number;
        pageSize?: number;
    }) {
        return this.get({
            endpoint: `sent`,
            query: {
                fromDate: args.fromDate,
                toDate: args.toDate,
                fromChangeDate: args.fromChangeDate,
                toChangeDate: args.toChangeDate,
                trendReportIds: args.trendReportIds,
                after: args.after,
                pageSize: args.pageSize,
            },
        }) as Promise<any[]>;
    }
}
