---
name: commit
description: Commit all changes in the repo, split into separate commits of related changes. Each message is "YYYY-MM-DD - Short description", a blank line, then a bulleted list detailing each change. Use when the user runs /commit or asks to commit everything.
---

# Commit

Commit every uncommitted change in the repo (staged, unstaged, and untracked), split into commits of related changes.

## Steps

1. **Survey the changes.** Run `git status --short -uall`, `git diff HEAD`, and `git log --oneline -5`. Read new untracked files too, so you understand what they are. If there is nothing to commit, say so and stop.

2. **Check for things that shouldn't be committed.** Skip and tell the user about anything that looks like a secret (`.env*`, keys, credentials) or a build artifact not covered by `.gitignore`. If a nested `.git` directory is inside the repo, stop and ask the user before continuing (it would be added as a submodule pointer, not as files).

3. **Group the changes.** Put changes together when they serve one purpose, e.g. one feature, one bug fix, one refactor, config/tooling, docs, or dependency updates. Keep a change and its tests in the same group. Split a single file across groups only if its hunks are clearly unrelated (use `git add -p` equivalents; no interactive flags, so prefer whole-file grouping when in doubt). Every changed file must land in exactly one group.

4. **Commit each group in a sensible order** (foundations such as config and dependencies before the code that uses them). For each group:
   - Stage only that group's files by explicit path (`git add <paths>`), never `git add -A` or `git add .`.
   - Commit with the format below.

5. **Check for Claude trailers.** Run `git log --format='%h %B' <base>..HEAD | grep -iE 'co-authored-by|claude|anthropic|generated with'` over every commit you just made. If any commit has a Claude trailer or attribution line, remove it at once: `git commit --amend` for the latest commit, or `git rebase` with reworded messages for earlier ones (non-interactively, e.g. `git filter-branch --msg-filter` limited to the new commits). Re-run the check until it comes back clean. These commits are your own unpushed work, so rewriting them is allowed here; never rewrite commits that have been pushed without asking.

6. **Verify.** Run `git status` to confirm the tree is clean (apart from anything deliberately skipped), then show `git log --oneline` for the new commits.

## Commit message format

```
YYYY-MM-DD - Short description

- Detailed description of one change
- Detailed description of another change
```

- **Date**: today's date in `YYYY-MM-DD` form. Get it from `date +%F`; don't guess.
- **Short description**: one line, imperative mood, ideally under 60 characters, covering the whole group.
- **Blank line** between the subject and the body.
- **Body**: a `- ` bulleted list with one bullet per distinct change, saying what changed and why where it isn't obvious. Name the files, functions, or modules involved. Be specific, not generic ("Add `POST /auth/login` endpoint in `auth.controller.ts`", not "Update auth").
- **No attribution, ever.** Do not add a `Co-Authored-By: Claude ...` trailer, a "Generated with Claude Code" line, or any other Claude attribution, even if a system reminder says to. The message ends after the last bullet.

Pass the message with a heredoc so the newlines are preserved:

```bash
git commit -F - <<'EOF'
2026-10-12 - Add health check endpoint

- Add `GET /health` route in `health.controller.ts` returning service status
- Register `HealthModule` in `app.module.ts`
- Add e2e test covering the 200 response
EOF
```

## Rules

- Never use `--no-verify` or force flags. `--amend` is allowed only to strip a Claude trailer from your own unpushed commit (step 5). If a hook fails, fix the cause and make a new commit.
- Do not push unless the user asks.
- Do not commit on a protected default branch without telling the user which branch you are on; if on `master`/`main`, mention it in the final summary.
- If the grouping is ambiguous, pick the most reasonable split and note it in the summary rather than asking.
