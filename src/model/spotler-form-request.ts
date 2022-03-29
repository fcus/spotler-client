export class FormRequest {
    postUrl: string;
    encId: string;
    extraParams: string;
    outputFormat: string;
    outputMode: string;
    prefilledValues: Map[string,Array[string]];
}
