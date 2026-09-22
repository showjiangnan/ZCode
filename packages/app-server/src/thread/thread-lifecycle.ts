export type ThreadLifecycleStatus =
  | "created"
  | "active"
  | "paused"
  | "completed"
  | "failed";

export interface ThreadLifecycleState {
  threadId: string;
  status: ThreadLifecycleStatus;
  updatedAt: number;
}

export class ThreadLifecycleController {
  private readonly states = new Map<string, ThreadLifecycleState>();

  update(threadId: string, status: ThreadLifecycleStatus): ThreadLifecycleState {
    const state: ThreadLifecycleState = {
      threadId,
      status,
      updatedAt: Date.now(),
    };
    this.states.set(threadId, state);
    return state;
  }

  get(threadId: string): ThreadLifecycleState | undefined {
    return this.states.get(threadId);
  }
}
