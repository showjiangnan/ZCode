export type RuntimeCommand =
  | "start"
  | "stop"
  | "restart"
  | "recover";

export interface RuntimeControllerState {
  command: RuntimeCommand;
  updatedAt: number;
}

export class RuntimeController {
  private state: RuntimeControllerState = {
    command: "stop",
    updatedAt: Date.now(),
  };

  start(): RuntimeControllerState {
    this.state = { command: "start", updatedAt: Date.now() };
    return this.state;
  }

  stop(): RuntimeControllerState {
    this.state = { command: "stop", updatedAt: Date.now() };
    return this.state;
  }

  restart(): RuntimeControllerState {
    this.state = { command: "restart", updatedAt: Date.now() };
    return this.state;
  }

  recover(): RuntimeControllerState {
    this.state = { command: "recover", updatedAt: Date.now() };
    return this.state;
  }

  getState(): RuntimeControllerState {
    return this.state;
  }
}
