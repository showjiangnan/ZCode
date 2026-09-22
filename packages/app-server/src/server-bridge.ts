import { EventBus } from "./events/event-bus.js";
import { ThreadManager } from "./thread/thread-manager.js";
import { TurnManager } from "./turn/turn-manager.js";

/**
 * Server-side runtime container.
 *
 * This object is intentionally independent from HTTP/WebSocket so Desktop,
 * Web and CLI can share the same Agent lifecycle manager.
 */
export class ZCodeAppServer {
  readonly events: EventBus;
  readonly threads: ThreadManager;
  readonly turns: TurnManager;

  constructor() {
    this.events = new EventBus();
    this.threads = new ThreadManager(this.events);
    this.turns = new TurnManager(this.events);
  }

  dispose() {
    this.events.clear();
  }
}

export function createZCodeAppServer() {
  return new ZCodeAppServer();
}
