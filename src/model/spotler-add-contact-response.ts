import { SpotlerContactResponseCode } from './spotler-contact-response-code';

export class SpotlerAddContactResponse {
    externalId!: string;
    code!: SpotlerContactResponseCode;
    message!: string;
}
