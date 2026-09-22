import type { ZCodeThread } from "./types.js";

export interface ThreadRecoveryStore {
  list(): Promise<ZCodeThread[]>;
}

export class ThreadRecoveryService {
  constructor(private readonly store: ThreadRecoveryStore) {}

  async restore(): Promise<ZCodeThread[]> {
    return this.store.list();
  }
}
