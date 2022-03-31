import { SpotlerMapStringArrayString } from './spotler-map-string-array-string';

export class SpotlerFormRequest {
    postUrl!: string;
    encId!: string;
    extraParams!: string;
    outputFormat!: string;
    outputMode!: string;
    prefilledValues!: SpotlerMapStringArrayString;
}
