export interface RuntimeSessionRecord {
  id: string;
  threadId: string;
  workerId?: string;
  status: string;
  eventCursor?: string;
  updatedAt: number;
}

export interface RuntimeSessionRepository {
  save(record: RuntimeSessionRecord): Promise<void>;
  get(id: string): Promise<RuntimeSessionRecord | undefined>;
  listActive(): Promise<RuntimeSessionRecord[]>;
}

export class MemoryRuntimeSessionRepository implements RuntimeSessionRepository {
  private readonly sessions = new Map<string, RuntimeSessionRecord>();

  async save(record: RuntimeSessionRecord): Promise<void> {
    this.sessions.set(record.id, record);
  }

  async get(id: string): Promise<RuntimeSessionRecord | undefined> {
    return this.sessions.get(id);
  }

  async listActive(): Promise<RuntimeSessionRecord[]> {
    return [...this.sessions.values()].filter((item) => item.status !== "stopped");
  }
}
