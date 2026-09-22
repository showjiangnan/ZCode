import type { AgentExecutionContext, AgentExecutionResult } from "./execution-context.js";
import type { AgentServiceBridgeContract } from "./agent-service-contract.js";
import { AgentStreamRouter } from "./agent-stream-router.js";

export class AgentServiceExecutor {
  constructor(
    private readonly bridge: AgentServiceBridgeContract,
    private readonly streamRouter = new AgentStreamRouter(),
  ) {}

  async execute(context: AgentExecutionContext): Promise<AgentExecutionResult> {
    this.streamRouter.publish({
      type: "agent.started",
      threadId: context.threadId,
      turnId: context.turnId,
    });

    try {
      const result = await this.bridge.execute(context, (event) => {
        this.streamRouter.publish(event);
      });

      this.streamRouter.publish({
        type: "agent.completed",
        threadId: context.threadId,
        turnId: context.turnId,
      });

      return result;
    } catch (error) {
      this.streamRouter.publish({
        type: "agent.failed",
        threadId: context.threadId,
        turnId: context.turnId,
        error: error instanceof Error ? error.message : String(error),
      });
      throw error;
    }
  }

  async cancel(turnId: string): Promise<void> {
    await this.bridge.cancel(turnId);
  }
}
