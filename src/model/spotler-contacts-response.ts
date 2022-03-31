import { SpotlerPaging } from './spotler-paging';
import { SpotlerContact } from './spotler-contact';

export class SpotlerContactsResponse {
    paging!: SpotlerPaging;
    contacts!: SpotlerContact;
}
