export interface AgentServiceStreamEvent {
  type: string;
  threadId: string;
  turnId: string;
  payload?: unknown;
  timestamp: number;
}

export interface AgentServiceExecutionRequest {
  threadId: string;
  turnId: string;
  workspace?: string;
  prompt: string;
  signal?: AbortSignal;
}

export interface AgentServiceExecutionResult {
  threadId: string;
  turnId: string;
  success: boolean;
  output?: string;
  error?: string;
}

export interface AgentServiceBridgeContract {
  execute(
    request: AgentServiceExecutionRequest,
    onEvent?: (event: AgentServiceStreamEvent) => Promise<void>,
  ): Promise<AgentServiceExecutionResult>;

  cancel(threadId: string, turnId: string): Promise<void>;
}
