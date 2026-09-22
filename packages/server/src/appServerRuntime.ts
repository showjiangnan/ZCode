import { createZCodeAppServer, type ZCodeAppServer } from "@zcode/app-server";

/**
 * Server owned App Server runtime.
 *
 * Keeps the Agent runtime lifecycle independent from HTTP/WebSocket transport.
 * The HTTP layer can attach RPC and websocket adapters to this singleton.
 */
export class ServerAppRuntime {
  private runtime: ZCodeAppServer | undefined;

  start(): ZCodeAppServer {
    if (!this.runtime) {
      this.runtime = createZCodeAppServer();
    }

    return this.runtime;
  }

  get(): ZCodeAppServer | undefined {
    return this.runtime;
  }

  stop(): void {
    this.runtime?.dispose();
    this.runtime = undefined;
  }
}

export const serverAppRuntime = new ServerAppRuntime();
