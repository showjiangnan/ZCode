import type { ThreadEvent } from "../thread/types.js";

export interface EventStore {
  append(event: ThreadEvent): Promise<void>;
  list(threadId: string): Promise<ThreadEvent[]>;
}

export class MemoryEventStore implements EventStore {
  private readonly events: ThreadEvent[] = [];

  async append(event: ThreadEvent): Promise<void> {
    this.events.push(event);
  }

  async list(threadId: string): Promise<ThreadEvent[]> {
    return this.events.filter((event) => event.threadId === threadId);
  }
}
