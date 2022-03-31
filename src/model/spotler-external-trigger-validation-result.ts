import { SpotlerExternalTriggerResponse } from '../enum/spotler-external-trigger-response.enum';
import { SpotlerAutomationTriggerValidationResult } from './spotler-automation-trigger-validation-result';

export class SpotlerExternalTriggerValidationResult {
    result!: SpotlerExternalTriggerResponse;
    automationResults!: SpotlerAutomationTriggerValidationResult;
}
