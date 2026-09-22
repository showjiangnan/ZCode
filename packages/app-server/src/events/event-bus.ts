import type { ThreadEvent } from "../thread/types.js";

export class ZCodeEventBus {
  private listeners = new Set<(event: ThreadEvent) => void>();

  subscribe(listener: (event: ThreadEvent) => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  publish(event: ThreadEvent) {
    for (const listener of this.listeners) {
      listener(event);
    }
  }
}
