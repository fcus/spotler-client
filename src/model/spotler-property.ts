import { SpotlerSetPropertyEntry } from './spotler-set-property-entry';

export class SpotlerProperty {
    name!: string;
    description!: string;
    type!: string;
    entries!: SpotlerSetPropertyEntry;
}
