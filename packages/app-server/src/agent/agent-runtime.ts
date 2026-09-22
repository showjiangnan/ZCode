import type { ZCodeThread } from "../thread/types.js";

export interface AgentTurnContext {
  thread: ZCodeThread;
  prompt: string;
  turnId: string;
}

export interface AgentRuntimeAdapter {
  start(thread: ZCodeThread): Promise<void>;
  execute(context: AgentTurnContext): Promise<void>;
  cancel(turnId: string): Promise<void>;
  resume(thread: ZCodeThread): Promise<void>;
}

export class NoopAgentRuntimeAdapter implements AgentRuntimeAdapter {
  async start(): Promise<void> {}

  async execute(): Promise<void> {}

  async cancel(): Promise<void> {}

  async resume(): Promise<void> {}
}
