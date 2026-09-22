import type { AgentRuntimeAdapter } from "./agent-runtime.js";
import type { AgentExecutionService } from "./agent-execution.js";

export interface AgentServiceBridgeOptions {
  adapter: AgentRuntimeAdapter;
  execution: AgentExecutionService;
}

export class AgentServiceBridge {
  constructor(private readonly options: AgentServiceBridgeOptions) {}

  async execute(threadId: string, turnId: string, prompt: string) {
    return this.options.execution.execute({
      threadId,
      turnId,
      prompt,
      adapter: this.options.adapter,
    });
  }
}
