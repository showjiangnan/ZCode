export type AppServerMethod =
  | "thread/start"
  | "thread/resume"
  | "thread/list"
  | "thread/archive"
  | "turn/start"
  | "turn/cancel"
  | "event/subscribe";

export interface ThreadStartRequest {
  workspace: string;
  title?: string;
}

export interface TurnStartRequest {
  threadId: string;
  prompt: string;
}

export interface AppServerEvent {
  type:
    | "thread.started"
    | "turn.started"
    | "turn.completed"
    | "agent.message.delta"
    | "tool.started"
    | "tool.completed";
  threadId: string;
  payload?: unknown;
  timestamp: number;
}
