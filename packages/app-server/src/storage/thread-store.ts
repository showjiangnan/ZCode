import { mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import type { ZCodeThread } from "../thread/types.js";

/**
 * Thread persistence abstraction.
 *
 * Phase 1 uses a file-backed adapter boundary so the runtime does not depend on
 * a specific database implementation. The production adapter will use SQLite.
 */
export interface ThreadStore {
  save(thread: ZCodeThread): Promise<void>;
  get(id: string): Promise<ZCodeThread | undefined>;
  list(): Promise<ZCodeThread[]>;
}

export class MemoryThreadStore implements ThreadStore {
  private readonly threads = new Map<string, ZCodeThread>();

  async save(thread: ZCodeThread): Promise<void> {
    this.threads.set(thread.id, thread);
  }

  async get(id: string): Promise<ZCodeThread | undefined> {
    return this.threads.get(id);
  }

  async list(): Promise<ZCodeThread[]> {
    return [...this.threads.values()];
  }
}

export async function ensureStorageDirectory(path: string): Promise<void> {
  await mkdir(dirname(path), { recursive: true });
}
