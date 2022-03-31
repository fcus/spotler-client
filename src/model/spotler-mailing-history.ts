import { SpotlerMailing } from './spotler-mailing';

export class SpotlerMailingHistory {
    mailing!: SpotlerMailing;
    sentDate!: string;
    opened!: boolean;
    clicked!: boolean;
    bounce!: string;
}
