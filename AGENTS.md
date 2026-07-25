# Project Agent Instructions

These instructions apply to every task performed in this repository and to all
agents or sub-agents working anywhere under this project directory.

## Mandatory Task Status Updates

All user-visible progress updates must start with exactly one of the following
status labels:

- `🔴 网络异常／正在重连`
  - Use when a network request fails, times out, disconnects, or is being
    retried.
  - Always include the current retry count, for example `重试 2/5`.
  - Briefly identify the failed service or request and the next recovery step.
- `🟡 正在工作`
  - Use while analyzing, reading files, inspecting data, researching, or doing
    long-running reasoning.
  - State the current step and what is being determined.
- `🔵 正在执行`
  - Use while running commands, modifying files, building, testing, committing,
    deploying, or otherwise changing project state.
  - List the concrete tasks currently being processed.
- `🟢 已完成`
  - Use only when the requested work is genuinely complete and all required
    validation has finished.
  - Summarize the outcome, validation result, and any user action that remains.

## Progress Heartbeat

- Never leave the user without a visible progress update for more than
  60 seconds while work is ongoing.
- If no new result is available within 60 seconds, proactively report:
  - the current step;
  - what has already completed;
  - the exact point that is slow or blocked;
  - the next action or retry being attempted.
- Continue sending an updated heartbeat at intervals of no more than 60 seconds
  until the task completes, fails, or requires user input.

## Status Accuracy

- Do not use `🟢 已完成` for partial results, pending deployments, unverified
  changes, or blocked work.
- When switching between analysis and execution, update the status label to
  match the current activity.
- Keep progress messages concise and scannable, but include enough detail for
  the user to understand what is happening without reading command output.
- Final responses must remain self-contained even when progress updates were
  sent earlier.
