import { SpotlerMapStringObject } from './spotler-map-string-object';
import { SpotlerChannel } from './spotler-channel';

export class SpotlerContact {
    externalId!: string;
    created!: string;
    encryptedId!: string;
    testGroup!: boolean;
    lastChanged!: string;
    temporary!: boolean;
    properties!: SpotlerMapStringObject;
    channels!: SpotlerChannel;
}
