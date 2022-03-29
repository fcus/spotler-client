export class TrendReport {
    id: number;
    name: string;
    enabled: boolean;
    target: TrendReportTarget;
    createDate: string;
    folderId: string;
    contentType: TrendReportContentType;
    reportingEnabled: boolean;
    sendDays: number;
    sendHours: number;
    sendMinutes: number;
    reportEmail1: string;
    reportEmail2: string;
    reportEmail3: string;
    author: string;
    mailingCount: number;
}
