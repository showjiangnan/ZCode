export interface DesktopRuntime {
  start(): Promise<void>;
  stop(): Promise<void>;
}

export class LocalDesktopRuntime implements DesktopRuntime {
  private started = false;

  async start(): Promise<void> {
    this.started = true;
  }

  async stop(): Promise<void> {
    this.started = false;
  }

  isStarted(): boolean {
    return this.started;
  }
}
