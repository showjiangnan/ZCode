export type WorkerLifecycle =
  | "created"
  | "running"
  | "waiting"
  | "completed"
  | "failed"
  | "recovering";

export interface WorkerRuntimeState {
  workerId: string;
  threadId: string;
  state: WorkerLifecycle;
  heartbeatAt: number;
}

export function touchWorker(state: WorkerRuntimeState): WorkerRuntimeState {
  return { ...state, heartbeatAt: Date.now() };
}
