export type ThreadRecoveryStatus =
  | "pending"
  | "restoring"
  | "restored"
  | "failed";

export interface ThreadRecoveryState {
  threadId: string;
  status: ThreadRecoveryStatus;
  lastEventId?: string;
  updatedAt: number;
}
