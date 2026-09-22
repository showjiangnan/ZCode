import type { AppServerRequestHandler } from "./request-handler.js";

export interface AppServerSocket {
  send(data: string): void;
}

export class AppServerWebSocketAdapter {
  constructor(private readonly handler: AppServerRequestHandler) {}

  async handle(socket: AppServerSocket, raw: string) {
    const request = JSON.parse(raw) as {
      method: string;
      params?: unknown;
    };

    const result = await this.handler.handle(request.method, request.params);

    socket.send(
      JSON.stringify({
        ok: true,
        result,
      }),
    );
  }
}
