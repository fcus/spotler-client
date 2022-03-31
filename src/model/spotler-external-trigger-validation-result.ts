import { SpotlerExternalTriggerResponse } from './spotler-external-trigger-response';
import { SpotlerAutomationTriggerValidationResult } from './spotler-automation-trigger-validation-result';

export class SpotlerExternalTriggerValidationResult {
    result!: SpotlerExternalTriggerResponse;
    automationResults!: SpotlerAutomationTriggerValidationResult;
}
