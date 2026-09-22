export interface TurnRecord {
  id: string;
  threadId: string;
  prompt: string;
  status: string;
  createdAt: number;
}

export interface TurnRepository {
  save(turn: TurnRecord): Promise<void>;
  list(threadId: string): Promise<TurnRecord[]>;
}

export class SqliteTurnRepository implements TurnRepository {
  constructor(private readonly db: unknown) {}

  async save(_turn: TurnRecord): Promise<void> {}

  async list(_threadId: string): Promise<TurnRecord[]> {
    return [];
  }
}
