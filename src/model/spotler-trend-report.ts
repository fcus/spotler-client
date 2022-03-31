import { SpotlerTrendReportTarget } from './spotler-trend-report-target';
import { SpotlerTrendReportContentType } from './spotler-trend-report-content-type';

export class SpotlerTrendReport {
    id!: number;
    name!: string;
    enabled!: boolean;
    target!: SpotlerTrendReportTarget;
    createDate!: string;
    folderId!: string;
    contentType!: SpotlerTrendReportContentType;
    reportingEnabled!: boolean;
    sendDays!: number;
    sendHours!: number;
    sendMinutes!: number;
    reportEmail1!: string;
    reportEmail2!: string;
    reportEmail3!: string;
    author!: string;
    mailingCount!: number;
}
