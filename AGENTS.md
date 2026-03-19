# AGENTS.md

## Purpose

This repository uses a modular AI agent architecture based on Skill Driven Development (SDD).

The agent must not rely on a single large context. Instead, it should load only the relevant skills for each task.

---

## Core Behavior

1. Analyze the request before acting.
2. Identify which skills are required.
3. Load only the necessary skills.
4. Create a short implementation plan.
5. Execute changes with minimal impact.
6. Respect repository architecture and patterns.
7. Do not modify unrelated files.

---

## Skills Registry

- Angular is not used in this project.
- This project uses React.

Available skills:

- react-component → UI components
- react-state → state management
- react-routing → navigation and routing
- ui-tailwind → styling and layout

---

## Workflow

1. Understand the request
2. Select skills
3. Plan
4. Implement
5. Validate

---

## Safety Rules

- Never expose secrets
- Never modify environment files
- Never delete files without confirmation
- Keep changes minimal and modular