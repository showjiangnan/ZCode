import { randomUUID } from "node:crypto";
import type { ZCodeThread } from "./types.js";
import { ZCodeEventBus } from "../events/event-bus.js";

export class ThreadManager {
  private threads = new Map<string, ZCodeThread>();

  constructor(private readonly events = new ZCodeEventBus()) {}

  create(workspace: string): ZCodeThread {
    const now = Date.now();
    const thread: ZCodeThread = {
      id: randomUUID(),
      workspace,
      status: "idle",
      createdAt: now,
      updatedAt: now,
    };

    this.threads.set(thread.id, thread);
    this.events.publish({
      id: randomUUID(),
      threadId: thread.id,
      type: "thread.started",
      timestamp: now,
      payload: thread,
    });

    return thread;
  }

  get(id: string) {
    return this.threads.get(id);
  }

  list() {
    return [...this.threads.values()];
  }
}
