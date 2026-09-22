import type { ZCodeAppServer } from "../server-bridge.js";
import type { AppServerMethod, ThreadStartRequest, TurnStartRequest } from "./app-server-protocol.js";

export class AppServerRequestHandler {
  constructor(private readonly runtime: ZCodeAppServer) {}

  async handle(method: AppServerMethod, payload: unknown): Promise<unknown> {
    switch (method) {
      case "thread/start": {
        const request = payload as ThreadStartRequest;
        return this.runtime.threads.create(request.workspace);
      }
      case "thread/list":
        return this.runtime.threads.list();
      case "turn/start": {
        const request = payload as TurnStartRequest;
        return this.runtime.turns.start(request.threadId, request.prompt);
      }
      default:
        throw new Error(`Unsupported app-server method: ${method}`);
    }
  }
}
