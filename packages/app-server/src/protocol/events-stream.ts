import type { EventBus } from "../events/event-bus.js";
import type { ThreadEvent } from "../thread/types.js";

export class AppServerEventStream {
  constructor(private readonly events: EventBus) {}

  subscribe(listener: (event: ThreadEvent) => void) {
    return this.events.subscribe(listener);
  }
}
