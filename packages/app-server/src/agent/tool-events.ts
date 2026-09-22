export type AgentToolEventType =
  | "tool.started"
  | "tool.output"
  | "tool.completed"
  | "tool.failed";

export interface AgentToolEvent {
  id: string;
  threadId: string;
  turnId: string;
  type: AgentToolEventType;
  toolName: string;
  payload?: unknown;
  createdAt: number;
}
