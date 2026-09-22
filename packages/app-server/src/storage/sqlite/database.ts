import { SQLITE_SCHEMA } from "./schema.js";

export interface SqliteDatabase {
  exec(sql: string): void;
  close(): void;
}

export function initializeDatabase(db: SqliteDatabase): void {
  db.exec(SQLITE_SCHEMA);
}
