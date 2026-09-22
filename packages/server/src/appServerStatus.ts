import { serverAppRuntime } from "./appServerRuntime.js";

/**
 * Lightweight status snapshot for the embedded App Server runtime.
 *
 * This keeps transport concerns out of app-server while allowing HTTP,
 * desktop and remote clients to inspect runtime readiness.
 */
export function getAppServerStatus() {
  const runtime = serverAppRuntime.get();

  return {
    ready: Boolean(runtime),
    runtime: runtime ? "running" : "stopped",
    timestamp: Date.now(),
  };
}
