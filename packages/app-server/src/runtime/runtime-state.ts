export type RuntimeStatus =
  | "starting"
  | "ready"
  | "stopping"
  | "stopped"
  | "failed";

export interface RuntimeState {
  status: RuntimeStatus;
  startedAt?: number;
  stoppedAt?: number;
  error?: string;
}

export function createInitialRuntimeState(): RuntimeState {
  return {
    status: "starting",
  };
}
