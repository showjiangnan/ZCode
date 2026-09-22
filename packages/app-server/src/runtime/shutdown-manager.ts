export class ShutdownManager {
  private hooks: Array<() => Promise<void> | void> = [];

  register(hook: () => Promise<void> | void): void {
    this.hooks.push(hook);
  }

  async shutdown(): Promise<void> {
    for (const hook of [...this.hooks].reverse()) {
      await hook();
    }
  }
}
