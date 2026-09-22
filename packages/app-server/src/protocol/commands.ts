export const APP_SERVER_COMMANDS = {
  threadStart: "thread/start",
  threadList: "thread/list",
  threadGet: "thread/get",
  threadResume: "thread/resume",
  threadArchive: "thread/archive",
  turnStart: "turn/start",
  turnCancel: "turn/cancel",
  turnRetry: "turn/retry",
  turnStatus: "turn/status",
  eventSubscribe: "event/subscribe",
  eventReplay: "event/replay",
} as const;

export type AppServerCommand =
  (typeof APP_SERVER_COMMANDS)[keyof typeof APP_SERVER_COMMANDS];
