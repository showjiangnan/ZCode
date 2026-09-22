# ZCode Codex App Server 化改造计划

## 目标

将 ZCode 从单次 Agent 执行模式升级为持久化 Agent Runtime。

## 核心模型

```
Thread
  |
  +-- Turn
       |
       +-- Events
            |
            +-- UI Clients
```

## Phase 1

- 增加 app-server runtime package
- 引入 thread 生命周期管理
- 引入 event bus
- 定义 thread/turn protocol

## Phase 2

- SQLite thread store
- resume thread
- 多客户端 attach

## Phase 3

- Agent worker supervisor
- 后台运行
- Desktop/Web/CLI 共用 runtime

## 设计原则

不替换现有 ZCode Agent Runtime，而是在 server 与 agent 之间增加 orchestration layer。
