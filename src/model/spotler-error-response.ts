import { SpotlerErrorType } from '../enum/spotler-error-type.enum';

export class SpotlerErrorResponse {
    errorType!: SpotlerErrorType;
    message!: string;
}
