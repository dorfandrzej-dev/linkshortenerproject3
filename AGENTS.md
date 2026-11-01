<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Agent Instructions

These instructions are for AI coding agents working in this repository. Read the relevant guides before making changes.

**CRITICAL: ALWAYS read the relevant individual instruction `.md` file(s) BEFORE generating ANY code. Do not write or modify code until you have read the instructions that apply to the task.**


Use the existing code and configuration as the source of truth. Keep changes focused, preserve established behavior, and do not assume a feature or convention exists just because it is common in other Next.js projects. When a task conflicts with these guides, follow the user's explicit request unless it would create a security or correctness issue; explain any necessary tradeoff.

For authentication changes, read [docs/authentication.md](docs/authentication.md). Clerk is the only supported authentication provider, and its route and modal behavior must be preserved.

For UI changes, read [docs/ui-components.md](docs/ui-components.md). All interface controls and visual UI elements must use shadcn/ui; do not create custom UI components.
