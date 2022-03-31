import { SpotlerTrendReportContentType } from '../enum/spotler-trend-report-content-type.enum';
import { SpotlerTrendReportTarget } from '../enum/spotler-trend-report-target.enum';

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
