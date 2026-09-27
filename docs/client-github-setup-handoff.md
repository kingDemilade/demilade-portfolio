# Client GitHub Setup Handoff

Last updated: August 1, 2026

Use this guide when setting up a new client website repository in GitHub. The goal is to keep the client as the owner while giving Demilade enough access to build, push, deploy, and maintain the site.

## Recommended Ownership Model

Use client-owned GitHub whenever the site is for a real client launch.

Recommended setup:

- Client owns the GitHub account or organization.
- Client owns the website repository.
- Demilade is invited as an admin or organization owner.
- Netlify connects to the client-owned GitHub repository.

Avoid hosting final client projects only under Demilade's personal GitHub unless it is temporary.

Why this matters:

- The client owns their website source code long-term.
- Hosting and deployment access stays clean.
- Future handoff is easier.
- Billing, domain, GitHub, and Netlify ownership are aligned.
- Demilade can still maintain the site without being the only owner.

## Best Account Structure

For most clients, create a GitHub organization.

Example:

```text
client-business-name
```

Example repo:

```text
client-business-site
```

For MPL Recovery, the pattern was:

```text
Organization: mplrecovery
Repository: mpl-recovery-site
```

Use a personal GitHub account only if the client is very small and does not want an organization.

## Repo Settings

When creating the repo:

- Visibility: Private
- README: Do not add
- `.gitignore`: Do not add
- License: Do not add

Use private visibility by default because client repos may include:

- Draft copy
- Internal docs
- Form setup notes
- API/config URLs
- Unfinished pages
- Client-specific assets

Netlify can deploy from private GitHub repos as long as Netlify has access.

## Invite Demilade

If inviting at the organization level:

1. Open the GitHub organization.
2. Go to `People`.
3. Click `Invite member`.
4. Invite Demilade's GitHub username.
5. Choose `Owner` if Demilade will manage repos, deployment, and access.
6. Choose `Member` only if access should be limited.

If inviting at the repo level:

1. Open the repo.
2. Go to `Settings`.
3. Go to `Collaborators and teams`.
4. Click `Add people`.
5. Invite Demilade's GitHub username.
6. Choose `Admin` access.

Recommended:

- Organization Owner access is easiest when Demilade is also setting up Netlify and managing deployment.
- Repo Admin access is enough for pushing code and connecting most deployments.

## Local Folder Checklist

Before initializing Git, confirm you are in the correct client project folder.

Run:

```bash
pwd
ls
```

For a static website, a good folder usually includes files like:

```text
index.html
about.html
services.html
css/
js/
images/
docs/
```

Do not push an outdated duplicate folder. Confirm the folder has the latest pages, assets, and docs.

## Initialize Git

From inside the correct client project folder, run:

```bash
git status
```

If you see:

```text
fatal: not a git repository
```

initialize Git:

```bash
git init
```

Then check again:

```bash
git status
```

Expected result:

```text
On branch main
No commits yet
Untracked files:
```

If Git starts on `master`, rename it to `main` later with:

```bash
git branch -M main
```

## Add `.gitignore`

Create a `.gitignore` before staging files.

Run:

```bash
printf "# macOS\n.DS_Store\n\n# Editor\n.vscode/\n\n# Logs\n*.log\n\n# Netlify local folder\n.netlify/\n" > .gitignore
```

Verify it:

```bash
cat .gitignore
```

Expected output:

```gitignore
# macOS
.DS_Store

# Editor
.vscode/

# Logs
*.log

# Netlify local folder
.netlify/
```

Important:

- Paste `.gitignore` rules into the file, not directly into Terminal.
- If `.DS_Store` or `.vscode/` still show in `git status`, the `.gitignore` may not be saved or may be misspelled.
- Watch for typos like `.gitigornre`.

## Stage And Commit

Stage all files:

```bash
git add .
```

Check staged files:

```bash
git status
```

Commit:

```bash
git commit -m "Initial client website"
```

Use a more specific message when helpful:

```bash
git commit -m "Initial MPL Recovery site"
```

You can also stage and commit through VS Code Source Control.

In VS Code:

1. Open Source Control.
2. Confirm unwanted files are ignored.
3. Stage all changes.
4. Enter a clear commit message.
5. Click `Commit`.

Do not click `Publish Branch` until the correct remote has been added or verified.

## Get The Correct GitHub Repo URL

In GitHub:

1. Open the client repo.
2. Click the green `Code` button.
3. Select `HTTPS`.
4. Copy the repo URL.

It should look like:

```text
https://github.com/client-org/client-site-repo.git
```

Example:

```text
https://github.com/mplrecovery/mpl-recovery-site.git
```

## Add The Remote

In Terminal:

```bash
git remote add origin https://github.com/client-org/client-site-repo.git
```

Replace the URL with the real client repo URL.

Verify:

```bash
git remote -v
```

Expected result:

```text
origin  https://github.com/client-org/client-site-repo.git (fetch)
origin  https://github.com/client-org/client-site-repo.git (push)
```

If the remote points to Demilade's personal portfolio repo or any wrong repo, do not push.

To fix a wrong remote:

```bash
git remote set-url origin https://github.com/client-org/client-site-repo.git
```

## Push To GitHub

Push the local commit:

```bash
git push -u origin main
```

If GitHub asks for login, sign in with an account that has access to the client repo.

Success looks like:

```text
[new branch] main -> main
branch 'main' set up to track 'origin/main'
```

Then open the repo in GitHub and confirm the files are visible.

## Common Issues

### `fatal: not a git repository`

Git has not been initialized in this folder.

Run:

```bash
git init
```

### `.DS_Store` is showing in Source Control

The `.gitignore` is missing, misspelled, or not saved.

Check:

```bash
cat .gitignore
```

### VS Code shows `Publish Branch`

That usually means the repo is committed locally but not pushed to GitHub yet.

Before clicking it, verify:

```bash
git remote -v
```

Only publish/push if the remote is the correct client repo.

### Logged into the wrong GitHub account

This is not automatically a problem.

What matters:

- The remote points to the client-owned repo.
- The signed-in GitHub account has permission to push.
- The repo is not accidentally published under Demilade's personal account.

### Push fails with permission denied

Check:

- Demilade accepted the GitHub invite.
- The invite gave Admin or sufficient write access.
- The repo URL is correct.
- The browser/VS Code GitHub login is the account with access.

## Before Connecting Netlify

Confirm:

- Repo is under the client-owned GitHub account or organization.
- Repo visibility is private unless the client requested public.
- Main branch exists.
- Site files are at the repo root or the publish folder is clearly documented.
- `index.html` exists.
- No unwanted `.DS_Store` or `.vscode/` files are tracked.
- No private secrets were committed.

For a simple static site on Netlify:

```text
Build command: blank
Publish directory: .
```

## Quick Checklist

1. Client creates GitHub org or account.
2. Client creates private empty repo.
3. Client invites Demilade.
4. Confirm the correct local site folder.
5. Run `git init`.
6. Create `.gitignore`.
7. Run `git add .`.
8. Commit the site.
9. Copy the GitHub HTTPS repo URL.
10. Add `origin`.
11. Run `git remote -v`.
12. Push with `git push -u origin main`.
13. Verify files on GitHub.
14. Connect Netlify when ready.

