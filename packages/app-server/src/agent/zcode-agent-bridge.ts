import type { AgentExecutionContext } from "./execution-context.js";
import type { AgentExecutionResult } from "./execution-context.js";
import type { AgentServiceBridgeContract } from "./agent-service-contract.js";

/**
 * Boundary adapter between App Server runtime and the existing ZCode agent stack.
 *
 * This intentionally contains no knowledge of a concrete provider or model.
 * The concrete implementation should be supplied by packages/services.
 */
export class ZCodeAgentBridge {
  constructor(private readonly service?: AgentServiceBridgeContract) {}

  async execute(context: AgentExecutionContext): Promise<AgentExecutionResult> {
    if (!this.service) {
      return {
        success: false,
        error: "ZCode agent service is not connected",
      };
    }

    return this.service.execute(context);
  }

  async cancel(turnId: string): Promise<void> {
    await this.service?.cancel(turnId);
  }
}
