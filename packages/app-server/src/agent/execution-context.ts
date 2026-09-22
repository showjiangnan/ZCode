export interface AgentExecutionContext {
  threadId: string;
  turnId: string;
  workspace?: string;
  signal?: AbortSignal;
  metadata?: Record<string, unknown>;
}

export interface AgentExecutionResult {
  success: boolean;
  message?: string;
  artifacts?: Array<{
    type: string;
    value: unknown;
  }>;
}
