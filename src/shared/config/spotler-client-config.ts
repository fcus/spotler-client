import { SpotlerClientConfigConstructorArgs } from './spotler-client-config-constructor-args.interface';

export class SpotlerClientConfig {
    public readonly consumerKey: string;
    public readonly consumerSecret: string;

    constructor(args: SpotlerClientConfigConstructorArgs) {
        if (!(args.consumerKey && args.consumerSecret)) {
            throw new Error('Consumer key and consumer secret are required');
        }

        this.consumerKey = args.consumerKey;
        this.consumerSecret = args.consumerSecret;
    }
}
