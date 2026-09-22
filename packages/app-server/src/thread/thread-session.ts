export interface ThreadSession {
  threadId: string;
  activeTurnId?: string;
  restored: boolean;
  updatedAt: number;
}

export class ThreadSessionManager {
  private readonly sessions = new Map<string, ThreadSession>();

  restore(threadId: string): ThreadSession {
    const session: ThreadSession = {
      threadId,
      restored: true,
      updatedAt: Date.now(),
    };

    this.sessions.set(threadId, session);
    return session;
  }

  get(threadId: string) {
    return this.sessions.get(threadId);
  }

  list() {
    return [...this.sessions.values()];
  }
}
