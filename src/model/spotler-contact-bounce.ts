import { SpotlerType } from './spotler-type';
import { SpotlerContact } from './spotler-contact';

export class SpotlerContactBounce {
    date!: string;
    type!: SpotlerType;
    contact!: SpotlerContact;
    encryptedActId!: string;
}
