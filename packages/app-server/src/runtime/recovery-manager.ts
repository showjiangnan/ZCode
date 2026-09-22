export interface RecoveryTask {
  id: string;
  type: "thread" | "worker";
  targetId: string;
}

export class RecoveryManager {
  private readonly tasks = new Map<string, RecoveryTask>();

  schedule(task: RecoveryTask): void {
    this.tasks.set(task.id, task);
  }

  list(): RecoveryTask[] {
    return [...this.tasks.values()];
  }

  remove(id: string): void {
    this.tasks.delete(id);
  }
}
