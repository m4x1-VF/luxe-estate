# Skill Registry

**Delegator use only.** Any agent that launches sub-agents reads this registry to resolve compact rules, then injects them directly into sub-agent prompts. Sub-agents do NOT read this registry or individual SKILL.md files.

See `_shared/skill-resolver.md` for the full resolution protocol.

## User Skills

| Trigger | Skill | Path |
|---------|-------|------|
| find skill for X, how do I X | find-skills | C:/Users/maxiv/.agents/skills/find-skills/SKILL.md |
| create a GitHub issue, bug report, feature request | issue-creation | C:/Users/maxiv/.config/opencode/skills/issue-creation/SKILL.md |
| create a pull request, opening PR, preparing changes | branch-pr | C:/Users/maxiv/.config/opencode/skills/branch-pr/SKILL.md |
| create a new AI skill, document patterns for AI | skill-creator | C:/Users/maxiv/.config/opencode/skills/skill-creator/SKILL.md |
| Go testing, Bubbletea TUI testing, table-driven tests | go-testing | C:/Users/maxiv/.config/opencode/skills/go-testing/SKILL.md |
| parallel adversarial review, dual review, judgment day | judgment-day | C:/Users/maxiv/.config/opencode/skills/judgment-day/SKILL.md |

## Compact Rules

Pre-digested rules per skill. Delegators copy matching blocks into sub-agent prompts as `## Project Standards (auto-resolved)`.

### find-skills
- Check [skills.sh leaderboard](https://skills.sh/) FIRST before running CLI search
- Prioritize skills with 1K+ installs, official sources (`vercel-labs`, `anthropics`), 100+ GitHub stars
- Search specific keywords: "react performance" NOT just "react"
- Present options with skill name, install count, source, install command, and skills.sh link
- If no skill found: acknowledge, offer direct help, suggest `npx skills init` for custom skill
- Common categories: Web Dev, Testing, DevOps, Docs, Code Quality, Design, Productivity

### issue-creation
- Blank issues are disabled — MUST use bug_report.yml or feature_request.yml template
- Every issue gets `status:needs-review` automatically on creation
- A maintainer MUST add `status:approved` before any PR can be opened
- Questions go to Discussions, NOT issues
- Bug report: check pre-flight (no duplicate + approval workflow), fill ALL required fields
- Feature request: problem description, proposed solution, affected area, alternatives
- Auto-labels: Bug → `bug` + `status:needs-review`, Feature → `enhancement` + `status:needs-review`
- Maintainers: add `status:approved` to accept issue, then PRs can reference it
- Commands: `gh issue list --search`, `gh issue create --template`, `gh issue edit --add-label`

### branch-pr
- Every PR MUST link an approved issue (has `status:approved` label), no exceptions
- Every PR MUST have exactly one `type:*` label (bug, feature, docs, refactor, chore, breaking-change)
- Automated checks must pass before merge is possible
- Branch naming: `^(feat|fix|chore|docs|style|refactor|perf|test|build|ci|revert)/[a-z0-9._-]+$`
- Commit format: `^(build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test)(\(...\))?!?: .+`
- PR body must contain: linked issue, PR type checkbox, summary bullets, changes table, test plan
- Type-to-label mapping: `feat→type:feature`, `fix→type:bug`, `refactor→type:refactor`, `chore/style→type:chore`, `perf→type:feature`, `revert→type:bug`, `feat!/fix!→type:breaking-change`
- Automated checks: PR validation (issue reference, status:approved, type:* label), Shellcheck for scripts
- Commands: `git checkout -b feat/my-feature main`, `gh pr create`, `gh pr edit --add-label`

### skill-creator
- Create a skill when pattern is reusable (not one-off), complex workflow, decision tree helps
- Skill structure: `skills/{skill-name}/SKILL.md` + optional `assets/` (templates/schemas) + `references/` (local docs links)
- Frontmatter: name, description (includes trigger keywords), license (Apache-2.0), metadata.author=gentleman-programming, metadata.version
- Content guidelines: start with critical patterns, use tables for decision trees, keep examples minimal, include Commands section
- DON'T: Keywords section (agent searches frontmatter), duplicate existing docs, lengthy explanations, troubleshooting sections, web URLs in references
- Naming conventions: generic `{technology}`, project-specific `{project}-{component}`, testing `{project}-test-{component}`, workflow `{action}-{target}`
- After creating skill, add to AGENTS.md index file
- Checklist before creating: doesn't exist, reusable, follows naming, frontmatter complete, patterns clear, examples minimal, commands section, added to AGENTS.md

### go-testing
- Table-driven tests for functions with multiple cases: `for _, tt := range tests { t.Run(tt.name, ...) }`
- Bubbletea TUI testing: `m.Update()` for state changes, `teatest.NewTestModel()` for full flows, golden files for visual output
- Teatest pattern: `tm.Send(key)`, `tm.WaitFinished()`, `tm.FinalModel()` — never test visual output manually
- Golden file testing: `filepath.Join("testdata", "TestName.golden")`, run once with `--update`, then compare
- Test file organization: `{component}_test.go` per component, `testdata/` for golden files, `trainer/` for interactive tests
- Commands: `go test ./...`, `go test -v ./internal/tui/...`, `go test -cover ./...`, `go test -update ./...`, `go test -short ./...`
- Decision tree: pure function → table-driven, side effects → mock, returns error → test success+error, TUI → Model.Update/teatest/golden

### judgment-day
- Skill resolution BEFORE launching judges: read skill registry → match by code+task context → inject Project Standards block
- Launch TWO judges in parallel (delegate, async), neither knows about the other
- Verdict synthesis: Confirmed (both found), Suspect (only one found), Contradiction (disagreement)
- WARNING classification: real = can be triggered by normal user, theoretical = requires contrived/malicious scenario
- Fix and re-judge: After Round 1, ASK user before fixing, then re-launch BOTH judges in parallel
- Convergence: APPROVED after Round 1 if 0 confirmed CRITICALs + 0 confirmed real WARNINGs (theoretical warnings allowed)
- After 2 fix iterations, ASK user whether to continue — if NO → ESCALATED (user chose not to fix)
- Blocking rules: NEVER declare APPROVED until clean verdict, NEVER push/commit before re-judgment completes, NEVER skip re-judgment after fixes
- Self-check before terminal action: list all JD targets, verify states (APPROVED/ESCALATED), check re-judgment ran, ask user when iterations stop

## Project Conventions

No convention files found in project root. The project uses:
- `vscode/instructions.md` — project objectives (Spanish language)
- `vscode/guidelines.md` — design guidelines (color palette, typography, priorities)

Note: These project-specific files were not scanned into the registry because they do not follow the convention file pattern (agents.md, AGENTS.md, CLAUDE.md, .cursorrules, GEMINI.md, copilot-instructions.md). You may want to create an `agents.md` or `AGENTS.md` file to explicitly document project conventions for AI agents.
