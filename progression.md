# Learning Progression

## Profile
- Goal: AI-Native Full-Stack Software Engineer
- Training duration: 12 weeks
- Weekly target: approximately 16 hours
- Preferred language: French with English technical terminology
- Learning style: practical, structured, rigorous, time-efficient
- Context used for examples: aviation operations (flight planning, operational data, automation)
- Constraint: no critical aviation safety rules or real regulatory calculations without reliable sources

## Environment
- OS: macOS (darwin arm64)
- Node.js: 24.14.0
- npm: 11.9.0
- TypeScript: 7.0.2, global `tsc` (`/usr/local/bin/tsc`)
- Type-check: `tsc --noEmit` (strict, no emit)
- Run a single exercise file: `node --experimental-strip-types <file.ts>`
- Local dependencies: none. TypeScript is not installed in the project.
- Git: connected to https://github.com/Samuellekpor/Modern-dev-training on branch main.

## Current Position
- Current week: Week 1 / 12
- Current topic: TypeScript Fundamentals
- Current lesson: Promise typing
- Lesson status: Introduced
- Previous lesson: unknown — Validated
- Previous lesson: Type narrowing — Validated
- Previous lesson: Object types, interfaces, union types — Validated
- Previous lesson: Type inference, primitive types, function typing — Validated
- Previous topic: JavaScript Fundamentals
- Previous project: Flight Operations Data Manager
- Project status: JavaScript mini-project completed before this workspace was initialized
- Active exercise: `src/exercises/05-promise-typing.ts` (assigned, not submitted)
- Lesson 3 commit: `dec7b10`, local only, not pushed
- Exercise 2 readability fix: the `filter` callback parameter is now named `flight`

## Validated Topics
- HTTP fundamentals
- Client-server architecture
- JSON
- Fetch API fundamentals
- JavaScript variables and scope
- Functions and arrow functions
- Return values
- Array methods
- filter()
- find()
- reduce()
- Method chaining
- Spread operator
- Conditions and logical operators
- Callbacks
- Event Loop fundamentals
- Promises
- async/await
- try/catch
- throw
- Basic API data processing
- Type inference
- Primitive types in TypeScript
- Function typing
- Return-path checking with an explicit return type
- Object typing
- Interfaces
- Union types
- Property widening on mutable object properties
- Type narrowing
- unknown

## Topic Status
- Destructuring: Needs review
- JavaScript modules: Not started
- Error handling beyond try/catch and throw: Needs review
- Independent problem solving: Needs review
- Type inference: Validated
- Primitive types in TypeScript: Validated
- Function typing: Validated
- Object typing: Validated
- Interfaces: Validated
- Union types: Validated
- Property widening: Validated
- Type narrowing: Validated
- Generics: Not started
- unknown: Validated
- keyof, typeof, never: Not started
- Promise typing: Introduced
- Utility types: Not started
- API typing: Not started
- TypeScript modules: Not started

## Topics To Strengthen
- Destructuring
- JavaScript modules
- Error handling
- Independent problem solving
- TypeScript fundamentals
- TypeScript advanced concepts

## Current Project
Aviation Operations Intelligence Platform

Build order:
1. Simple JavaScript functions — done before this workspace
2. TypeScript fundamentals — in progress
3. TypeScript frontend application
4. React application
5. Python backend
6. Database
7. AI features
8. Full-stack application

## Completed Project
Flight Operations Data Manager

Known implementations from that project, treated as practiced in JavaScript and not yet revalidated in TypeScript:
- `getFlightsByStatus`
- `getFlightByNumber`
- `getTotalPassengers`
- `getPassengersByStatus`
- `getDelayedFlights`
- `getFlightReport`

## Next Lesson
Exercise 5, now assigned: annotate what an `async` function places inside its `Promise`.

Still later in Week 1:
- Generics
- `keyof`
- `typeof`
- `never`
- Utility types
- API typing
- Modules

React does not start before TypeScript fundamentals are solid enough.

## Roadmap
Week 1: Web Fundamentals, JavaScript, TypeScript
Week 2: React + TypeScript
Week 3: Python + Backend Fundamentals
Week 4: SQL, PostgreSQL, Backend Integration
Week 5: LLMs and AI APIs
Week 6: Embeddings and RAG
Week 7: Agents, Tool Calling and MCP
Week 8: AI Evaluation and Reliability
Week 9: Git, Docker and CI/CD
Week 10: Architecture, Security and System Design
Week 11: Next.js, Context Engineering and Coding Agents
Week 12: Capstone, Portfolio and Job Preparation

## Pedagogical Decisions
- 2026-11-04: The workspace was empty. The JavaScript mini-project is recorded as completed from the prior training, not rebuilt.
- 2026-11-04: Lesson 1 stays on inference, primitive types, and function typing. Object types, interfaces, and union types wait for the next lesson.
- 2026-11-04: No project dependency was added. Global `tsc` 7.0.2 and Node's type stripping are enough for these exercises.
- A topic is `Validated` only after an unassisted or lightly assisted exercise shows the reasoning, not after the explanation alone.
- 2026-11-06: Explanation quality is a permanent rule in `.cursor/rules/pedagogie.mdc`. Each notion starts from a known idea, states why it is needed, and is labeled as main, complementary, or reserved for later. Course 2 is restated with that progression before Exercise 2 is attempted.
- 2026-11-06: Explanations use natural, concrete French. Technical English terms stay in English and are explained in plain words the first time they matter. Course 2 was restated again in that voice before Exercise 2, which was still unstarted.
- 2026-11-07: Git commits follow `.cursor/rules/git-formation.mdc`. A commit is proposed only after a fully validated lesson, or for an important independent step, and it is created only with explicit agreement. Validated lessons are kept in `cours/`. Exercises stay in `src/exercises/`. Courses 1 and 2 were written into Markdown after validation and recorded in the following commit.
- 2026-11-07: After type narrowing, `unknown` comes before generics. It continues the same idea: do not use a value until a check has removed the unsafe possibilities. Generics wait until a function needs to be reused across several types.

## Session History
### 2026-11-04 — Session 1
- Inspected an empty workspace. Created `progression.md`, `tsconfig.json`, and the first exercise file.
- Introduced type inference, primitive types, and function parameter/return annotations.
- Exercise 1 assigned in `src/exercises/01-type-inference-and-functions.ts`. Solution not written. Not validated.
- Estimated lesson time: 15–20 minutes. Estimated exercise time: 15 minutes. Actual time: not recorded yet.

### 2026-11-05 — Exercise 1 review
- Five functions submitted. `tsc --noEmit` passes. Runtime output matches the nine expected results.
- `formatFlightCode`, `isOperational`, `getPassengerLoad`, and `getTotalPassengers` meet the contract. `acc` and `flight` stay inferred.
- Important gap: `describeLoad` initializes `result` to `""`, so a missing branch would still type-check as `string`.
- Stylistic note: `!=` in `isOperational` is safe here because both sides are `string`. `!==` is the usual form.
- 2026-11-05 follow-up: `describeLoad` now returns directly from each path. Code is correct.
- Misconception: the learner said `tsc` would stay silent if a branch disappeared, because the function still checks both conditions. Missing concept: `tsc` checks that every path returns `string`. It does not check that both messages exist.
- 2026-11-06: The learner reproduced TS2366 by removing `return "Normal load"`, then restored it. Partial explanation: `: string` rejects `undefined`. Remaining gap: they treated the `return` inside the `if` as invalid and thought a return had to sit in the function body scope. The `if` return is valid for its path. Every path must return `string`. An `if/else` with a `return` in each branch also satisfies the contract.
- Status remains Practiced. Not Validated until this path explanation is confirmed.

### 2026-11-06 — Exercise 1 validated
- The learner confirmed that an `if/else` where each branch returns `string` needs no extra return after the `if`.
- Validated: type inference, primitive types, function typing, return-path checking.
- Exercise 2 assigned in `src/exercises/02-object-types-and-unions.ts`. Not submitted.

### 2026-11-06 — Exercise 2 review
- `FlightStatus`, `Flight`, and the three functions type-check. `tsc --noEmit` passes.
- Sums follow from the dataset: Scheduled 260, Delayed 205, Cancelled 80. `find` is returned directly as `Flight | undefined`.
- Readability: in `getPassengersByStatus`, the `filter` callback parameter is named `flights`, which shadows the array and names one flight as if it were the whole list.
- Explanation gap: the learner said inference assumes `string` until the value is reduced to precise values. Missing mechanism: inference sees `"Scheduled"`, then widens a mutable property to `string`. The annotation sets the contract. It does not narrow a vague guess afterward.
- Status remains Practiced. Not Validated until this widening explanation is precise.

### 2026-11-06 — Exercise 2 validated
- The learner explained that a `const` binding cannot be reassigned, so `"Scheduled"` stays a literal type, while an object property can still be changed and therefore widens to `string`.
- Validated: object typing, interfaces, union types, property widening.
- Remaining readability fix: the `filter` callback in `getPassengersByStatus` is still named `flights`.
- Exercise 3 assigned in `src/exercises/03-type-narrowing.ts`. Not submitted.

### 2026-11-07 — Exercise 3 validated
- `getDestinationByNumber` removes `undefined` before reading `destination`. `describeOperationalImpact` narrows `FlightStatus` through `Cancelled`, then `Delayed`, then the remaining `Scheduled` path.
- `tsc --noEmit` passes. The learner explained that after the `undefined` return, `flight` is `Flight` because that member of the union was eliminated.
- Detail: the `find` callback parameter is named `a`. A name like `flight` would be clearer.
- The `else` is correct for the three current statuses. A new status would still fall into "Passengers expected" without a type error, because the branch does not name `Scheduled`.
- Validated: type narrowing.
- Course note written in `cours/03-type-narrowing.md` and recorded in the following commit.
- Commit `03163b0` was pushed to `origin/main`.

### 2026-11-08 — Exercise 4 review
- `readFlightNumber` checks object, `null`, the property, then `string`. `tsc --noEmit` passes. No `any` and no assertion.
- Blocking gap: `readPassengerCount` returns `NaN` because `typeof NaN` is `"number"`.
- Misconception: the learner said `unknown` contains no type and therefore cannot be an object. `unknown` means TypeScript does not know the type yet. The runtime value can still be an object. Property access is refused until a check proves it.
- Status remains Practiced.

### 2026-11-08 — Exercise 4 validated
- `readPassengerCount` now rejects non-numbers and `NaN`. `Number.isNaN` runs only when the value is already a number, because `||` stops at the first true check.
- The learner corrected the explanation: `unknown` can be any runtime value, and TypeScript refuses to assume which one before a check.
- Validated: `unknown`.
- Course note written in `cours/04-unknown.md` and recorded in the following commit.
- Next lesson introduced: Promise typing. Exercise 5 assigned.

## Next Session
- Review Exercise 5.
- Propose the `unknown` commit when the learner agrees. Do not commit it before that.
- Lesson 3 commit `dec7b10` is still local. Push only with explicit agreement.
