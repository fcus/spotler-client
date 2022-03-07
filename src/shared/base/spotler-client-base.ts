import { OAuth } from '@fcus/oauth-1-header';
import { request, RequestOptions } from 'https';
import QS from 'querystring';
import { SpotlerClientConfig } from '../config/spotler-client-config';
import { SpotlerClientGetArgs } from './spotler-client-get-args.interface';
import { SpotlerClientRequestArgs } from './spotler-client-request-args.interface';

export abstract class SpotlerClientBase {
    protected abstract readonly config: SpotlerClientConfig;
    protected abstract readonly resource: string;

    protected readonly baseUrl = 'restapi.mailplus.nl';
    protected readonly version = '1.1.0';

    protected get apiPath() {
        return `integrationservice-${this.version}/${this.resource}`;
    }

    protected async get(args: SpotlerClientGetArgs) {
        return this.request({
            endpoint: args.endpoint,
            method: 'GET',
            query: args.query,
        });
    }

    private async request(args: SpotlerClientRequestArgs) {
        return new Promise((resolve, reject) => {
            const oauthData = OAuth.authorize(
                {
                    method: args.method,
                    url: `https://${this.baseUrl}/${this.apiPath}/${args.endpoint}`,
                    query: args.query,
                },
                {
                    consumer: {
                        key: this.config.consumerKey,
                        secret: this.config.consumerSecret,
                    },
                },
            );

            const query = args.query ? `?${QS.stringify(args.query)}` : '';

            const options: RequestOptions = {
                headers: {
                    Accept: 'application/json',
                    Authorization: oauthData,
                },
                hostname: this.baseUrl,
                method: args.method,
                path: `/${this.apiPath}/${args.endpoint}${query}`,
                port: 443,
            };

            const r = request(options, result => {
                result.setEncoding('utf8');

                result.on('data', d => {
                    resolve(JSON.parse(d));
                });
            });

            r.on('error', error => {
                reject(error);
            });

            r.end();
        });
    }
}
