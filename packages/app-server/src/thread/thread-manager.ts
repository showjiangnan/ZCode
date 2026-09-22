import { randomUUID } from "node:crypto";
import type { ZCodeThread } from "./types.js";
import { ZCodeEventBus } from "../events/event-bus.js";
import type { ThreadStore } from "../storage/thread-store.js";

export class ThreadManager {
  private readonly threads = new Map<string, ZCodeThread>();

  constructor(
    private readonly events = new ZCodeEventBus(),
    private readonly store?: ThreadStore,
  ) {}

  async create(workspace: string): Promise<ZCodeThread> {
    const now = Date.now();
    const thread: ZCodeThread = {
      id: randomUUID(),
      workspace,
      status: "idle",
      createdAt: now,
      updatedAt: now,
    };

    this.threads.set(thread.id, thread);
    await this.store?.save(thread);

    this.events.publish({
      id: randomUUID(),
      threadId: thread.id,
      type: "thread.started",
      timestamp: now,
      payload: thread,
    });

    return thread;
  }

  async get(id: string): Promise<ZCodeThread | undefined> {
    return this.threads.get(id) ?? this.store?.get(id);
  }

  async list(): Promise<ZCodeThread[]> {
    if (this.threads.size > 0) {
      return [...this.threads.values()];
    }

    return this.store?.list() ?? [];
  }

  async restore(): Promise<void> {
    const threads = await this.store?.list();
    for (const thread of threads ?? []) {
      this.threads.set(thread.id, thread);
    }
  }
}
