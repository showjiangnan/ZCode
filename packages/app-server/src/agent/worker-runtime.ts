export type AgentWorkerRuntimeStatus =
  | "created"
  | "running"
  | "waiting"
  | "completed"
  | "failed"
  | "recovering";

export interface AgentWorkerRuntime {
  id: string;
  threadId: string;
  status: AgentWorkerRuntimeStatus;
  startedAt: number;
  updatedAt: number;
}

export class AgentWorkerRuntimeManager {
  private readonly workers = new Map<string, AgentWorkerRuntime>();

  create(threadId: string): AgentWorkerRuntime {
    const now = Date.now();
    const worker: AgentWorkerRuntime = {
      id: crypto.randomUUID(),
      threadId,
      status: "created",
      startedAt: now,
      updatedAt: now,
    };

    this.workers.set(worker.id, worker);
    return worker;
  }

  updateStatus(id: string, status: AgentWorkerRuntimeStatus): void {
    const worker = this.workers.get(id);
    if (!worker) {
      return;
    }
    worker.status = status;
    worker.updatedAt = Date.now();
  }

  list(): AgentWorkerRuntime[] {
    return [...this.workers.values()];
  }
}
