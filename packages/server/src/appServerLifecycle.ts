import { serverAppRuntime } from "./appServerRuntime.js";

/**
 * Owns App Server startup/shutdown from the server process lifecycle.
 *
 * Keeping this separate from HTTP transport allows desktop, stdio and remote
 * server entry points to share the same runtime lifecycle.
 */
export class AppServerLifecycle {
  start() {
    return serverAppRuntime.start();
  }

  stop(): void {
    serverAppRuntime.stop();
  }
}

export const appServerLifecycle = new AppServerLifecycle();
