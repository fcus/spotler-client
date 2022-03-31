export interface SpotlerConfigConstructorArgs {
    consumerKey: string;
    consumerSecret: string;
}

export class SpotlerConfig {
    public readonly consumerKey: string;
    public readonly consumerSecret: string;

    constructor(args: SpotlerConfigConstructorArgs) {
        if (!(args.consumerKey && args.consumerSecret)) {
            throw new Error('Consumer key and consumer secret are required');
        }

        this.consumerKey = args.consumerKey;
        this.consumerSecret = args.consumerSecret;
    }
}
