import type { AgentExecutionResult } from "./execution-context.js";

export type AgentStreamEvent =
  | { type: "message.delta"; value: string }
  | { type: "tool.started"; tool: string }
  | { type: "tool.completed"; tool: string }
  | { type: "completed"; result?: AgentExecutionResult };

export class AgentStreamRouter {
  private listeners = new Set<(event: AgentStreamEvent) => void>();

  subscribe(listener: (event: AgentStreamEvent) => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  publish(event: AgentStreamEvent): void {
    for (const listener of this.listeners) {
      listener(event);
    }
  }
}
