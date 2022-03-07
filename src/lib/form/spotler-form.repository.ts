import { SpotlerBaseRepository } from '../../shared/base/spotler-base.repository';
import { SpotlerConfig } from '../../shared/config/spotler-config';

export class SpotlerFormRepository extends SpotlerBaseRepository {
    protected readonly resource = 'form';

    constructor(protected config: SpotlerConfig) {
            super();
    }

    async getForm(args: {
            formId: number,
        postUrl: string,
        encId?: string,
        extraParams?: string,
        outputFormat?: string,
        outputMode?: string
        }) {
        return this.get({
            endpoint: `/${args.formId}`,
            params: {
                postUrl: args.postUrl,
        encId: args.encId,
        extraParams: args.extraParams,
        outputFormat: args.outputFormat,
        outputMode: args.outputMode
            }
        }) as Promise<any[]>;
    }

    async getFormResult(args: {
            formId: number,
        formResultId: number
        }) {
        return this.get({
            endpoint: `/result/${args.formId}/${args.formResultId}`,
        }) as Promise<any[]>;
    }

    async getFormResults(args: {
            formId: number,
        completed?: boolean,
        startDate?: DateParam,
        endDate?: DateParam
        }) {
        return this.get({
            endpoint: `/result/${args.formId}`,
            params: {
                completed: args.completed,
        startDate: args.startDate,
        endDate: args.endDate
            }
        }) as Promise<any[]>;
    }

    async getForms(args: {
            formSubType?: string,
        formState?: string
        }) {
        return this.get({
            endpoint: `/list`,
            params: {
                formSubType: args.formSubType,
        formState: args.formState
            }
        }) as Promise<any[]>;
    }

    async postForm(args: {
            formId: number,
        body: FormRequest
        }) {
        return this.post({
            endpoint: `/${args.formId}`,
            body: args.body,
        }) as Promise<any[]>;
    }

    async submitForm(args: {
            formId: number,
        body: Params
        }) {
        return this.post({
            endpoint: `/result/${args.formId}`,
            body: args.body,
        }) as Promise<any[]>;
    }
}
