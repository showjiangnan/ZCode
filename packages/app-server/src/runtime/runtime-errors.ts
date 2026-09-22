export type RuntimeErrorCode =
  | "THREAD_NOT_FOUND"
  | "WORKER_FAILED"
  | "AGENT_TIMEOUT"
  | "PERSISTENCE_FAILED"
  | "PROTOCOL_ERROR";

export class RuntimeError extends Error {
  constructor(
    public readonly code: RuntimeErrorCode,
    message: string,
    options?: ErrorOptions,
  ) {
    super(message, options);
    this.name = "RuntimeError";
  }
}
