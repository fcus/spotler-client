import { SpotlerErrorType } from '../enum/spotler-error-type.enum';

export class SpotlerAudienceContactErrorResponse {
    errorType!: SpotlerErrorType;
    message!: string;
    externalContactIds!: any;
}
