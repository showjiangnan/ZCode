import type { Hono } from "hono";
import { getAppServerStatus } from "./appServerStatus.js";

/**
 * Register lightweight App Server introspection routes.
 *
 * Transport-specific RPC remains handled by app-server adapters. These routes
 * only expose runtime readiness information for desktop and remote clients.
 */
export function registerAppServerRoutes(app: Hono): void {
  app.get("/api/app-server/status", (context) => {
    return context.json(getAppServerStatus());
  });
}
