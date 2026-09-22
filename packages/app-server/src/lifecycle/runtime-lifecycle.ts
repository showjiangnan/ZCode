import { createZCodeAppServer, type ZCodeAppServer } from "../server-bridge.js";

export interface RuntimeLifecycleOptions {
  workspace?: string;
}

export class RuntimeLifecycle {
  private runtime?: ZCodeAppServer;
  private started = false;

  start(_options: RuntimeLifecycleOptions = {}): ZCodeAppServer {
    if (!this.runtime) {
      this.runtime = createZCodeAppServer();
    }

    this.started = true;
    return this.runtime;
  }

  getRuntime(): ZCodeAppServer | undefined {
    return this.runtime;
  }

  stop(): void {
    if (!this.started) {
      return;
    }

    this.runtime?.dispose();
    this.started = false;
  }
}
