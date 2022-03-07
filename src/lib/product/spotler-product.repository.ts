import { SpotlerBaseRepository } from '../../shared/base/spotler-base.repository';
import { SpotlerConfig } from '../../shared/config/spotler-config';

export class SpotlerProductRepository extends SpotlerBaseRepository {
    protected readonly resource = 'product';

    constructor(protected config: SpotlerConfig) {
            super();
    }

    async deleteProduct(args: {
            externalProductId: string
        }) {
        return this.delete({
            endpoint: `/${args.externalProductId}`,
        }) as Promise<any[]>;
    }

    async getAvailableProperties(args: {
            
        }) {
        return this.get({
            endpoint: `/custom-properties/list`,
        }) as Promise<any[]>;
    }

    async getProduct(args: {
            externalProductId: string
        }) {
        return this.get({
            endpoint: `/${args.externalProductId}`,
        }) as Promise<any[]>;
    }

    async insertProduct(args: {
            body: ProductRequest
        }) {
        return this.post({
            endpoint: ``,
            body: args.body,
        }) as Promise<any[]>;
    }

    async searchProducts(args: {
            after?: number,
        pageSize?: number,
        MPSearchQuery: string
        }) {
        return this.get({
            endpoint: `/search`,
            params: {
                after: args.after,
        pageSize: args.pageSize,
        MPSearchQuery: args.MPSearchQuery
            }
        }) as Promise<any[]>;
    }

    async updateProduct(args: {
            externalProductId: string,
        body: ProductRequest
        }) {
        return this.put({
            endpoint: `/${args.externalProductId}`,
            body: args.body,
        }) as Promise<any[]>;
    }
}
