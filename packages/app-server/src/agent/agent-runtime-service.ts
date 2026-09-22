import type { AgentRuntimeAdapter } from "./agent-runtime.js";
import type { ThreadEvent } from "../thread/types.js";
import { randomUUID } from "node:crypto";

export class AgentRuntimeService {
  constructor(
    private readonly adapter: AgentRuntimeAdapter,
    private readonly emit: (event: ThreadEvent) => void,
  ) {}

  async execute(threadId: string, turnId: string, prompt: string) {
    this.emit({
      id: randomUUID(),
      threadId,
      type: "agent.started",
      timestamp: Date.now(),
      payload: { turnId },
    });

    const result = await this.adapter.execute({
      threadId,
      turnId,
      prompt,
    });

    this.emit({
      id: randomUUID(),
      threadId,
      type: "agent.completed",
      timestamp: Date.now(),
      payload: result,
    });

    return result;
  }
}
