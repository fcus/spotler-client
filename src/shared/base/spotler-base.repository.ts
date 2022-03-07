import { request, RequestOptions } from 'https';
import { SpotlerConfig } from '../config/spotler-config';
import { HttpMethod } from '../http-method.type';
import { OAuth } from '../oauth';

export interface SpotlerBaseRepositoryArgs {
    endpoint: string;
    params?: { [keyof: string]: any };
}

export interface SpotlerBaseRepositoryPostPutArgs<T>
    extends SpotlerBaseRepositoryArgs {
    body: T;
}

export interface SpotlerClientRequestArgs<T> {
    body?: T;
    endpoint: string;
    method: HttpMethod;
    params?: { [keyof: string]: string };
}

export abstract class SpotlerBaseRepository {
    protected abstract readonly config: SpotlerConfig;
    protected abstract readonly resource: string;

    protected readonly baseUrl = 'restapi.mailplus.nl';
    protected readonly version = '1.1.0';

    protected get apiPath() {
        return `integrationservice-${this.version}/${this.resource}`;
    }

    protected async delete(args: SpotlerBaseRepositoryArgs) {
        return this.request({
            endpoint: args.endpoint,
            method: 'DELETE',
            params: args.params,
        });
    }

    protected async get(args: SpotlerBaseRepositoryArgs) {
        return this.request({
            endpoint: args.endpoint,
            method: 'GET',
            params: args.params,
        });
    }

    protected async patch<T>(args: SpotlerBaseRepositoryPostPutArgs<T>) {
        return this.request({
            endpoint: args.endpoint,
            method: 'PATCH',
            params: args.params,
        });
    }

    protected async post<T>(args: SpotlerBaseRepositoryPostPutArgs<T>) {
        return this.request({
            body: args.body,
            endpoint: args.endpoint,
            method: 'POST',
            params: args.params,
        });
    }

    protected async put<T>(args: SpotlerBaseRepositoryPostPutArgs<T>) {
        return this.request({
            body: args.body,
            endpoint: args.endpoint,
            method: 'PUT',
            params: args.params,
        });
    }

    private async request<T>(args: SpotlerClientRequestArgs<T>) {
        return new Promise((resolve, reject) => {
            const oauthData = OAuth.autorize(
                {
                    method: args.method,
                    url: `https://${this.baseUrl}/${this.apiPath}/${args.endpoint}`,
                },
                {
                    consumer: {
                        key: this.config.consumerKey,
                        secret: this.config.consumerSecret,
                    },
                },
            );

            const options: RequestOptions = {
                headers: {
                    Accept: 'application/json',
                    Authorization: oauthData.toHeader(),
                },
                hostname: this.baseUrl,
                method: args.method,
                path: `/${this.apiPath}/${args.endpoint}`,
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
