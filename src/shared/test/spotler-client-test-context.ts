import { ExecutionContext } from 'ava';
import dotenv from 'dotenv';
import { SpotlerClientConfig } from '../config/spotler-client-config';

dotenv.config();

export interface SpotlerClientTestContext {
    config: SpotlerClientConfig;
}

export function spotlerClientTestContext(t: ExecutionContext<any>): any {
    const config = new SpotlerClientConfig({
        consumerKey: process.env.CONSUMER_KEY ?? '',
        consumerSecret: process.env.CONSUMER_SECRET ?? '',
    });

    t.context = Object.assign(t.context, { config });
}
