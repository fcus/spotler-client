import { SpotlerFormElementResult } from './spotler-form-element-result';

export class SpotlerFormResult {
    formResultId!: number;
    submittedAt!: string;
    testResult!: boolean;
    answers!: SpotlerFormElementResult;
    completed!: boolean;
}
