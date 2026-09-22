import type { AgentRuntimeAdapter } from "./agent-runtime.js";

export class AgentExecutionService {
  constructor(private readonly runtime: AgentRuntimeAdapter) {}

  execute(threadId: string, turnId: string, prompt: string) {
    return this.runtime.execute({
      threadId,
      turnId,
      prompt,
    });
  }
}
