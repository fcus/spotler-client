import { ExecutionContext } from 'ava';
import dotenv from 'dotenv';
import { SpotlerConfig } from '../config/spotler-config';

dotenv.config();

export interface SpotlerClientTestContext {
    config: SpotlerConfig;
}

export function spotlerClientTestContext(t: ExecutionContext<any>): any {
    const config = new SpotlerConfig({
        consumerKey: process.env.CONSUMER_KEY ?? '',
        consumerSecret: process.env.CONSUMER_SECRET ?? '',
    });

    t.context = Object.assign(t.context, { config });
}
