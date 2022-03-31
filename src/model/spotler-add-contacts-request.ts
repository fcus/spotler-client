import { SpotlerContact } from './spotler-contact';

export class SpotlerAddContactsRequest {
    update!: boolean;
    purge!: boolean;
    contacts!: SpotlerContact;
}
