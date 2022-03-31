import { SpotlerBaseRepository } from '../../shared/base/spotler-base.repository';
import { SpotlerConfig } from '../../shared/config/spotler-config';

export class SpotlerTrendReportRepository extends SpotlerBaseRepository {
    protected readonly resource = 'trend-report';

    constructor(protected config: SpotlerConfig) {
        super();
    }

    async getTrendReports(args: {
        after?: number;
        pageSize?: number;
        enabled?: boolean;
    }) {
        return this.get({
            endpoint: ``,
            query: {
                after: args.after,
                pageSize: args.pageSize,
                enabled: args.enabled,
            },
        }) as Promise<any[]>;
    }
}
