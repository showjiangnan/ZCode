import type { ZCodeThread } from "../../thread/types.js";

export interface ThreadRepository {
  save(thread: ZCodeThread): Promise<void>;
  get(id: string): Promise<ZCodeThread | undefined>;
  list(): Promise<ZCodeThread[]>;
}

type SqliteLike = {
  run?: (query: string, ...params: unknown[]) => unknown;
  get?: (query: string, ...params: unknown[]) => unknown;
  all?: (query: string, ...params: unknown[]) => unknown[];
};

export class SqliteThreadRepository implements ThreadRepository {
  constructor(private readonly db: SqliteLike) {}

  async save(thread: ZCodeThread): Promise<void> {
    this.db.run?.(
      "INSERT OR REPLACE INTO threads (id, workspace, status, created_at, updated_at, metadata) VALUES (?, ?, ?, ?, ?, ?)",
      thread.id,
      thread.workspace,
      thread.status,
      thread.createdAt,
      thread.updatedAt,
      JSON.stringify(thread.metadata ?? {}),
    );
  }

  async get(id: string): Promise<ZCodeThread | undefined> {
    const row = this.db.get?.("SELECT * FROM threads WHERE id = ?", id) as Record<string, unknown> | undefined;
    return row ? this.map(row) : undefined;
  }

  async list(): Promise<ZCodeThread[]> {
    const rows = (this.db.all?.("SELECT * FROM threads ORDER BY updated_at DESC") ?? []) as Record<string, unknown>[];
    return rows.map((row) => this.map(row));
  }

  private map(row: Record<string, unknown>): ZCodeThread {
    return {
      id: String(row.id),
      workspace: String(row.workspace),
      status: row.status as ZCodeThread["status"],
      createdAt: Number(row.created_at),
      updatedAt: Number(row.updated_at),
      metadata: row.metadata ? JSON.parse(String(row.metadata)) : undefined,
    };
  }
}
