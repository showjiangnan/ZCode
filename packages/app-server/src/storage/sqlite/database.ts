import { SQLITE_SCHEMA } from "./schema.js";

export interface SqliteDatabase {
  exec(sql: string): void;
  close(): void;
}

export class SqliteRuntime {
  constructor(private readonly db: SqliteDatabase) {}

  initialize(): void {
    this.db.exec(SQLITE_SCHEMA);
  }

  dispose(): void {
    this.db.close();
  }
}

export function initializeDatabase(db: SqliteDatabase): SqliteRuntime {
  const runtime = new SqliteRuntime(db);
  runtime.initialize();
  return runtime;
}
