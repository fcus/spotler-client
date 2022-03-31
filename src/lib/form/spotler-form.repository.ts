import { SpotlerDateParam } from '../../model/spotler-date-param';
import { SpotlerFormRequest } from '../../model/spotler-form-request';
import { SpotlerParams } from '../../model/spotler-params';
import { SpotlerBaseRepository } from '../../shared/base/spotler-base.repository';
import { SpotlerConfig } from '../../shared/config/spotler-config';

export class SpotlerFormRepository extends SpotlerBaseRepository {
    protected readonly resource = 'form';

    constructor(protected config: SpotlerConfig) {
        super();
    }

    async getForm(args: {
        formId: number;
        postUrl: string;
        encId?: string;
        extraParams?: string;
        outputFormat?: string;
        outputMode?: string;
    }) {
        return this.get({
            endpoint: `/${args.formId}`,
            query: {
                postUrl: args.postUrl,
                encId: args.encId,
                extraParams: args.extraParams,
                outputFormat: args.outputFormat,
                outputMode: args.outputMode,
            },
        }) as Promise<any[]>;
    }

    async getFormResult(args: { formId: number; formResultId: number }) {
        return this.get({
            endpoint: `/result/${args.formId}/${args.formResultId}`,
        }) as Promise<any[]>;
    }

    async getFormResults(args: {
        formId: number;
        completed?: boolean;
        startDate?: SpotlerDateParam;
        endDate?: SpotlerDateParam;
    }) {
        return this.get({
            endpoint: `/result/${args.formId}`,
            query: {
                completed: args.completed,
                startDate: args.startDate,
                endDate: args.endDate,
            },
        }) as Promise<any[]>;
    }

    async getForms(args: { formSubType?: string; formState?: string }) {
        return this.get({
            endpoint: `/list`,
            query: {
                formSubType: args.formSubType,
                formState: args.formState,
            },
        }) as Promise<any[]>;
    }

    async postForm(args: { formId: number; body: SpotlerFormRequest }) {
        return this.post({
            endpoint: `/${args.formId}`,
            body: args.body,
        }) as Promise<any[]>;
    }

    async submitForm(args: { formId: number; body: SpotlerParams }) {
        return this.post({
            endpoint: `/result/${args.formId}`,
            body: args.body,
        }) as Promise<any[]>;
    }
}
