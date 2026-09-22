export type ThreadStatus =
  | "idle"
  | "running"
  | "waiting"
  | "completed"
  | "failed";

export interface ZCodeThread {
  id: string;
  workspace: string;
  status: ThreadStatus;
  createdAt: number;
  updatedAt: number;
  metadata?: Record<string, unknown>;
}

export interface ThreadEvent {
  id: string;
  threadId: string;
  type: string;
  timestamp: number;
  payload?: unknown;
}
