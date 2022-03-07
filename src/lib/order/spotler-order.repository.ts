import { SpotlerBaseRepository } from '../../shared/base/spotler-base.repository';
import { SpotlerConfig } from '../../shared/config/spotler-config';

export class SpotlerOrderRepository extends SpotlerBaseRepository {
    protected readonly resource = 'order';

    constructor(protected config: SpotlerConfig) {
            super();
    }

    async deleteOrder(args: {
            externalOrderId: string
        }) {
        return this.delete({
            endpoint: `/${args.externalOrderId}`,
        }) as Promise<any[]>;
    }

    async insertOrder(args: {
            body: OrderRequest
        }) {
        return this.post({
            endpoint: ``,
            body: args.body,
        }) as Promise<any[]>;
    }

    async updateOrder(args: {
            externalOrderId: string,
        body: OrderRequest
        }) {
        return this.put({
            endpoint: `/${args.externalOrderId}`,
            body: args.body,
        }) as Promise<any[]>;
    }
}
