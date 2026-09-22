export interface P0RuntimeReadiness {
  agentBridgeConnected: boolean;
  persistenceReady: boolean;
  serverMounted: boolean;
}

export function isP0RuntimeReady(status: P0RuntimeReadiness): boolean {
  return (
    status.agentBridgeConnected &&
    status.persistenceReady &&
    status.serverMounted
  );
}
