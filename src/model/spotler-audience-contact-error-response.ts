import { SpotlerErrorType } from './spotler-error-type';

export class SpotlerAudienceContactErrorResponse {
    errorType!: SpotlerErrorType;
    message!: string;
    externalContactIds!: SpotlerString;
}
