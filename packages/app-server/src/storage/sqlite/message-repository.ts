export interface StoredMessage {
  id: string;
  threadId: string;
  role: string;
  content: string;
  createdAt: number;
}

export interface MessageRepository {
  save(message: StoredMessage): Promise<void>;
  list(threadId: string): Promise<StoredMessage[]>;
}

export class MemoryMessageRepository implements MessageRepository {
  private readonly messages: StoredMessage[] = [];

  async save(message: StoredMessage): Promise<void> {
    this.messages.push(message);
  }

  async list(threadId: string): Promise<StoredMessage[]> {
    return this.messages.filter((item) => item.threadId === threadId);
  }
}
