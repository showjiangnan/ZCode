export type WorkerStatus =
  | "created"
  | "running"
  | "stopped"
  | "failed";

export interface AgentWorker {
  id: string;
  threadId: string;
  status: WorkerStatus;
}

export class AgentSupervisor {
  private readonly workers = new Map<string, AgentWorker>();

  start(threadId: string): AgentWorker {
    const worker: AgentWorker = {
      id: crypto.randomUUID(),
      threadId,
      status: "running",
    };

    this.workers.set(worker.id, worker);
    return worker;
  }

  stop(workerId: string): void {
    const worker = this.workers.get(workerId);
    if (worker) {
      worker.status = "stopped";
    }
  }

  list(): AgentWorker[] {
    return [...this.workers.values()];
  }
}
