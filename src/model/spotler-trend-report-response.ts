import { SpotlerPaging } from './spotler-paging';
import { SpotlerTrendReport } from './spotler-trend-report';

export class SpotlerTrendReportResponse {
    paging!: SpotlerPaging;
    trendReports!: SpotlerTrendReport;
}
