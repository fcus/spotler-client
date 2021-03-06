import { SpotlerAutomationTriggerRequest } from '../../model/spotler-automation-trigger-request';
import { SpotlerBaseRepository } from '../../shared/base/spotler-base.repository';
import { SpotlerConfig } from '../../shared/config/spotler-config';

export class SpotlerAutomationRepository extends SpotlerBaseRepository {
    protected readonly resource = 'automation';

    constructor(protected config: SpotlerConfig) {
        super();
    }

    async triggerAutomation(args: {
        triggerCode: string;
        body: SpotlerAutomationTriggerRequest;
    }) {
        return this.post({
            endpoint: `trigger/${args.triggerCode}`,
            body: args.body,
        }) as Promise<any[]>;
    }
}
