import type { WebSocket } from "ws";
import type { ZCodeAppServer } from "@zcode/app-server";
import { AppServerWebSocketAdapter } from "@zcode/app-server";

/**
 * Bridge between the existing ZCode websocket server and the App Server
 * protocol runtime.
 *
 * Keeping this adapter separate allows the HTTP server lifecycle to remain
 * compatible with existing RPC channels while introducing Codex-style thread
 * interactions.
 */
export function attachAppServerWebSocket(
  ws: WebSocket,
  runtime: ZCodeAppServer,
): void {
  const adapter = new AppServerWebSocketAdapter(runtime);
  adapter.attach(ws);
}
