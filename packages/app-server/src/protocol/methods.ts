export const APP_SERVER_METHODS = {
  THREAD_START: "thread/start",
  THREAD_LIST: "thread/list",
  THREAD_RESUME: "thread/resume",
  THREAD_ARCHIVE: "thread/archive",
  TURN_START: "turn/start",
  TURN_CANCEL: "turn/cancel",
  EVENT_SUBSCRIBE: "event/subscribe",
  EVENT_REPLAY: "event/replay",
} as const;

export type AppServerMethodName =
  (typeof APP_SERVER_METHODS)[keyof typeof APP_SERVER_METHODS];
