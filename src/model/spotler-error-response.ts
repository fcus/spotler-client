import { SpotlerErrorType } from './spotler-error-type';

export class SpotlerErrorResponse {
    errorType!: SpotlerErrorType;
    message!: string;
}
