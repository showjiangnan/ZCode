export interface RuntimeCommand {
  type: string;
  payload?: unknown;
}

export class RuntimeCommandBus {
  private handlers = new Map<string, (payload?: unknown) => Promise<unknown>>();

  register(type: string, handler: (payload?: unknown) => Promise<unknown>) {
    this.handlers.set(type, handler);
  }

  async execute(command: RuntimeCommand) {
    const handler = this.handlers.get(command.type);
    if (!handler) {
      throw new Error(`Unsupported runtime command: ${command.type}`);
    }

    return handler(command.payload);
  }
}
