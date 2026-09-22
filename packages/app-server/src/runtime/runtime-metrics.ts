export interface RuntimeMetrics {
  activeThreads: number;
  activeWorkers: number;
  lastUpdatedAt: number;
}

export function createRuntimeMetrics(): RuntimeMetrics {
  return {
    activeThreads: 0,
    activeWorkers: 0,
    lastUpdatedAt: Date.now(),
  };
}
