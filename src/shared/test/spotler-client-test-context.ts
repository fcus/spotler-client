import { ExecutionContext } from 'ava';
import dotenv from 'dotenv';
import { SpotlerConfig } from '../config/spotler-config';

dotenv.config();

export interface SpotlerClientTestContext {
    config: SpotlerConfig;
}

export const config = new SpotlerConfig({
    consumerKey: process.env.CONSUMER_KEY ?? '',
    consumerSecret: process.env.CONSUMER_SECRET ?? '',
});

export function spotlerClientTestContext(t: ExecutionContext<any>): any {
    t.context = Object.assign(t.context, { config });
}
