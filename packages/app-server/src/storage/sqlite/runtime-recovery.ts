export interface PersistedRuntimeSession {
  sessionId: string;
  threadId: string;
  workerId?: string;
  status: "active" | "paused" | "failed" | "completed";
  eventCursor?: string;
  updatedAt: number;
}

export interface RuntimeRecoveryStore {
  listRecoverableSessions(): Promise<PersistedRuntimeSession[]>;
  saveSession(session: PersistedRuntimeSession): Promise<void>;
}

export async function recoverRuntimeSessions(
  store: RuntimeRecoveryStore,
  restore: (session: PersistedRuntimeSession) => Promise<void>,
): Promise<void> {
  const sessions = await store.listRecoverableSessions();
  for (const session of sessions) {
    await restore(session);
  }
}
