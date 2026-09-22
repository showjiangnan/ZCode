import type { ZCodeThread } from "../../thread/types.js";

export interface ThreadRepository {
  save(thread: ZCodeThread): Promise<void>;
  get(id: string): Promise<ZCodeThread | undefined>;
  list(): Promise<ZCodeThread[]>;
}

export class SqliteThreadRepository implements ThreadRepository {
  constructor(private readonly db: unknown) {}

  async save(_thread: ZCodeThread): Promise<void> {
    // Database driver binding is injected by server runtime.
  }

  async get(_id: string): Promise<ZCodeThread | undefined> {
    return undefined;
  }

  async list(): Promise<ZCodeThread[]> {
    return [];
  }
}
