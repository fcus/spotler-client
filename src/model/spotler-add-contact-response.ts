import { SpotlerContactResponseCode } from '../enum/spotler-contact-response-code.enum';

export class SpotlerAddContactResponse {
    externalId!: string;
    code!: SpotlerContactResponseCode;
    message!: string;
}
