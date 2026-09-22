export const RUNTIME_SQLITE_SCHEMA = `
CREATE TABLE IF NOT EXISTS thread_sessions (
  id TEXT PRIMARY KEY,
  thread_id TEXT NOT NULL,
  status TEXT NOT NULL,
  cursor TEXT,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS workers (
  id TEXT PRIMARY KEY,
  thread_id TEXT NOT NULL,
  state TEXT NOT NULL,
  heartbeat_at INTEGER NOT NULL,
  metadata TEXT
);

CREATE TABLE IF NOT EXISTS tool_calls (
  id TEXT PRIMARY KEY,
  thread_id TEXT NOT NULL,
  turn_id TEXT,
  tool TEXT NOT NULL,
  status TEXT NOT NULL,
  payload TEXT,
  created_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS artifacts (
  id TEXT PRIMARY KEY,
  thread_id TEXT NOT NULL,
  type TEXT NOT NULL,
  uri TEXT NOT NULL,
  metadata TEXT,
  created_at INTEGER NOT NULL
);
`;
