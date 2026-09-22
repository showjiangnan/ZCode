import type { ThreadEvent } from "../../thread/types.js";

export interface EventRepository {
  append(event: ThreadEvent): Promise<void>;
  list(threadId: string): Promise<ThreadEvent[]>;
}

export class SqliteEventRepository implements EventRepository {
  constructor(private readonly db: unknown) {}

  async append(_event: ThreadEvent): Promise<void> {
    // Database driver binding is injected by server runtime.
  }

  async list(_threadId: string): Promise<ThreadEvent[]> {
    return [];
  }
}
