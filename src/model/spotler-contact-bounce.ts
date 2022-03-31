import { SpotlerContactBounceType } from '../enum/spotler-type.enum';
import { SpotlerContact } from './spotler-contact';

export class SpotlerContactBounce {
    date!: string;
    type!: SpotlerContactBounceType;
    contact!: SpotlerContact;
    encryptedActId!: string;
}
