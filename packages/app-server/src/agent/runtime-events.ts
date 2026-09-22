export const AGENT_EVENTS = {
  started: "agent.started",
  completed: "agent.completed",
  failed: "agent.failed",
  recovered: "agent.recovered",
} as const;

export type AgentEventType =
  (typeof AGENT_EVENTS)[keyof typeof AGENT_EVENTS];
