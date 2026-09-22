import { randomUUID } from "node:crypto";
import type { EventBus } from "../events/event-bus.js";

export class TurnManager {
  constructor(private readonly events: EventBus) {}

  start(threadId: string, prompt: string) {
    const id = randomUUID();

    this.events.publish({
      type: "turn.started",
      threadId,
      payload: { id, prompt },
      timestamp: Date.now(),
    });

    return { id, threadId, prompt };
  }

  complete(threadId: string, turnId: string) {
    this.events.publish({
      type: "turn.completed",
      threadId,
      payload: { id: turnId },
      timestamp: Date.now(),
    });
  }
}
