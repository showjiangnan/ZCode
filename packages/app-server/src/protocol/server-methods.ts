import type { AppServerMethod } from "./app-server-protocol.js";

export const SERVER_PROTOCOL_METHODS: readonly AppServerMethod[] = [
  "thread/start",
  "thread/resume",
  "thread/list",
  "thread/archive",
  "turn/start",
  "turn/cancel",
  "event/subscribe",
];

export function isAppServerMethod(value: string): value is AppServerMethod {
  return SERVER_PROTOCOL_METHODS.includes(value as AppServerMethod);
}
