import type { WebSocket } from "ws";
import type { ZCodeAppServer } from "@zcode/app-server";
import { AppServerWebSocketAdapter } from "@zcode/app-server";

/**
 * Connect a server websocket endpoint to the persistent App Server runtime.
 * HTTP route registration remains owned by the server package while protocol
 * handling stays isolated in app-server.
 */
export function attachAppServerProtocolRoute(
  ws: WebSocket,
  runtime: ZCodeAppServer,
) {
  const adapter = new AppServerWebSocketAdapter(runtime);
  adapter.attach(ws);

  return () => {
    adapter.dispose();
  };
}
