# SoDam Family — Complete Reference Guide

> Step-by-step manual for people who have never used AI tools, computers, or coding before

---

## Table of Contents

1. [What is SoDam Family?](#chapter-1-what-is-sodam-family)
2. [Detailed Introduction to the 6 Siblings](#chapter-2-detailed-introduction-to-the-6-siblings)
3. [Prerequisites & Required Programs](#chapter-3-prerequisites--required-programs-complete-installation-guide)
4. [Download & Installation Complete Guide](#chapter-4-download--installation-complete-guide)
5. [Quick Start — Your First Command in 5 Minutes](#chapter-5-quick-start--run-your-first-command-in-5-minutes)
6. [Complete Usage Guide Per Plugin](#chapter-6-complete-usage-guide-per-plugin)
7. [Complete Command Reference Table](#chapter-7-complete-command-reference-table)
8. [Workflows & Scenario-Based Usage](#chapter-8-workflows--scenario-based-usage)
9. [Deep Dive — How It Works](#chapter-9-deep-dive--how-it-works-optional)
10. [Security & Data Flow](#chapter-10-security--data-flow)
11. [Understanding the Architecture](#chapter-11-understanding-the-architecture)
12. [Complete File & Document Location List](#chapter-12-complete-file--document-location-list)
13. [Complete Troubleshooting Guide](#chapter-13-complete-troubleshooting-guide)
14. [FAQ — Frequently Asked Questions](#chapter-14-faq--frequently-asked-questions)
15. [Legal / Copyright / License / Commercial Use](#chapter-15-legal--copyright--license--commercial-use)
- [Appendix A: Glossary](#appendix-a-glossary)
- [Appendix B: Version History](#appendix-b-version-history)

---

## Chapter 1: What is SoDam Family?

### The Simple Explanation

Imagine you have a very powerful robot assistant. It can write code, manage files, edit documents, and do many tasks for you. But sometimes, if you give it the wrong instructions, it might accidentally delete files you needed, overwrite months of work, or even upload secret passwords to the internet.

**SoDam Family** is the set of safety rules, backup systems, and smart helpers that stop your AI assistant from making dangerous mistakes — before the mistake happens.

In technical terms: SoDam Family is a collection of **6 tools (called "plugins")** that make **Claude Code** (an AI assistant made by a company called Anthropic) safer and easier to use.

### Why Was SoDam Created? What Happens When AI Makes Dangerous Mistakes?

🔴 **Real scenarios where AI can cause serious damage:**

- You ask the AI to "clean up old files" — it accidentally deletes files you needed forever
- You ask the AI to "update my project" — it overwrites 3 months of work without asking
- You ask the AI to "push my code" — it uploads secret passwords to the internet
- You ask the AI to "fix the database" — it deletes all the data without a backup
- The AI runs a command you did not intend, and the action cannot be undone

These are not rare edge cases. They happen regularly to people who use AI coding assistants without safety tools.

💡 **SoDam's solution:** Check *before* doing anything dangerous. Back up *before* changing anything. Ask the human *before* deleting anything. Stop *automatically* if something looks wrong.

### SoDam Family = A Set of 6 Tools

| Tool | Nickname | One-line job |
|------|----------|-------------|
| 🛡️ **SoDamHarness** | Safety Guard | Blocks dangerous actions and creates backups |
| 📄 **SoDamContext** | Doc Health-Check | Checks and repairs your AI instruction file |
| 🔁 **SoDamLoop** | Auto-Repeater | Safely repeats tasks automatically |
| 🧭 **SoDamAgentic** | Planning Assistant | Makes AI plan before acting |
| ✍️ **SoDamPrompt** | Prompt Tools | Easy fill-in-the-blank AI instruction templates |
| 🔍 **SoDamReverse** | Reverse Analyzer | Analyzes external code structure (advanced users) |

These 6 tools are called **"siblings"** because they work as a family — each with their own job, but all designed to work together.

### Who Should Use SoDam Family?

✅ **Perfect for you if:**
- You are new to AI tools and not sure what they might do
- You have experienced AI accidentally doing something you did not want
- You work with important files you cannot afford to lose
- You want to use AI more confidently, knowing there is a safety net
- You are learning to code with AI help and want a second layer of protection

✅ **Also useful if:**
- You are an experienced developer who wants automated safety checks
- You manage a team that uses Claude Code and want consistent safety rules
- You want automatic backups before any AI-assisted file modification

### What Changes After Using SoDam Family?

**Before SoDam:**
```
You → Claude Code → Action happens immediately (no warning)
                 → Mistake? Too late.
```

**After SoDam:**
```
You → Claude Code → SoDamHarness checks: "Is this dangerous?"
                 → If dangerous: "Are you sure? Let me show what will change first."
                 → If OK: proceeds safely
                 → Creates backup before any change
                 → If mistake: /sodam-harness-undo restores everything
```

### ⚠️ Honest Disclaimer: Safety Belt, Not Bulletproof Vest

SoDam Family is a **safety belt** — it dramatically reduces your risk of accidents, but it does not make you immune to all risks.

**What SoDam CAN do:**
- Block known dangerous commands before they run
- Create automatic backups before file modifications
- Ask for your confirmation before irreversible actions
- Detect secrets (passwords, API keys) in your code
- Let you undo the last action with one command

**What SoDam CANNOT do:**
- Protect against actions you take *directly* outside of Claude Code (e.g., deleting files in File Explorer manually)
- Prevent 100% of every possible accident in every possible situation
- Recover files if backups were disabled or the backup folder itself was deleted
- Stop mistakes that happen when you click "Allow" on a dangerous action warning
- Guarantee safety against future Claude Code versions that may behave unexpectedly

> **Bottom line:** "100% safe" does not exist in software. SoDam Family is a serious safety improvement, not a complete guarantee. Always keep your own backups for truly critical data.

---

## Chapter 2: Detailed Introduction to the 6 Siblings

### 🛡️ Sibling 1: SoDamHarness — The Safety Guard

**One-line summary:** SoDamHarness watches every action Claude Code tries to take and stops dangerous ones before they happen.

**What does it do?**

Think of SoDamHarness as a security guard standing between Claude Code and your computer. Before Claude Code can delete a file, overwrite a file, or run a risky command, SoDamHarness checks a list of rules. If the action is dangerous, it either blocks it completely, or shows you a warning and asks if you really want to continue.

SoDamHarness also creates automatic backups of your files before modifying them. If something goes wrong, you can type one command to get everything back.

**When should you use it?**

SoDamHarness should ALWAYS be running. It is the foundation of all the other siblings. Once installed, it runs automatically in the background — you do not need to think about it.

**Current Status:** ✅ Fully implemented and released (v0.1.0). Self-test: 72 tests PASS.

**Available commands:**

| Command | What it does |
|---------|-------------|
| `/sodam-harness-install` | First-time setup wizard |
| `/sodam-harness-status` | Show current status |
| `/sodam-harness-undo` | Restore the last backed-up file |
| `/sodam-harness-fix` | Try to automatically fix a problem |
| `/sodam-harness-trust` | Reduce repeated confirmation questions for safe actions |
| `/sodam-harness-log` | View history of recent actions |

**What Harness blocks automatically (no questions asked):**
- `rm -rf` (Linux/Mac command to delete everything)
- `del /f /s` (Windows force-delete command)
- `Remove-Item -Recurse -Force` (PowerShell mass delete)
- `git push --force` (overwrites shared code history — cannot be undone)
- `curl --data` to unknown URLs (sending your data to the internet)
- Any command with `--force` flags that bypass safety checks

**What Harness asks about before allowing:**
- Deleting any individual file
- Overwriting an existing file
- Writing files outside your current working directory

**What Harness allows without asking:**
- Reading files (safe — does not change anything)
- `git commit` (saves your work locally — safe)
- `npm run` (running your project — generally safe)
- `node` (running JavaScript — generally safe)
- Normal text edits to files

**How backups work:**

Every time Harness protects a file before modification, it saves a timestamped backup:
- Backup format: `filename_YYYYMMDD_HHMMSS.backup`
- Example: `CLAUDE.md_20260629_143022.backup`
- Backup location: `~/.sodamharness/backups/`
- A `manifest.json` file tracks every backup for integrity verification
- Atomic write: backup is saved completely before the original is touched (no partial backups)

---

### 📄 Sibling 2: SoDamContext — The Doc Health-Check

**One-line summary:** SoDamContext reads your AI instruction file (`CLAUDE.md`) and tells you if anything is wrong or confusing.

**What does it do?**

When you use Claude Code, you can give it a special file called `CLAUDE.md`. This file tells the AI how to behave — what rules to follow, what to avoid, etc. Over time, this file can get messy: the same instruction appears 5 times, two instructions contradict each other, or a secret password was accidentally written into the file.

SoDamContext runs a "health check" on this file and finds these problems. It then shows you a preview of the fixes before applying anything.

**Safety rules built into SoDamContext:**
- **T1 rule:** Secret keys/passwords are NEVER displayed — shown only as `sk-ant-…REDACTED`
- **T8 rule:** Lines containing safety keywords ("never", "always", "secret", "must", "forbidden") are NEVER deleted, even if they look like duplicates

**When should you use it?**

- After you first set up Claude Code
- Whenever CLAUDE.md feels "off" or the AI is behaving strangely
- Periodically as maintenance (once a month)
- After making significant changes to CLAUDE.md

**Current Status:** ✅ AI implementation complete (v0.1.0). Awaiting human end-to-end testing and beta release.

**Available commands:**

| Command | What it does |
|---------|-------------|
| `/sodam-context-checkup` | Run health check — find problems |
| `/sodam-context-intake` | Register a new CLAUDE.md for checking |
| `/sodam-context-treat` | Apply the suggested fixes (shows preview first) |

---

### 🔁 Sibling 3: SoDamLoop — The Auto-Repeater

**One-line summary:** SoDamLoop makes Claude Code safely repeat the same task multiple times automatically.

**What does it do?**

Imagine you have 50 files and you want Claude Code to check each one for errors. Without SoDamLoop, you would need to manually trigger Claude Code for each file. SoDamLoop lets you set it up once, and it processes all files automatically — with safety checks built in.

It uses a "maker and checker" system:
- **Maker AI:** Does the actual work
- **Checker AI:** Reviews what the Maker did (separate, independent AI)

This separation means mistakes are more likely to be caught before they cause problems.

**Safety limits (hard limits that cannot be overridden):**
- Maximum 8 repetitions per loop run
- Maximum 30 minutes total running time
- Oscillation detection: if 3 consecutive runs produce the same result, Loop stops automatically

**When should you use it?**

- Repeating the same action on many files
- Running scheduled quality checks
- Any task you want done multiple times without supervising each step

**Current Status:** ✅ Fully implemented (v0.1.0-phase1a). Self-test: 17 PASS. Batch approval (SP2) implemented.

**Available commands:**

| Command | What it does |
|---------|-------------|
| `/sodam-loop-start` | Start a new loop |
| `/sodam-loop-status` | Check progress of the current loop |
| `/sodam-loop-cancel` | Stop the loop completely |
| `/sodam-loop-undo` | Undo the last loop action |
| `/sodam-loop-help` | Show help information |

---

### 🧭 Sibling 4: SoDamAgentic — The Planning Assistant

**One-line summary:** SoDamAgentic makes Claude Code create a plan and show it to you BEFORE starting to code.

**What does it do?**

A common problem with AI assistants: they start working immediately without explaining what they are about to do. By the time you realize the AI is doing something wrong, it has already changed 20 files.

SoDamAgentic inserts a mandatory "plan first" step:
1. You give Claude Code a task
2. SoDamAgentic says: "Wait — let's make a plan first"
3. Claude Code creates a step-by-step plan and shows it to you
4. You review and approve (or modify) the plan
5. Only then does the work begin

After the work is done, SoDamAgentic provides a plain-language summary of every change made.

**When should you use it?**

- Before any significant coding task
- When you want to understand what AI is about to do
- When working with an unfamiliar codebase
- When you want non-developers to be able to review what changed

**Current Status:** ✅ Implemented (v0.1.0, init-mvp). Self-test: 22 PASS. F4 bulk-delete safety active.

**Available commands:**

| Command | What it does |
|---------|-------------|
| `/sodam-agentic-start` | Start the planning assistant (onboarding) |
| `/sodam-agentic-plan` | Create a plan for the current task |
| `/sodam-agentic-review` | Review recent changes in plain language |

**Known limitation:** The plan/review is guidance only. In certain complex multi-step scenarios, Claude Code may proceed without a formal plan. This is a known issue being improved in Phase 2.

---

### ✍️ Sibling 5: SoDamPrompt — The Prompt Tools

**One-line summary:** SoDamPrompt gives you 10 ready-made AI instruction templates — just fill in the blanks.

**What does it do?**

Writing good instructions for an AI is a skill that takes practice. SoDamPrompt gives you carefully designed templates. Each one is like a form with blanks to fill in. You enter your specific details, and the AI produces high-quality results.

**When should you use it?**

When you want to use AI for everyday tasks (not coding) and want reliable results without having to learn how to write complex AI instructions.

**Current Status:** ✅ v0.1.0 complete — 10 Korean writing skills as a no-code Claude Code plugin (SKILL.md). The earlier Next.js + Supabase web-app plan was dropped.

**Available commands (planned for Phase 2):**

| Command | What to fill in |
|---------|----------------|
| `/book-report-helper` | Book title, author, your thoughts |
| `/polite-message` | Recipient, request, your relationship |
| `/summarize-3-lines` | Paste the long text |
| `/explain-simply` | Topic, target audience |
| `/study-planner` | Subject, goal date, daily available hours |
| `/polish-intro` | Paste your current self-introduction |
| `/sns-caption` | Photo situation, mood, hashtag keywords |
| `/natural-english` | Paste English text, context |
| `/presentation-script` | Topic, duration, audience |
| `/apology-request-message` | Situation, what you need to say |

---

### 🔍 Sibling 6: SoDamReverse — The Reverse Analyzer

**One-line summary:** SoDamReverse analyzes external code or applications and automatically injects SoDamHarness safety rules into them.

**What does it do?**

If you find an open-source project online and want to work with it using Claude Code, that project does not have SoDamHarness safety rules. SoDamReverse analyzes the external project's structure, identifies risk areas, and automatically applies Harness safety rules to it.

**What is "reverse engineering"? (Plain English)**

Reverse engineering means taking something that already exists and figuring out how it works from the inside — like taking apart a clock to understand the gears. In software, it means reading existing code to understand its structure.

**Why should certain reverse engineering operations be blocked?**

Some techniques can be used to steal software, bypass copyright protection, or extract sensitive data. SoDamReverse only allows legitimate analysis for safety improvement purposes, and blocks operations that could enable misuse.

**When should you use it?**

⚠️ Advanced users only. If you are a beginner, you do not need SoDamReverse yet.

**Current Status:** 🚧 In development. 9 PRD design documents completed. Phase 1 implementation pending — waiting for 5 security features to be implemented first.

---

## Chapter 3: Prerequisites & Required Programs (Complete Installation Guide)

Before you can use SoDam Family, you need two programs installed on your computer. Do not skip this chapter — SoDam will not work without these.

### What You Need

| Program | Minimum Version | Purpose |
|---------|-----------------|---------|
| **Node.js** | Version 18 or higher | Runs the SoDam plugin code |
| **Claude Code** | Latest version | The AI assistant that SoDam protects |

### What is Node.js? (Plain English)

Node.js is a program that lets your computer run JavaScript code outside of a web browser. Think of it as a "translation engine" that your computer needs to understand the language SoDam is written in. You do not need to understand Node.js — you just need it installed.

---

### Installing Node.js

#### Windows — Step-by-Step

1. Open your web browser (Chrome, Edge, Firefox, etc.)
2. Go to: **https://nodejs.org**
3. You will see a big button that says **"LTS"** — click it
   - 💡 "LTS" means "Long-Term Support" — this is the stable, recommended version
4. A file downloads (it will look like `node-v20.x.x-x64.msi`)
5. Find the downloaded file in your Downloads folder and **double-click it**
6. A setup window appears — click **"Next"** on every screen without changing anything
7. When asked "Do you want to allow this app to make changes?" — click **Yes**
8. Wait for installation to finish (about 2–3 minutes)
9. **Restart your computer** — this is important, do not skip it

**Verify the installation worked:**
1. Press the **Windows key** on your keyboard
2. Type `powershell` and press **Enter**
3. A dark window appears — type: `node --version` and press **Enter**
4. ✅ If you see something like `v20.15.0` — success!
5. ❌ If you see an error — see Chapter 13, Problem 2

#### Mac — Step-by-Step

1. Open any web browser
2. Go to: **https://nodejs.org**
3. Click the **"LTS"** download button
4. A file downloads with a name like `node-v20.x.x.pkg`
5. **Double-click** the downloaded file
6. Follow the installation wizard — click **"Continue"** and **"Install"** at each step
7. Enter your Mac password when asked (this is normal — you are installing software)
8. Wait for it to finish

**Verify on Mac:**
1. Press **Command (⌘) + Space** to open Spotlight
2. Type `terminal` and press **Enter**
3. A window with a command line appears — type: `node --version` and press **Enter**
4. ✅ If you see `v18.x.x` or higher — success!

#### Linux (Ubuntu / Debian) — Step-by-Step

Open a terminal and type:

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Verify:
```bash
node --version
npm --version
```

---

### Installing Claude Code

> ⚠️ **Important:** Claude Code is a paid service. You need an Anthropic account and an active subscription.

1. Go to: **https://claude.ai/code**
2. Log in with your Anthropic account (or create one)
3. Download the installer for your operating system
4. Run the installer and log in with your Anthropic credentials

**Verify Claude Code is installed:**

Open a terminal, type: `claude --version`

✅ If a version number appears — success!

---

### Minimum Computer Requirements

| Requirement | Minimum |
|-------------|---------|
| Operating System | Windows 10, macOS 12, Ubuntu 20.04 |
| RAM (memory) | 4 GB (8 GB recommended) |
| Disk space | 500 MB free |
| Internet connection | Required for initial download; plugins work offline after |
| Node.js | v18 or higher |
| Claude Code | Latest version |

### Internet Connection Requirements

| When | Connection needed? |
|------|-------------------|
| Downloading SoDam plugins | ✅ Yes (one time) |
| Installing SoDam plugins | No — all local |
| Running SoDam plugins | No — 100% local |
| Using Claude Code AI features | ✅ Yes (AI needs internet) |

---

## Chapter 4: Download & Installation Complete Guide

### Step 1: Download the Plugins

Each of the 6 siblings is a separate download from GitHub (a website where software code is stored and shared for free).

#### Option A: ZIP Download (Recommended for Beginners ⭐)

This is the easiest method. No terminal needed.

**For SoDamHarness (install this first — it is required):**

1. Open your web browser
2. Go to: `https://github.com/sodam-ai/SoDam-Harness-Eng`
3. Look for a green button labeled **`< > Code`** near the top right of the page
4. Click it — a small menu appears
5. Click **`Download ZIP`**
6. A file named `SoDam-Harness-Eng-main.zip` will download
7. Find the file in your Downloads folder
8. **Double-click the ZIP file** to extract it
9. A folder named `SoDam-Harness-Eng-main` appears — this is what you need

**Repeat for any other siblings you want to install:**

| Sibling | GitHub Address |
|---------|---------------|
| 🛡️ SoDamHarness (REQUIRED) | `https://github.com/sodam-ai/SoDam-Harness-Eng` |
| 📄 SoDamContext | `https://github.com/sodam-ai/SoDam-Context-Eng` |
| 🔁 SoDamLoop | `https://github.com/sodam-ai/SoDam-Loop-Eng` |
| 🧭 SoDamAgentic | `https://github.com/sodam-ai/SoDam-Agentic-Eng` |
| ✍️ SoDamPrompt | `https://github.com/sodam-ai/SoDam-Prompt-Eng` |
| 🔍 SoDamReverse | `https://github.com/sodam-ai/SoDam-Reverse-Eng` |

#### Option B: git clone (For Users Comfortable with a Terminal)

```bash
git clone https://github.com/sodam-ai/SoDam-Harness-Eng
git clone https://github.com/sodam-ai/SoDam-Context-Eng
git clone https://github.com/sodam-ai/SoDam-Loop-Eng
git clone https://github.com/sodam-ai/SoDam-Agentic-Eng
git clone https://github.com/sodam-ai/SoDam-Prompt-Eng
git clone https://github.com/sodam-ai/SoDam-Reverse-Eng
```

---

### Step 2: Verify Downloaded Files Look Correct

After downloading and extracting, open the folder and make sure these files are present:

```
SoDam-Harness-Eng-main/
├── plugin.json           ← Required! (plugin description file)
├── hooks/
│   └── guard.mjs         ← Required! (the safety hook — Harness core)
├── commands/             ← Slash command folder
│   ├── install.md
│   ├── status.md
│   ├── undo.md
│   ├── fix.md
│   ├── trust.md
│   └── log.md
└── README.md
```

⚠️ If `plugin.json` is missing, the download was incomplete. Try downloading again.

---

### Step 3: Install the Plugins

💡 **Important — follow this installation order:**

**Harness → Loop → Context → Agentic → Prompt → Reverse**

Why? SoDamHarness is the foundation. The other siblings check if Harness is running — if Harness is missing, some features will not work correctly.

#### Installing on Windows

Open **PowerShell** (press the Windows key, type `powershell`, press Enter):

```powershell
# Create the plugins folder (safe to run even if it already exists)
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.claude\plugins\sodam-harness"

# Copy files (change the path to where you extracted the ZIP)
xcopy /E /I /Y "C:\Users\YourName\Downloads\SoDam-Harness-Eng-main" "$env:USERPROFILE\.claude\plugins\sodam-harness"
```

> 💡 Replace `YourName` with your actual Windows username.

For each additional sibling:

```powershell
# SoDamLoop
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.claude\plugins\sodam-loop"
xcopy /E /I /Y "C:\Users\YourName\Downloads\SoDam-Loop-Eng-main" "$env:USERPROFILE\.claude\plugins\sodam-loop"

# SoDamContext
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.claude\plugins\sodam-context"
xcopy /E /I /Y "C:\Users\YourName\Downloads\SoDam-Context-Eng-main" "$env:USERPROFILE\.claude\plugins\sodam-context"

# SoDamAgentic
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.claude\plugins\sodam-agentic"
xcopy /E /I /Y "C:\Users\YourName\Downloads\SoDam-Agentic-Eng-main" "$env:USERPROFILE\.claude\plugins\sodam-agentic"

# SoDamPrompt (different — uses SKILL.md format, not plugin format)
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.claude\skills"
xcopy /E /I /Y "C:\Users\YourName\Downloads\SoDam-Prompt-Eng-main\skills" "$env:USERPROFILE\.claude\skills"
```

#### Installing on Mac

Open **Terminal** (Command+Space, type "terminal", press Enter):

```bash
# SoDamHarness (Required — install first!)
mkdir -p ~/.claude/plugins/sodam-harness
cp -r ~/Downloads/SoDam-Harness-Eng-main/* ~/.claude/plugins/sodam-harness/

# SoDamLoop
mkdir -p ~/.claude/plugins/sodam-loop
cp -r ~/Downloads/SoDam-Loop-Eng-main/* ~/.claude/plugins/sodam-loop/

# SoDamContext
mkdir -p ~/.claude/plugins/sodam-context
cp -r ~/Downloads/SoDam-Context-Eng-main/* ~/.claude/plugins/sodam-context/

# SoDamAgentic
mkdir -p ~/.claude/plugins/sodam-agentic
cp -r ~/Downloads/SoDam-Agentic-Eng-main/* ~/.claude/plugins/sodam-agentic/

# SoDamPrompt (SKILL.md format — different folder!)
mkdir -p ~/.claude/skills
cp -r ~/Downloads/SoDam-Prompt-Eng-main/skills/* ~/.claude/skills/
```

#### Installing on Linux

Use the same commands as Mac above.

---

### Step 4: MUST Restart Claude Code After Installation

⚠️ **This step is critical — many beginners skip it. Do not skip it.**

Claude Code only reads plugin files when it starts up. If Claude Code is already open when you install a plugin, it will not see the new plugin at all.

**Why does this happen?**

When Claude Code launches, it scans the `~/.claude/plugins/` folder and loads all plugins it finds. If you add a new plugin while Claude Code is already running, it won't know about it until the next restart.

**How to fully restart Claude Code:**
1. Click the X button to close Claude Code (or press Ctrl+C in the terminal)
2. Wait a few seconds to make sure it is fully closed
3. Open Claude Code again from scratch

### Step 5: Verify Successful Installation

After restarting Claude Code, type:

```
/sodam-harness-status
```

✅ **Success:** You see a status message showing Harness is active with a version number.

❌ **Problem:** You see "Unknown command" or nothing happens — see Chapter 13, Problem 1.

---

### Installing Multiple Plugins at Once

You can install all 4 main plugins in one go — just run all the commands in order, then restart Claude Code once after all installations are complete.

**Recommended installation order:**
1. **Harness** (required — install first)
2. **Loop** (if you want automated repetition)
3. **Context** (if you want CLAUDE.md health checks)
4. **Agentic** (if you want plan-first workflow)

---

## Chapter 5: Quick Start — Run Your First Command in 5 Minutes

Let's get SoDam up and running. Follow these steps exactly.

### Step 1: Install SoDamHarness

If you have not already installed it, follow Chapter 4 for SoDamHarness only.

### Step 2: Restart Claude Code

Close Claude Code completely. Open it again. (Chapter 4, Step 4 explains why this matters.)

### Step 3: Run the Setup Command

In Claude Code, type:

```
/sodam-harness-install
```

Press Enter. This wizard:
- Confirms Node.js is installed and working
- Verifies all plugin files are in the right place
- Creates the backup folder (`~/.sodamharness/backups/`)
- Runs all 72 self-tests to confirm everything works
- Shows a success summary

### Step 4: Check Status

Type:

```
/sodam-harness-status
```

You will see output similar to:

```
🛡️ SoDamHarness Status
Version: 0.1.0
Status: ACTIVE ✅
Backup folder: ~/.sodamharness/backups/ ✅
Self-test: 72/72 PASS ✅
Protected operations: file delete, file overwrite, force push, mass delete
Recent activity: No actions logged yet
```

### What Does Success Look Like?

✅ You see "ACTIVE" in the status
✅ All self-tests show PASS (72/72)
✅ The backup folder path is shown
✅ No error messages appear

🎉 **Congratulations! SoDamHarness is now protecting your Claude Code sessions.**

From now on, if Claude Code tries to delete a file or run a dangerous command, Harness will step in and ask for your confirmation first.

---

## Chapter 6: Complete Usage Guide Per Plugin

---

### 6.1 SoDamHarness Usage Guide

#### First-Time Setup: `/sodam-harness-install`

**When to use:** Only once, the first time after installation.

**What it does step by step:**
1. Checks that Node.js v18+ is installed
2. Verifies `plugin.json` and `guard.mjs` are present
3. Creates the backup directory `~/.sodamharness/backups/`
4. Creates `manifest.json` for backup integrity tracking
5. Runs all 72 self-tests
6. Registers the hook with Claude Code
7. Shows final success summary

**What if it fails?**
- "Node.js not found" → install Node.js (Chapter 3)
- "plugin.json missing" → re-copy the plugin files (Chapter 4)
- Self-test failures → run `/sodam-harness-fix`

---

#### Checking Status: `/sodam-harness-status`

**When to use:** Anytime you want to know if Harness is running correctly. Use it at the start of every Claude Code session.

**Reading the output:**

```
🛡️ SoDamHarness Status
─────────────────────────────────
Version: 0.1.0              ← Which version is installed
Status: ACTIVE ✅            ← Is Harness running? (should say ACTIVE)
Backup folder: present ✅    ← Does the backup folder exist?
Self-test: 72/72 PASS ✅     ← Are all internal tests passing?
─────────────────────────────────
Protected operations:
  • File delete (rm, del, Remove-Item) → BLOCK/ASK
  • Force push (git push --force)      → BLOCK
  • Mass delete (-Recurse, -rf)        → BLOCK
  • File overwrite                     → ASK
  • Out-of-directory write             → ASK
─────────────────────────────────
Recent activity (last 5):
  [none yet]
```

**What each line means:**
- `ACTIVE` = Harness is running and protecting you ✅
- `INACTIVE` = Something is wrong; run `/sodam-harness-fix`
- `72/72 PASS` = All internal safety checks are working
- `FAIL (x/72)` = Some safety checks failed; run `/sodam-harness-fix`

---

#### Recovering From a Mistake: `/sodam-harness-undo`

**When to use:** When something went wrong and you want to restore the previous version of a file.

**Step-by-step:**

1. Type `/sodam-harness-undo` and press Enter
2. Harness shows you a list of available backups:
   ```
   Available backups:
   1. CLAUDE.md → backed up 2026-06-29 14:30:22 (23 minutes ago)
   2. app.js    → backed up 2026-06-29 13:15:05 (1 hour ago)
   3. config.json → backed up 2026-06-29 10:00:11 (4 hours ago)

   Which backup would you like to restore? (Enter number or 'cancel')
   ```
3. Type the number of the backup you want
4. Harness confirms: "Restoring CLAUDE.md from 14:30:22 — are you sure? (yes/no)"
5. Type `yes` and press Enter
6. The file is restored ✅

**Important limits of undo:**
- Only works for files that Harness backed up (files modified while Harness was active)
- Cannot undo actions taken before Harness was installed
- Cannot undo actions you took directly in File Explorer (outside Claude Code)
- Cannot undo if you deleted the backup file itself

---

#### When Something Goes Wrong: `/sodam-harness-fix`

**When to use:** When `/sodam-harness-status` shows errors, or Harness commands are not working.

**What it tries to fix automatically:**
- Missing backup directory → creates it
- Corrupted manifest.json → rebuilds it
- Failed self-tests → re-runs setup
- Incorrect file permissions → attempts correction

**What it cannot fix automatically:**
- Missing Node.js installation
- Missing or corrupted plugin files (re-download needed)

---

#### Reducing Repeated Questions: `/sodam-harness-trust`

**When to use:** When Harness keeps asking about the same safe actions and it is slowing you down.

**Example:** You are editing many files in your project folder and Harness keeps asking "Are you sure you want to modify this file?" for each one.

`/sodam-harness-trust` lets you tell Harness: "For files inside my project folder, I trust the changes — stop asking every time."

⚠️ **Use carefully!** Only trust operations you have verified are safe. Do not trust operations that could delete files.

---

#### Viewing History: `/sodam-harness-log`

**When to use:** When you want to see what actions Harness has taken recently.

**Example output:**
```
🛡️ SoDamHarness Activity Log (last 10 events)
─────────────────────────────────────────────
[2026-06-29 14:30:20] BLOCKED: rm -rf ./temp/
[2026-06-29 14:30:22] BACKUP: CLAUDE.md → CLAUDE.md_20260629_143022.backup
[2026-06-29 14:30:25] ALLOWED: Edit CLAUDE.md (user confirmed)
[2026-06-29 13:15:05] BACKUP: app.js → app.js_20260629_131505.backup
[2026-06-29 13:15:08] ALLOWED: Edit app.js (user confirmed)
```

---

#### Everyday Scenarios with SoDamHarness

**Scenario: AI tries to delete log files**

```
Claude Code: I'll clean up the old log files to save space.
             [about to run: rm -rf ./logs/]

SoDamHarness: ⚠️ DANGEROUS OPERATION DETECTED
              Command: rm -rf ./logs/
              This will permanently delete all files in ./logs/

              Backup created: backup_20260629_143055/

              Do you want to continue? (yes/no)

You type: no

SoDamHarness: ✅ Operation cancelled. Your files are safe.
```

**Scenario: AI tries to force-push code**

```
Claude Code: I'll push the updated code now.
             [about to run: git push --force origin main]

SoDamHarness: 🔴 BLOCKED: git push --force
              This command would OVERWRITE the history of the 'main' branch.
              This cannot be undone and could destroy teammates' work.

              This command is blocked by SoDamHarness policy.
              Use 'git push' (without --force) instead.
```

---

### 6.2 SoDamLoop Usage Guide

#### What is a "Repetitive Task"? Easy Examples

A repetitive task is anything you do the same way multiple times:

- "Check every JavaScript file in my project for errors" (50 files = 50 checks)
- "Apply the same formatting rules to all 30 documents"
- "Every hour, run a test to make sure my website still works"
- "Process each image in a folder the same way"

Without SoDamLoop: manually trigger Claude Code for each item, one by one.
With SoDamLoop: set it up once, it runs safely for all items automatically.

---

#### Starting a Loop: `/sodam-loop-start`

**How to set up your first loop:**

1. Type `/sodam-loop-start`
2. SoDamLoop asks you questions:
   ```
   🔁 SoDamLoop Setup
   ─────────────────────────────────
   What task do you want to repeat?
   (Describe exactly what should happen each time)

   > Check each .js file in ./src/ for syntax errors and report which files have problems

   How many times should this run? (max 8)
   > 8

   Allow safe file writes without asking each time? (yes/no)
   > yes

   🛡️ SoDamHarness detected and active ✅
   Loop ready. Starting now...
   ```
3. The loop begins — Maker AI works, Checker AI reviews, repeats up to 8 times

---

#### Checking Progress: `/sodam-loop-status`

```
🔁 SoDamLoop Status
─────────────────────────────────
Session ID: loop-2026062914-abc123
Status: RUNNING
Current iteration: 3 of 8
Elapsed time: 12 minutes (limit: 30 minutes)
Oscillation check: OK (no repeated results detected)
─────────────────────────────────
Completed items:
  ✅ app.js — No errors found
  ✅ utils.js — No errors found
  🔄 routes.js — Currently processing...
─────────────────────────────────
Remaining: 5 more iterations
```

---

#### Stopping Mid-Way: `/sodam-loop-cancel`

1. Type `/sodam-loop-cancel`
2. Loop asks: "Stop after this iteration completes, or stop right now? (after/now)"
3. Choose "after" to let the current item finish cleanly, or "now" to stop immediately
4. Loop saves a record of what was completed so far

---

#### Undoing a Loop Action: `/sodam-loop-undo`

If a loop iteration produced a bad result:

1. Type `/sodam-loop-undo`
2. Shows the most recent loop changes
3. Lets you restore files to their state before the loop ran

---

#### Understanding Batch Approval

When you answer "yes" to "Allow safe file writes without asking each time?" during setup, this is called **batch approval**.

What batch approval does:
- Loop can write files normally without asking you each time (faster)
- Loop STILL asks for dangerous operations (deletes, force operations) — always
- The setting is stored in the loop's state file as `batch_approved: true`
- **R-5 rule:** Dangerous commands and self-protection operations ALWAYS ask/deny, regardless of batch approval

Batch approval is safe to enable for normal file editing tasks. Do NOT enable it if the loop will be deleting files.

---

#### Safety Limits Explained

| Limit | Value | Why it exists |
|-------|-------|---------------|
| Max iterations | 8 | Prevents accidentally running forever |
| Max time | 30 minutes | Prevents getting stuck in a runaway loop |
| Oscillation detection | 3 same results in a row | Stops if the AI is looping without progress |

**What is oscillation?**

Oscillation means the loop is stuck producing the same output over and over with no real progress. Example: the loop tries to fix an error, but the fix creates the same error again, which it tries to fix again, and so on. SoDamLoop detects this automatically after 3 identical consecutive results and stops.

---

#### Everyday Scenario: Reformatting Multiple Files

You have 20 markdown files and want every heading converted to Title Case:

```
1. /sodam-loop-start
   Task: For each .md file in ./docs/, find any headings that are not Title Case
         and correct them. One file per iteration.
   Iterations: 8
   Batch approval: yes

2. Loop runs automatically:
   Iteration 1: Opens README.md, fixes 3 headings, saves
   Iteration 2: Opens INSTALL.md, fixes 1 heading, saves
   Iteration 3: Opens USAGE.md — no changes needed
   ...continues for up to 8 files...

3. After completion:
   "Loop complete. Processed 8 files. 6 modified, 2 unchanged."

4. Run /sodam-loop-start again for the next batch of 8
```

---

### 6.3 SoDamAgentic Usage Guide

#### Why is "Plan First" Better?

Imagine hiring a contractor to renovate your kitchen. Would you prefer they:

**Option A:** Start swinging a hammer immediately the moment you let them in the door

**Option B:** First show you a blueprint, explain each step, get your approval, then start work

Option B is obviously better — but most AI assistants work like Option A. SoDamAgentic makes Claude Code work like Option B.

---

#### Getting Started: `/sodam-agentic-start`

**When to use:** The first time, or when you want a refresher on how the workflow operates.

What happens:
1. SoDamAgentic checks if SoDamHarness is running (it cooperates with Harness)
2. Shows you an onboarding guide explaining the plan-first workflow
3. Prepares the session tracking folder (`~/.sodamagentic/session-*.json`)

---

#### Creating a Plan: `/sodam-agentic-plan`

**When to use:** Before asking Claude Code to do any significant work.

**Step-by-step:**

1. Type `/sodam-agentic-plan`
2. Describe your task:
   ```
   > I want to add a login page to my website
   ```
3. SoDamAgentic creates a plan:
   ```
   🧭 SoDamAgentic — Plan for: "Add login page to website"
   ──────────────────────────────────────────────────────

   Step 1: Create login form HTML
           Files to create: ./pages/login.html
           Risk level: LOW (new file, nothing deleted)

   Step 2: Add CSS styling for login form
           Files to modify: ./styles/main.css
           Risk level: LOW (adding to existing file)
           Backup: will be created automatically by Harness

   Step 3: Add JavaScript validation
           Files to create: ./scripts/login-validate.js
           Risk level: LOW (new file)

   Step 4: Connect form to backend API
           Files to modify: ./server.js
           Risk level: MEDIUM (modifying server logic)
           Backup: will be created automatically by Harness

   ──────────────────────────────────────────────────────
   Total risk: LOW-MEDIUM
   Files to be CREATED (new): 2
   Files to be MODIFIED (existing): 2
   Files to be DELETED: NONE

   Approve this plan? (yes / modify / cancel)
   ```
4. Review and approve (or ask for changes)
5. Work begins only after you say yes

---

#### Reviewing Results: `/sodam-agentic-review`

**When to use:** After Claude Code finishes work, to understand what changed in plain English.

**Example output:**
```
🧭 SoDamAgentic — Change Review
──────────────────────────────────────────────────────

Changes made in this session:

📄 login.html (NEW FILE created)
   → A new web page for users to log in.
   → Contains a form with an email field and password field.
   → Nothing was deleted to create this.

📄 main.css (MODIFIED)
   → The login page was given a visual design.
   → Added: blue button, centered form layout, white background.
   → 45 lines were added at the bottom of the file.
   → Previous version: backed up automatically.

📄 server.js (MODIFIED)
   → The server now handles login requests.
   → Added a new route that checks if email/password match.
   → 28 lines were added.
   → Previous version: backed up automatically.

──────────────────────────────────────────────────────
Summary: 1 new file created. 2 files modified. 0 files deleted.
Backups available: yes (use /sodam-harness-undo to restore any file)
```

---

#### Everyday Scenarios with SoDamAgentic

**Scenario: Fixing a bug**

```
1. /sodam-agentic-start      — Start the session
2. /sodam-agentic-plan       — "Fix the bug where the submit button doesn't work"
   → Plan shows: will modify button-handler.js and index.html
   → You approve the plan
3. Claude Code fixes the bug
4. /sodam-agentic-review     — "Added 3 lines to button-handler.js to attach the click handler."
5. Test it works
6. If it broke something: /sodam-harness-undo — Restore previous files
```

---

#### Known Limitation of SoDamAgentic

⚠️ The plan/review commands give guidance to Claude Code, but they do not technically force it to follow a plan in all cases. In complex multi-step conversations, Claude Code may start working without creating a formal plan. This is a known limitation being addressed in Phase 2.

If you notice the plan step being skipped, remind Claude Code: "Please use /sodam-agentic-plan before starting."

---

### 6.4 SoDamContext — Coming Soon

**What kind of tool is this?**

SoDamContext is like a doctor for your AI instruction files. It reads your `CLAUDE.md` and gives it a health check, then offers to fix any problems it finds.

**What is CLAUDE.md? (Easy explanation)**

When you use Claude Code, you can create a special file called `CLAUDE.md` in your project folder. This file is a rulebook for the AI — it tells Claude Code things like:
- "Always write code in Python"
- "Never delete files without asking"
- "This project is for beginners — explain everything simply"
- "My name is Alex and I am the lead developer"

Claude Code reads this file automatically before every conversation. Over time, the file can get messy — and that is what SoDamContext fixes.

**What will it do?**

- Scan CLAUDE.md for: duplicate lines, contradictions, accidental secrets, file size issues
- Show you the problems found
- Offer to fix them, but always shows a preview first
- Never touch lines containing safety-critical keywords (T8 rule)
- Never display secret key values (T1 rule)

**Current status:** ✅ AI implementation complete. Waiting for human end-to-end testing and beta phase before public release.

**Preview of commands (implemented, coming to public soon):**

| Command | What it does |
|---------|-------------|
| `/sodam-context-checkup` | Run full health check on CLAUDE.md |
| `/sodam-context-intake` | Register a new CLAUDE.md file for monitoring |
| `/sodam-context-treat` | Apply suggested fixes (shows preview first) |

---

### 6.5 SoDamPrompt — Coming Soon

**What kind of tool is this?**

SoDamPrompt is a toolkit for writing better AI instructions. It provides ready-made templates so you can get great results from AI without needing to learn how to write complex prompts.

**Introduction to writing better AI instructions**

The quality of what an AI produces depends heavily on what you ask it. Compare:

❌ Poor instruction: "Write about dogs"
✅ Better instruction: "Write a fun, 200-word article about golden retrievers for children aged 8–10. Use simple words and include two facts about how friendly they are."

The second version tells the AI: length, audience, tone, subject, and what to include. SoDamPrompt gives you templates that already have all these elements built in — you just fill in the specific blanks.

**Current status:** ✅ v0.1.0 complete — shipped as 10 no-code SKILL.md skills (the Next.js + Supabase web-app plan was dropped).

**When will it be released?**

The Claude Code plugin (10 SKILL.md skills) is the shipped form. The earlier web-app idea was dropped.

---

### 6.6 SoDamReverse — Coming Soon

**What kind of tool is this?**

SoDamReverse is a Claude Code plugin for advanced users who work with external codebases. It analyzes code you did not write and helps apply SoDamHarness safety rules to that code.

**What is "reverse engineering"? (Easy explanation)**

Reverse engineering is like figuring out a recipe from a finished cake. You examine the cake — ingredients, texture, taste — and work backwards to reconstruct how it was made. In software, it means reading a finished program and understanding how it was built.

**Why should certain reverse engineering operations be blocked?**

Reverse engineering can be used for good purposes (security research, compatibility, learning) or bad purposes (software piracy, stealing data, bypassing security). SoDamReverse only allows legitimate analysis and blocks operations that could enable harm.

**Current status:** 🚧 Phase 1 pending. 9 PRD design documents completed. 5 security features must be implemented before public release.

---

## Chapter 7: Complete Command Reference Table

### 🛡️ SoDamHarness Commands

| Command | Category | Status | Description |
|---------|----------|--------|-------------|
| `/sodam-harness-install` | Setup | ✅ Live | First-time setup wizard; runs 72 self-tests |
| `/sodam-harness-status` | Status | ✅ Live | Show current protection status |
| `/sodam-harness-undo` | Recovery | ✅ Live | Restore last backed-up file |
| `/sodam-harness-fix` | Repair | ✅ Live | Attempt automatic problem resolution |
| `/sodam-harness-trust` | Config | ✅ Live | Reduce repeated prompts for safe operations |
| `/sodam-harness-log` | History | ✅ Live | View recent action log |

### 📄 SoDamContext Commands

| Command | Category | Status | Description |
|---------|----------|--------|-------------|
| `/sodam-context-checkup` | Diagnosis | ✅ Built | Run CLAUDE.md health check |
| `/sodam-context-intake` | Setup | ✅ Built | Register new CLAUDE.md for monitoring |
| `/sodam-context-treat` | Repair | ✅ Built | Apply fixes (preview → confirm → apply) |

### 🔁 SoDamLoop Commands

| Command | Category | Status | Description |
|---------|----------|--------|-------------|
| `/sodam-loop-start` | Control | ✅ Live | Start a new automated loop |
| `/sodam-loop-status` | Monitor | ✅ Live | Check current loop progress |
| `/sodam-loop-cancel` | Control | ✅ Live | Stop the current loop |
| `/sodam-loop-undo` | Recovery | ✅ Live | Undo last loop iteration |
| `/sodam-loop-help` | Info | ✅ Live | Show loop help and examples |

### 🧭 SoDamAgentic Commands

| Command | Category | Status | Description |
|---------|----------|--------|-------------|
| `/sodam-agentic-start` | Setup | ✅ Live | Onboarding and session initialization |
| `/sodam-agentic-plan` | Planning | ✅ Live | Create plan before work begins |
| `/sodam-agentic-review` | Review | ✅ Live | Plain-language summary of changes |

### ✍️ SoDamPrompt Commands (Phase 2 Preview)

| Command | Category | Status | Description |
|---------|----------|--------|-------------|
| `/book-report-helper` | Template | 🚧 Planned | Book report fill-in-the-blank |
| `/polite-message` | Template | 🚧 Planned | Professional message writer |
| `/summarize-3-lines` | Template | 🚧 Planned | Summarize long text in 3 lines |
| `/explain-simply` | Template | 🚧 Planned | Explain any topic in simple terms |
| `/study-planner` | Template | 🚧 Planned | Create a personalized study plan |
| `/polish-intro` | Template | 🚧 Planned | Improve your self-introduction |
| `/sns-caption` | Template | 🚧 Planned | Write engaging social media captions |
| `/natural-english` | Template | 🚧 Planned | Make English sound natural |
| `/presentation-script` | Template | 🚧 Planned | Write a presentation script |
| `/apology-request-message` | Template | 🚧 Planned | Write apology or request messages |

---

## Chapter 8: Workflows & Scenario-Based Usage

### Scenario 1: Safely Editing Code Files with AI

**Situation:** You want Claude Code to update your website's homepage.

```
Step 1: Confirm safety net is active
/sodam-harness-status
  → Confirm ACTIVE ✅

Step 2: Plan before work
/sodam-agentic-start
/sodam-agentic-plan
  → Describe: "Update the homepage to include a new 'About Us' section"
  → Review the plan (which files will be changed?)
  → Approve when you are comfortable

Step 3: Claude Code does the work
  → Harness shows warnings for any file modifications
  → Each file is backed up automatically before changes
  → Approve file modifications when they look safe to you

Step 4: Review what changed
/sodam-agentic-review
  → Get plain-language summary of changes

Step 5: Test it works
  → Open your website and check the new section

Step 6: If something looks wrong
/sodam-harness-undo
  → Choose which file to restore
```

---

### Scenario 2: Automatically Repeating the Same Task Multiple Times

**Situation:** You have 40 test files and want Claude Code to run each one.

```
Step 1: Make sure Harness is active
/sodam-harness-status

Step 2: Set up the loop
/sodam-loop-start
  → Task: "Run the test file at the given path and report pass/fail"
  → Iterations: 8
  → Batch approval: yes (reading/running files is safe)

Step 3: Loop runs automatically
  → Processes up to 8 test files
  → Maker AI runs each test
  → Checker AI verifies the result
  → Report generated after each iteration

Step 4: Check progress
/sodam-loop-status

Step 5: Run again for the next batch
/sodam-loop-start  (repeat for next 8 files)

Step 6: If an iteration went wrong
/sodam-loop-undo
```

---

### Scenario 3: Making AI Plan First Before Working

**Situation:** You are about to make a significant change to your project.

```
Step 1:
/sodam-agentic-start
  → Initializes the planning session

Step 2: Describe your goal
/sodam-agentic-plan
  → "I want to change the database from SQLite to PostgreSQL"

Step 3: Review the plan carefully
  → Which files will change?
  → What is the risk level?
  → Are any files being deleted?
  → Do you understand each step?

Step 4: If the plan looks wrong, say "modify" and explain the change
  → "Actually, keep the SQLite version as a fallback option"

Step 5: Approve and let work begin

Step 6: After work is done
/sodam-agentic-review
  → Get plain-language summary of all changes
```

---

### Scenario 4: Recovering From a Mistake

**Situation:** Claude Code modified a file and it broke something.

```
Step 1: Do not panic! Harness has a backup.
/sodam-harness-undo
  → Shows list of recent backups
  → Find the file that was broken (check the timestamp)

Step 2: Confirm the restore
  → Harness asks: "Restore filename.js from 14:30:22 today? (yes/no)"
  → Type: yes

Step 3: Verify it worked
  → Open the restored file and check it looks correct

Step 4: Try again with more care
/sodam-agentic-plan
  → Make a more careful plan
  → Or ask Claude Code to do smaller steps
```

---

### Scenario 5: Complex Workflow (Harness + Loop + Agentic Together)

**Situation:** You want to refactor all files in a project folder, safely, with a plan.

```
Step 1: Verify all three siblings are running
/sodam-harness-status    ← Safety net active?
/sodam-agentic-start     ← Planning assistant ready?

Step 2: Create a refactoring plan
/sodam-agentic-plan
  → "Refactor all .js files in ./src/ to use modern ES6 syntax"
  → Review the plan — approve it

Step 3: Start a loop for batch processing
/sodam-loop-start
  → Task: "Apply ES6 refactoring to one .js file at a time from ./src/"
  → Iterations: 8
  → Batch approval: yes

Step 4: Monitor the loop
/sodam-loop-status
  → Check progress periodically

Step 5: After loop completes (8 files done)
/sodam-agentic-review
  → Get summary of all changes in plain language

Step 6: Run the next batch
/sodam-loop-start again for the next 8 files

Step 7: If any file was badly changed
/sodam-harness-undo
  → Restore just that specific file

Step 8: Repeat until all files are processed
```

---

## Chapter 9: Deep Dive — How It Works (Optional)

You do not need to read this chapter to use SoDam. It is for curious people who want to understand what is happening under the hood.

### What is a Claude Code "Hook"? (Plain Explanation)

A hook is a small program that runs automatically at a specific moment — like a speed bump on a road. When Claude Code reaches a certain "intersection" (e.g., "about to delete a file"), the hook runs automatically and can say:
- "Stop! Let me check this first"
- "OK, all clear — proceed"
- "No! This is blocked."

SoDam uses two types of hooks:

**PreToolUse hook** — runs BEFORE Claude Code executes a tool
- SoDamHarness uses this to check every command before it runs
- SoDamAgentic uses this to check if a session is active

**Stop hook** — runs when a Claude Code session ends
- SoDamLoop uses this to decide whether to start the next iteration

### What Order Do Things Run In?

When Claude Code tries to do something:

```
1. You give Claude Code an instruction
   ↓
2. Claude Code decides which tool to use (e.g., "delete file")
   ↓
3. PreToolUse hooks run (all registered hooks run in order):
   ↓
   a. SoDamHarness guard.mjs checks: "Is this dangerous?"
      → If dangerous: asks user / blocks
      → If safe: returns {} (empty — meaning "proceed")
   b. SoDamAgentic checks: "Is there an active session?"
      → If no session: returns {} immediately (passthrough — does nothing)
      → If session active: may add planning steps
   ↓
4. If all hooks return {} or "allow" → the tool runs
   ↓
5. Stop hook runs when session ends
   → SoDamLoop checks: "Should I start another iteration?"
```

### Do Inactive Plugins Interfere?

No — this is an important design feature.

If SoDamAgentic is installed but no active session exists (you have not run `/sodam-agentic-start`), the plugin returns `{}` immediately. This is called **"passthrough"** — it passes through without doing anything.

This means you can have all 6 siblings installed but only the ones you are actively using will affect your workflow.

### What is "Batch Approval"?

When SoDamLoop asks "Allow safe file writes without asking each time?" and you say yes, it stores `batch_approved: true` in the loop's state file:

```json
{
  "session_id": "loop-2026062914-abc123",
  "iteration": 3,
  "max_iterations": 8,
  "batch_approved": true,
  "start_time": "2026-06-29T14:00:00Z"
}
```

When the Harness hook sees an action from a Loop session with `batch_approved: true`, it skips asking for safe operations.

The **R-5 rule** overrides batch approval: dangerous commands (deletes, force operations) and self-protection operations ALWAYS prompt or deny, regardless of batch approval status. Safety is never bypassed.

---

## Chapter 10: Security & Data Flow

### Where is My Data Stored?

All SoDam data is stored **locally on your computer only**. Nothing is sent to external servers by SoDam plugins.

| Data type | Location |
|-----------|---------|
| Harness backups | `~/.sodamharness/backups/` |
| Harness logs | `~/.sodamharness/logs/` |
| Loop state files | `~/.sodam-loop/state-{id}.json` |
| Loop run logs | `~/.sodam-loop/runs/YYYY-MM-DD.jsonl` |
| Agentic sessions | `~/.sodamagentic/session-*.json` |
| Plugin files | `~/.claude/plugins/` |

### Is Any Data Sent Externally?

| Action | Data sent externally? |
|--------|-----------------------|
| SoDam plugin running | ❌ No — 100% local |
| Backup creation | ❌ No — local only |
| Hook execution | ❌ No — local only |
| Command output | ❌ No — local only |
| Claude Code AI requests | ✅ Yes — your messages go to Anthropic servers |

**Important distinction:** SoDam plugins are local tools. Claude Code itself communicates with Anthropic's servers (that is what makes the AI work). SoDam does not touch or intercept this communication — it only runs before or after Claude Code's tool executions.

### Are Passwords and Tokens Safe?

Yes, with these built-in protections:

- **T1 rule:** SoDamContext never displays secret key values. If it finds a secret, it shows only: `sk-ant-api03-…REDACTED`
- **Harness blocks:** Operations that would send secrets to external URLs via `curl` or similar tools
- **No collection:** SoDam does not read, store, or transmit your API keys or passwords

### How Safe Are Backups?

**Atomic write process:** When Harness creates a backup:
1. The backup is written to a temporary file first
2. Only when the backup is 100% complete does it replace the placeholder
3. This means you never end up with a partially-written backup

**Manifest integrity:** A `manifest.json` file tracks every backup:
```json
{
  "backups": [
    {
      "original": "CLAUDE.md",
      "backup": "CLAUDE.md_20260629_143022.backup",
      "timestamp": "2026-06-29T14:30:22Z",
      "size_bytes": 2048,
      "hash": "sha256:abc123..."
    }
  ]
}
```

The hash (fingerprint) lets Harness verify a backup file was not corrupted or tampered with.

### What is `.gitignore`? (Why Backup Files Won't Go to the Internet)

Git (a popular code management system) has a file called `.gitignore` that tells it which files NOT to upload when you share your code online (e.g., to GitHub).

SoDamHarness automatically adds backup folders to `.gitignore` so your backup files never accidentally get uploaded. This protects your privacy (backups may contain sensitive file contents).

What gets excluded from git:
```
# Added by SoDamHarness
~/.sodamharness/
.sodamharness_backup/
*.sodam.backup
```

### Data Folder Locations

| Sibling | Data folder | Contains |
|---------|-------------|---------|
| SoDamHarness | `~/.sodamharness/` | Backups, manifest.json, logs |
| SoDamLoop | `~/.sodam-loop/` | State files, run logs |
| SoDamAgentic | `~/.sodamagentic/` | Session files |

### The "Fail-Closed" Principle

If SoDamHarness encounters an unexpected error while checking an operation, it **blocks** the operation rather than allowing it.

In plain English: "When in doubt, stop — don't proceed."

The alternative (fail-open) would mean: "If something goes wrong with the safety check, just let the action through anyway." That would be dangerous. SoDam always chooses safety over convenience.

---

## Chapter 11: Understanding the Architecture

### How the 6 Siblings Relate to Each Other

```
┌──────────────────────────────────────────────────────────────┐
│                    L3: USER LAYER                            │
│          ✍️ SoDamPrompt      🔍 SoDamReverse                 │
│     (AI prompt templates)  (external code analysis)         │
├──────────────────────────────────────────────────────────────┤
│                 L2: APPLICATION LAYER                        │
│         🔁 SoDamLoop        🧭 SoDamAgentic                  │
│     (task automation)     (plan-first workflow)             │
├──────────────────────────────────────────────────────────────┤
│                   L1: MIDDLE LAYER                           │
│                    📄 SoDamContext                           │
│             (AI instruction file health-check)              │
├──────────────────────────────────────────────────────────────┤
│                  L0: FOUNDATION LAYER                        │
│                    🛡️ SoDamHarness                           │
│        (safety gate · backup · undo — base for all)         │
└──────────────────────────────────────────────────────────────┘
                  ↑ All siblings depend on this
```

### Why Split Into Multiple Tools?

Each sibling does exactly one job. This follows a software design principle called "separation of concerns."

Benefits:
- **Install only what you need:** You do not have to install all 6 if you only want the safety guard
- **Easier updates:** If SoDamLoop has a bug fix, only SoDamLoop needs updating
- **No conflicts:** Each sibling owns its own data folder and does not touch the others' data
- **Clearer mental model:** You always know which tool is responsible for which behavior

### Don't the Siblings Conflict?

They are designed not to. The core rule is: **"One job per sibling. No duplication."**

Examples of how conflicts are prevented:
- Only Harness manages the central safety gate
- Only Context diagnoses CLAUDE.md content
- Only Loop manages scheduling and repetition
- SoDamAgentic calls `isHarnessAlive()` before acting — it cooperates with Harness rather than competing
- SoDamAgentic has passthrough mode: if no active session exists, it returns `{}` immediately and does nothing

If there is ever a priority conflict: **Harness (L0) takes priority** over everything else. Safety is always first.

### One-Way Dependency Principle (In Plain Words)

Siblings can "look down" for help but never "look up."

```
Harness (L0) knows nothing about Context, Loop, or Agentic
Context (L1) knows about Harness (checks if it is running)
Loop (L2)    knows about Harness (delegates safety checks)
Agentic (L2) knows about Harness (calls isHarnessAlive())
Prompt & Reverse (L3) know about Harness (use its safety rules)
```

Higher-level siblings use lower-level ones. Lower siblings never use higher ones. This prevents circular dependencies where A needs B which needs A — a deadlock situation.

### Shared Library

All 6 siblings share one common detection library:

```
SoDam_Family/shared/family-detect.mjs
```

This file provides:
- `isFamilyAlive('harness')` — checks if Harness plugin is installed and active
- `isFamilyAlive('context')` — checks if Context is available
- Used by higher-level siblings before deciding how to behave

---

## Chapter 12: Complete File & Document Location List

### Plugin Installation Locations

| Operating System | Plugins folder |
|-----------------|---------------|
| Windows | `C:\Users\YourName\.claude\plugins\` |
| Mac | `~/.claude/plugins/` |
| Linux | `~/.claude/plugins/` |

### Individual Plugin Folders

```
~/.claude/plugins/
├── sodam-harness/          ← SoDamHarness plugin folder
│   ├── plugin.json         ← Plugin description (required)
│   └── hooks/
│       └── guard.mjs       ← The safety hook (core file)
├── sodam-context/          ← SoDamContext plugin folder
│   ├── plugin.json
│   └── commands/
├── sodam-loop/             ← SoDamLoop plugin folder
│   ├── plugin.json
│   └── hooks/
├── sodam-agentic/          ← SoDamAgentic plugin folder
│   ├── plugin.json
│   └── commands/
└── sodam-reverse/          ← SoDamReverse (advanced users)
    └── plugin.json

~/.claude/skills/           ← SoDamPrompt (different format)
├── book-report-helper/
│   └── SKILL.md
└── polite-message/
    └── SKILL.md
```

### Backup Locations

| What | Location |
|------|---------|
| Harness backups | `~/.sodamharness/backups/` |
| Backup manifest | `~/.sodamharness/backups/manifest.json` |
| Backup filename format | `filename_YYYYMMDD_HHMMSS.backup` |

### Run History Locations

| What | Location |
|------|---------|
| Loop state (active run) | `~/.sodam-loop/state-{session-id}.json` |
| Loop run log (daily) | `~/.sodam-loop/runs/YYYY-MM-DD.jsonl` |
| Agentic session | `~/.sodamagentic/session-{id}.json` |
| Harness action log | `~/.sodamharness/logs/actions.log` |

### Configuration File Locations

| What | Location |
|------|---------|
| Claude Code settings | `~/.claude/settings.json` |
| Plugin list (auto-scanned) | `~/.claude/plugins/` |
| Skills list (auto-scanned) | `~/.claude/skills/` |

### GitHub Repository List

| Sibling | Repository URL |
|---------|--------------|
| SoDamHarness | `https://github.com/sodam-ai/SoDam-Harness-Eng` |
| SoDamContext | `https://github.com/sodam-ai/SoDam-Context-Eng` |
| SoDamLoop | `https://github.com/sodam-ai/SoDam-Loop-Eng` |
| SoDamAgentic | `https://github.com/sodam-ai/SoDam-Agentic-Eng` |
| SoDamPrompt | `https://github.com/sodam-ai/SoDam-Prompt-Eng` |
| SoDamReverse | `https://github.com/sodam-ai/SoDam-Reverse-Eng` |

### Location of These Documents

| Document | Location |
|----------|---------|
| English README (short intro) | `SoDam_Family/README.en.md` |
| English Guide (this file) | `SoDam_Family/GUIDE.en.md` |
| Korean Guide | `SoDam_Family/GUIDE.ko.md` |
| Family Map (architecture) | `SoDam_Family/SODAM_FAMILY_MAP.md` |
| Risk Register | `SoDam_Family/SODAM_FAMILY_RISKS.md` |
| Bundle Definition | `SoDam_Family/marketplace.json` |

---

## Chapter 13: Complete Troubleshooting Guide

### Problem 1: Commands Don't Appear After Restarting Claude Code

**Symptom:** You type `/sodam-harness-status` and get "Unknown command" or nothing.

**Solution checklist:**

| Check | How to verify | Fix |
|-------|--------------|-----|
| Did you fully close Claude Code? | Make sure no Claude Code window is open | Close completely, wait 5 seconds, reopen |
| Is plugin.json present? | Check if `~/.claude/plugins/sodam-harness/plugin.json` exists | Re-copy the plugin files (Chapter 4) |
| Is the folder name correct? | Folder must be exactly `sodam-harness` (lowercase, hyphen) | Rename the folder if different |
| Is Node.js installed? | Run `node --version` in terminal | Install Node.js v18+ (Chapter 3) |

---

### Problem 2: "Node.js Not Found" Error

**Symptom:** You see "node: command not found" or "node is not recognized as the name of a cmdlet"

**Solution:**

1. Visit `https://nodejs.org`
2. Download the LTS version
3. Run the installer completely
4. **Restart your computer** — this is critical and many people skip it
5. Open a brand new terminal window (the old one won't see the new installation)
6. Type `node --version` — should show `v18.x.x` or higher

**Windows PATH fix (if restart alone doesn't work):**
1. Press Windows key, search "Environment Variables"
2. Click "Edit the system environment variables"
3. Click the "Environment Variables" button
4. In the "Path" section, check that `C:\Program Files\nodejs\` is present
5. If not, add it, click OK, then restart your terminal

---

### Problem 3: Error During Plugin Installation

**Common errors and fixes:**

| Error message | Cause | Fix |
|--------------|-------|-----|
| "Access denied" | Need administrator permissions | Run PowerShell as Administrator (right-click → Run as administrator) |
| "The system cannot find the path" | Wrong path in the copy command | Double-check the exact path you typed |
| "File already exists" | Old version already installed | This is OK — the `/Y` flag in the command overwrites safely |
| "Cannot read from the source" | Downloaded file is incomplete | Re-download the ZIP file |

---

### Problem 4: Suddenly Stops While Running a Command

**Symptom:** A SoDam command was running and then stopped mid-way with no clear output.

**Diagnosis:**
1. Run `/sodam-harness-status` — does it respond?
2. Run `/sodam-harness-fix` — can it auto-repair?
3. Check if Node.js is still working: type `node --version` in a terminal

**Most common cause:** A timeout or memory issue. Restart Claude Code and try the command again.

---

### Problem 5: Backup Not Created

**Symptom:** You used `/sodam-harness-undo` but no backups were listed.

**Reasons a backup might not exist:**

| Reason | Explanation |
|--------|-------------|
| Harness was not running | Backups only happen when Harness is active |
| File was deleted directly | Harness only backs up files modified through Claude Code |
| Backup folder missing | Run `/sodam-harness-fix` to recreate |

**Prevention:** Always run `/sodam-harness-status` at the start of each session to confirm Harness is active before doing any significant work.

---

### Problem 6: Undo (Restore) Not Working

**Symptom:** You ran `/sodam-harness-undo` but the file was not restored correctly.

**Diagnosis steps:**
1. Check if the backup file exists: look in `~/.sodamharness/backups/`
2. Check the manifest: is the file listed in `manifest.json`?
3. Check disk space: is there enough space to write the restored file?

**Manual restore (if the command fails):**
1. Navigate to `~/.sodamharness/backups/` in File Explorer (Windows) or Finder (Mac)
2. Find the backup file — it has a timestamp in its name
3. Copy it to the original location manually
4. Remove the `.backup` extension from the filename

---

### Problem 7: Loop Repeating Infinitely

**Symptom:** `/sodam-loop-start` ran and it seems to be looping without stopping.

**Immediate action:**
1. Type `/sodam-loop-cancel` and press Enter
2. If that does not work: close Claude Code completely (Ctrl+C or click X)

**Why did this happen?**
- Oscillation detection should have stopped the loop after 3 identical results
- If it did not, there may be a bug — please report it on GitHub

**Important:** Loop has a hard maximum of 8 iterations and 30 minutes. It cannot run longer than these limits by design. If it seems infinite, it will stop automatically within 30 minutes.

---

### Problem 8: Too Many Blocks (Even Normal Operations Blocked)

**Symptom:** Harness is blocking operations that seem completely safe.

**Understanding why:** Harness is conservative by design. It would rather ask too often than miss something dangerous.

**Solutions:**

- **Option A:** Simply approve each action by typing "yes" when asked
- **Option B:** Use `/sodam-harness-trust` to tell Harness that certain patterns are safe for your workflow
- **Option C:** Check if there is a misconfiguration — run `/sodam-harness-status` and look at "Protected operations"

---

### Problem 9: Still Being Asked After Batch Approval

**Symptom:** You set batch approval in SoDamLoop, but Harness is still asking for some actions.

**Explanation:** This is correct behavior. The R-5 rule means:
- Dangerous operations (deletes, force commands) → ALWAYS ask, even with batch approval
- Self-protection operations → ALWAYS deny, even with batch approval
- Normal file writes → batch approval applies (no asking)

If you are being asked about what you consider a safe operation, you can add it to the trust list with `/sodam-harness-trust`.

---

### Problem 10: Both Harness and Loop Showing Alerts at Same Time

**Symptom:** You see safety messages from both plugins simultaneously.

**Explanation:** Harness and Loop are separate systems with separate checking. Loop's maker/checker reviews content quality; Harness reviews the safety of operations. Both can trigger on the same action.

**Which one to follow?** Always follow Harness first (it is the safety layer). Then follow Loop's guidance about content quality.

---

### Problem 11: Want to Remove a Plugin

**To uninstall a plugin:**

Windows:
```powershell
Remove-Item -Recurse -Force "$env:USERPROFILE\.claude\plugins\sodam-harness"
```

Mac/Linux:
```bash
rm -rf ~/.claude/plugins/sodam-harness
```

Then restart Claude Code. The plugin will no longer load.

⚠️ If you remove SoDamHarness while other siblings are installed, the other siblings may lose some functionality (they detect Harness using `isHarnessAlive()`).

---

### Problem 12: Want to Reset Settings

**To reset a plugin to its default state:**

1. Remove the data folder for that plugin:
   - Harness: delete `~/.sodamharness/`
   - Loop: delete `~/.sodam-loop/`
   - Agentic: delete `~/.sodamagentic/`
2. Run the plugin's install command again: `/sodam-harness-install`

⚠️ Deleting the Harness data folder deletes all backups. Make sure you do not need them before doing this.

---

### Problem 13: Backup Folder Getting Too Large

**Symptom:** The `~/.sodamharness/backups/` folder is using too much disk space.

Old backup files are safe to delete manually.

**Windows — delete backups older than 30 days:**
```powershell
Get-ChildItem "$env:USERPROFILE\.sodamharness\backups\" |
Where-Object { $_.LastWriteTime -lt (Get-Date).AddDays(-30) } |
Remove-Item
```

**Mac/Linux — delete backups older than 30 days:**
```bash
find ~/.sodamharness/backups/ -name "*.backup" -mtime +30 -delete
```

💡 Tip: Keep at least 7 days of backups as a safety margin.

---

### Problem 14: Windows vs Mac Path Differences

**Common confusion:** Paths look different on Windows vs Mac/Linux.

| Thing | Windows | Mac/Linux |
|-------|---------|-----------|
| Home folder | `C:\Users\YourName\` | `~/` or `/home/yourname/` |
| Plugin folder | `C:\Users\YourName\.claude\plugins\` | `~/.claude/plugins/` |
| Backup folder | `C:\Users\YourName\.sodamharness\backups\` | `~/.sodamharness/backups/` |
| Path separator | `\` (backslash) | `/` (forward slash) |

**Windows PowerShell shorthand:**
```powershell
# These two mean the same thing in PowerShell:
$env:USERPROFILE\.claude\plugins\
~\.claude\plugins\
```

**Korean username issue:** If your Windows username contains Korean characters (e.g., `C:\Users\홍길동`), some Node.js scripts may fail. Use the English version of your username path, or create a Windows account with an English username.

---

### Problem 15: Not Working After Claude Code Update

**Symptom:** SoDam was working, then Claude Code updated, and now something is broken.

**Steps:**

1. Check if the plugin folder still exists:
   ```
   ~/.claude/plugins/sodam-harness/plugin.json
   ```
2. Restart Claude Code fully (sometimes an update just needs a fresh start)
3. Run `/sodam-harness-install` again
4. If the plugin API changed (Anthropic updated Claude Code's plugin system):
   - Check the SoDam GitHub pages for a compatibility update
   - Download and reinstall the new version

---

### Problem 16: "Permission Denied" on Mac

**Symptom:** Getting "Permission denied" when copying plugin files.

**Fix:**
```bash
# Add execute permission to the hook file
chmod +x ~/.claude/plugins/sodam-harness/hooks/guard.mjs

# Or set permissions for the entire plugin folder
chmod -R u+rx ~/.claude/plugins/sodam-harness/
```

---

### Problem 17: Loop Stops at 1 Iteration Instead of Running 8

**Symptom:** You set 8 iterations but Loop stops after just 1.

**Causes:**
- Oscillation detected immediately (Checker AI found the same result as the Maker)
- An error occurred in the first iteration
- The task was completed in 1 iteration (nothing left to do)

**Check:**
```
/sodam-loop-status
```
Look at "Stop reason" — it will explain why the loop ended early.

---

### Problem 18: SoDamContext Shows "Checkup Failed"

**Symptom:** `/sodam-context-checkup` returns an error about failing to read CLAUDE.md.

**Common reasons:**
- CLAUDE.md does not exist yet (you have not created one)
- CLAUDE.md is in a different location than expected
- File permissions prevent reading

**Fix for missing CLAUDE.md:**
```bash
# Create a minimal CLAUDE.md in your project folder
echo "# My Project Rules" > CLAUDE.md
echo "Be helpful and safe." >> CLAUDE.md
```

---

### Problem 19: Agentic Says "Harness Not Detected"

**Symptom:** `/sodam-agentic-start` warns that Harness is not found.

**What it means:** SoDamAgentic checked `isHarnessAlive()` and Harness was not found.

**Fix:**
1. Verify Harness is installed: check `~/.claude/plugins/sodam-harness/plugin.json` exists
2. Restart Claude Code
3. Run `/sodam-harness-status` — if it responds, Harness is active
4. Try `/sodam-agentic-start` again

---

### Problem 20: Backup Folder Disappeared

**Symptom:** `~/.sodamharness/backups/` folder is gone and you needed a backup.

**If the backup is gone:** Backups that were in a deleted folder cannot be recovered.

**Immediate steps:**
1. Run `/sodam-harness-install` to recreate the backup folder
2. Future backups will work again from this point

**Prevention for next time:**
- Do not delete `~/.sodamharness/` unless you specifically want to reset
- Keep copies of truly critical files in cloud storage (Google Drive, iCloud, OneDrive) as an additional safety layer

---

### Problem 21: Claude Code Skips the Agentic Plan Step

**Symptom:** You expected `/sodam-agentic-plan` to run, but Claude Code started working without creating a plan.

**Explanation:** This is a known limitation of Phase 1. The plan/review commands give guidance but do not technically enforce a hard stop in all scenarios.

**Workaround:** Remind Claude Code explicitly before giving any task:
```
"Before you start any work, please run /sodam-agentic-plan and show me the plan for approval."
```

---

## Chapter 14: FAQ — Frequently Asked Questions

**Q1. Does installing SoDam Family make Claude Code slower?**

A. Very slightly. The PreToolUse hook adds a small check before each Claude Code tool action. This is typically less than 1 second and most users do not notice it in everyday use.

---

**Q2. Can I install just one sibling, not all 6?**

A. Yes! SoDamHarness alone is very valuable. You do not need all 6. Install only what you need:
- Just safety → Harness only
- Safety + automation → Harness + Loop
- Everything available → install all 4 active siblings in order

---

**Q3. Can I install all siblings at once?**

A. Yes, but follow the installation order: Harness → Loop → Context → Agentic → Prompt → Reverse. Then restart Claude Code once.

---

**Q4. Will SoDamContext break my existing CLAUDE.md?**

A. No. SoDamContext always shows a preview of changes before applying anything. Lines containing safety keywords are never deleted, even if they look like duplicates. You can always say "no" at the preview step and no changes will be made.

---

**Q5. Is it safe to install on a work computer?**

A. SoDam Family is 100% local — no company data leaves your computer. However, your company's IT policy may restrict installing third-party tools. Check with your IT department first.

---

**Q6. Can I use SoDam Family offline?**

A. After the initial download, SoDam plugins work completely offline. Note: Claude Code itself needs an internet connection to communicate with Anthropic's AI servers. SoDam plugins do not need internet.

---

**Q7. What happens if I accidentally press "Allow" on a dangerous action?**

A. If you approved a dangerous action and it ran, check for a backup:
- Run `/sodam-harness-undo` to see available backups
- If a backup exists, restore it

This is exactly why the backup system exists.

---

**Q8. Does SoDam work with all Claude Code versions?**

A. SoDam is designed to work with the current Claude Code plugin/hook system. After a major Claude Code update, check the SoDam GitHub repositories for any needed compatibility updates.

---

**Q9. SoDam messages appeared in Korean — is that wrong?**

A. SoDam Family was originally designed for Korean speakers. Some messages may appear in Korean. English versions of all messages are being added. Common Korean messages you might see:
- `작업을 진행할까요?` = "Should we proceed with this action?"
- `위험한 작업입니다` = "This is a dangerous action"
- `백업이 생성됐습니다` = "Backup has been created"

---

**Q10. Can I use SoDam Family with other Claude Code plugins?**

A. Yes. SoDam is designed to work alongside other plugins. The passthrough design means SoDam only activates when relevant — it does not interfere with other plugins' work.

---

**Q11. How do I know when there is a new version of SoDam?**

A. Check the GitHub releases page for each sibling:
- `https://github.com/sodam-ai/SoDam-Harness-Eng/releases`
- Automatic update notifications are planned for a future version

---

**Q12. How do I update SoDam to a new version?**

A. Download the new version from GitHub, then:
1. (Optional) Back up your current plugin folder
2. Copy new files over the old ones:
   ```powershell
   xcopy /E /I /Y "SoDam-Harness-Eng-NEW" "$env:USERPROFILE\.claude\plugins\sodam-harness"
   ```
3. Restart Claude Code
4. Run `/sodam-harness-install` again to apply new settings

---

**Q13. What if SoDam Family itself has a bug that causes damage?**

A. While every effort is made to prevent this, no software is bug-free. Always maintain your own backups of critical files in addition to SoDam's backups. SoDam is provided "AS IS" without warranty — see Chapter 15 for the full legal notice.

---

**Q14. Does SoDam see my code and AI conversations?**

A. SoDam hooks receive information about what Claude Code is about to do (the tool name and parameters). They do not read the full content of your AI conversations. When checking for secrets, SoDamContext only checks your CLAUDE.md file, not your chat history.

---

**Q15. Can SoDam protect against the AI generating harmful content in the conversation?**

A. No. SoDam protects against dangerous *actions* (file deletion, code execution, etc.) but does not filter the AI's generated text responses. Content safety is Anthropic's responsibility, not SoDam's.

---

**Q16. I enabled batch approval but regret it — how do I turn it off?**

A. Use `/sodam-loop-cancel` to stop the current loop. When you start a new loop with `/sodam-loop-start`, answer "no" to the batch approval question.

---

**Q17. Can SoDam protect against AI generating code with security vulnerabilities?**

A. No. SoDam blocks dangerous *operations* but does not analyze the quality or security of the code that Claude Code generates. For code security review, use separate security scanning tools.

---

**Q18. Can SoDam work in team/shared projects?**

A. SoDam installs to each user's personal `~/.claude/` folder. It is per-user, not per-project. Each team member installs SoDam independently. All data (backups, logs) stays on the individual user's computer.

---

**Q19. What are `~` and `$env:USERPROFILE` in the commands?**

A. These are shortcuts for your home folder:
- `~` (Mac/Linux) → shortcut for `/home/yourname/` or `/Users/yourname/`
- `$env:USERPROFILE` (Windows PowerShell) → shortcut for `C:\Users\YourName\`

They refer to the same concept — your personal folder where your documents and settings live.

---

**Q20. I deleted a file directly in File Explorer (not through Claude Code). Can SoDam restore it?**

A. No. SoDam can only restore files that were modified or deleted through Claude Code while SoDamHarness was active. Direct file system operations (File Explorer, Finder, terminal commands outside Claude Code) bypass Claude Code entirely, so SoDam never sees them.

---

**Q21. Is SoDamAgentic's plan mandatory? Can Claude Code skip it?**

A. The plan step is strongly recommended but not technically enforced in every scenario (known limitation). If Claude Code skips the plan, type: "Please use /sodam-agentic-plan before starting." Phase 2 will improve this enforcement.

---

**Q22. Does SoDamLoop guarantee all 8 iterations will complete?**

A. No. Loop stops early if: oscillation is detected (same result 3 times), an error occurs, the 30-minute limit is reached, you cancel it, or all items are processed before iteration 8. Early stopping is intentional — it is safer than running blindly.

---

**Q23. Can I run SoDamLoop and SoDamAgentic at the same time?**

A. Yes. They work independently. Agentic manages planning; Loop manages repetition. Both can be active simultaneously without conflict.

---

**Q24. Where do I report a bug or request a feature?**

A. Each sibling has its own GitHub Issues page:
- Harness: `https://github.com/sodam-ai/SoDam-Harness-Eng/issues`
- Loop: `https://github.com/sodam-ai/SoDam-Loop-Eng/issues`
- Agentic: `https://github.com/sodam-ai/SoDam-Agentic-Eng/issues`
- Context: `https://github.com/sodam-ai/SoDam-Context-Eng/issues`

---

**Q25. If I use SoDam in my commercial product, do I have to open-source my product?**

A. No. Apache-2.0 is NOT a "copyleft" license (unlike GPL). You can use SoDam in a commercial closed-source product without open-sourcing your own code. You only need to: include the original LICENSE file, include NOTICE if it exists, and state any modifications to SoDam's files. See Chapter 15 for full details.

---

**Q26. Can I modify SoDam's code?**

A. Yes! Apache-2.0 allows modification. Requirements: state that you modified the files, keep the original copyright notice, include the Apache-2.0 license in your distribution.

---

**Q27. SoDamPrompt and SoDamReverse say "Coming Soon" — when exactly?**

A. There is no announced release date. SoDamPrompt is code-complete at v0.1.0 (10 SKILL.md skills). SoDamReverse is at v0.1.0 with Phase 1-2 live-tested. Remaining work is human live-testing, beta, and legal review. Follow the GitHub repositories for announcements.

---

## Chapter 15: Legal / Copyright / License / Commercial Use

### License Summary

All 6 SoDam siblings are released under the **Apache License, Version 2.0**.

The full license text is included in each sibling's repository as a `LICENSE` file. A copy is also available online at:
`https://www.apache.org/licenses/LICENSE-2.0`

### Copyright Notice

```
Copyright 2026 SoDam AI Studio
```

This notice must be retained in all copies and distributions.

---

### What You ARE Permitted To Do

| Permission | Details |
|------------|---------|
| ✅ Personal use | Use SoDam for personal projects, learning, hobby work — no conditions |
| ✅ Commercial use | Include SoDam in commercial products and services (conditions apply — see below) |
| ✅ Modification | Change SoDam's source code (must state what you changed) |
| ✅ Distribution | Share SoDam with others (must include the license) |
| ✅ Patent use | Use any patents held by SoDam AI Studio contributors that cover SoDam |
| ✅ Private use | Use and modify SoDam privately without disclosing |
| ✅ Sublicensing | Grant sublicenses to others (subject to Apache-2.0 terms) |

---

### Required Conditions for Commercial Use or Redistribution

> ⚠️ These conditions are MANDATORY. Failing to comply is a license violation.

**Condition 1: Include the original LICENSE file**

Your distribution (app, ZIP, npm package, repository, etc.) must include the original `LICENSE` file from SoDam exactly as it appears. Do not modify the LICENSE file.

**Condition 2: Include the NOTICE file (if one exists)**

If a `NOTICE` file exists in the original SoDam repository, you must include it in your distribution. The NOTICE file contains attribution information about copyright holders and contributors.

**Condition 3: State any modifications you made**

If you modified any SoDam source files, each modified file must include a prominent statement, for example:

```
# This file has been modified from the original SoDam Family source.
# Original: Copyright 2026 SoDam AI Studio (Apache-2.0)
# Modifications by: [Your Name/Company], [Date of modification]
```

**Condition 4: Retain all copyright notices**

Do not remove the `Copyright 2026 SoDam AI Studio` notice from any file that contains it.

---

### What You Are PROHIBITED From Doing

| Prohibition | Explanation |
|-------------|-------------|
| ❌ Trademark misuse | You may NOT use "SoDam AI Studio" as if it endorses or is affiliated with your product |
| ❌ Warranty claims | You may NOT claim SoDam developers warrant or guarantee this software |
| ❌ Liability transfer | You may NOT hold SoDam AI Studio liable for damages from using this software |

**Trademark clarification:**

- ❌ NOT allowed: "Powered by SoDam AI Studio — the official partner" (implies endorsement)
- ❌ NOT allowed: "SoDam AI Studio certified" or "Recommended by SoDam AI Studio"
- ✅ Allowed: "This product uses SoDamHarness (Apache-2.0, Copyright 2026 SoDam AI Studio)" — factual attribution
- ✅ Allowed: "Built with components from SoDam Family" — factual statement of fact

---

### ⚠️ WARRANTY DISCLAIMER — CRITICAL LEGAL NOTICE

```
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT.

IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

(Apache License 2.0, Sections 7 and 8)
```

**In plain English:**

- SoDam is provided as-is, with no promises about what it will or will not do
- If using SoDam results in data loss, damage to your computer, loss of business, or any other harm — the developers of SoDam are not legally responsible
- You use SoDam entirely at your own risk
- For critical data and systems, maintain independent backups regardless of SoDam

---

### "Claude" Trademark Notice

> **"Claude" is a trademark of Anthropic PBC.**

SoDam Family is NOT made by Anthropic and is NOT an Anthropic product. SoDam Family is an independent third-party plugin for Claude Code.

- Claude Code is made and owned by Anthropic PBC
- Anthropic's Terms of Service govern your use of Claude Code
- Review Anthropic's policies at: `https://www.anthropic.com/policies`
- SoDam AI Studio has no affiliation with or endorsement from Anthropic PBC

---

### "Codex" Notice

If SoDam documentation or code references "Codex":
- Codex is a product associated with Microsoft and/or OpenAI
- Codex usage is subject to Microsoft's and OpenAI's respective Terms of Service
- SoDam AI Studio is not affiliated with Microsoft or OpenAI

---

### Commercial Use Checklist

Before using SoDam in a commercial product, verify all of the following:

- [ ] **Credit in README or About page:** Include "SoDam Family (Apache-2.0, Copyright 2026 SoDam AI Studio)"
- [ ] **LICENSE file included:** The full `LICENSE` file is in your distribution
- [ ] **NOTICE file included:** Include `NOTICE` file if it exists in the original
- [ ] **Copyright notice intact:** "Copyright 2026 SoDam AI Studio" not removed from any file
- [ ] **Modifications documented:** Any modified files include a "modified from original" statement
- [ ] **No endorsement claims:** You do not claim SoDam AI Studio endorses your product
- [ ] **Anthropic policies reviewed separately:** Claude Code / Anthropic Terms of Service reviewed independently

---

### Patent Grant and Termination

Apache-2.0 includes an automatic contributor patent license:
- Contributors who hold patents covering SoDam automatically grant you a royalty-free patent license to use SoDam
- **Termination condition:** If you initiate a patent lawsuit claiming that SoDam (or any contribution in SoDam's repository) infringes your patents, your patent license under Apache-2.0 terminates automatically on the date you filed the lawsuit

---

### Legal Counsel Recommendation

For large-scale commercial deployments, white-labeling SoDam, or any use case where legal liability is a significant concern:

1. **Consult a qualified attorney** — this guide is informational, not legal advice
2. **Review Anthropic's commercial use policies separately** — independent of SoDam's license
3. **Check for patent encumbrances** in your specific jurisdiction
4. **Document your compliance** with the four conditions above

---

## Appendix A: Glossary

Simple definitions for every technical term used in this guide.

**API (Application Programming Interface)**
A way for two programs to communicate with each other. Like a menu at a restaurant — you order from the menu, and the kitchen prepares it. When Claude Code talks to Anthropic's AI, it uses an API.

**API key**
A secret code used to prove your identity when using an API. Like a hotel key card that only works for your room. Never share API keys publicly — treat them like passwords.

**Atomic write**
A file-writing method where the file is either completely written or not written at all — no in-between. Like making a full copy of a document before editing the original, so there is always a complete safe copy.

**Backup**
A copy of a file saved at a specific point in time. If the original gets damaged or deleted, you can restore it from the backup.

**Batch approval**
Giving permission for a whole group of similar safe actions at once, instead of approving each one individually. Used in SoDamLoop to speed up repetitive tasks.

**`CLAUDE.md`**
A special file that gives Claude Code instructions — like a rulebook. Claude Code reads this file automatically before every conversation session.

**Command (slash command)**
An instruction starting with `/` that you type in Claude Code. The slash tells Claude Code "this is a command, not a regular chat message."

**Dependency**
When one thing needs another thing to work. Like how a car needs an engine. SoDamLoop depends on SoDamHarness being installed.

**ESM / ES Module**
A modern format for JavaScript code. Files ending in `.mjs` use this format. SoDam uses `.mjs` files for its hook code.

**`git`**
A popular system for tracking changes to code over time. Like a detailed "undo history" for your entire project.

**`git push --force`**
A dangerous git command that overwrites the shared code history on a remote server. Can destroy teammates' work permanently. SoDamHarness blocks this by default.

**GitHub**
A website where code is stored and shared. Free to use for public projects. SoDam's code is on GitHub.

**Hash / Checksum**
A unique fingerprint calculated from a file's contents. If even one character in the file changes, the hash changes completely. Used to verify that backup files have not been corrupted.

**Hook**
A small program that runs automatically at a specific moment (before or after another action). SoDam uses hooks to intercept Claude Code's actions before they execute.

**`isHarnessAlive()`**
A function in the SoDam shared library that checks whether SoDamHarness is installed and running. Used by other siblings before deciding how to behave.

**JSON**
A simple text format for storing structured data. Example: `{"name": "Alice", "age": 30}`. Many SoDam configuration files use JSON format.

**L0 / L1 / L2 / L3**
The layer system for SoDam siblings: L0 = Foundation (Harness), L1 = Middle (Context), L2 = Application (Loop, Agentic), L3 = User (Prompt, Reverse).

**Maker-Checker pattern**
A design where one system (Maker) does the work and a separate, independent system (Checker) reviews it. SoDamLoop uses this for quality control in automated tasks.

**`manifest.json`**
A tracking file that records what backups exist, when they were made, and their checksums for integrity verification.

**`.mjs` file**
A JavaScript file using the modern ES Module format. SoDam's hook files use this format.

**Node.js**
A program that runs JavaScript code outside of a web browser. SoDam plugins are written in JavaScript and need Node.js to run.

**Oscillation**
When a loop keeps producing the same result over and over with no real progress. SoDamLoop detects and stops oscillation automatically after 3 identical consecutive results.

**Passthrough**
When a plugin receives a signal but does nothing and passes control along without interference. SoDamAgentic uses passthrough when no active session exists, returning `{}` immediately.

**Path**
The location of a file or folder on your computer. Example: `C:\Users\Alice\Documents\myfile.txt` (Windows) or `~/Documents/myfile.txt` (Mac/Linux).

**Plugin**
An add-on program that extends the features of another program. SoDam siblings are plugins for Claude Code.

**PowerShell**
A command-line tool built into Windows, used for typing and running system commands.

**PreToolUse hook**
A hook that runs BEFORE Claude Code executes a tool. SoDamHarness uses this to check commands before they run.

**R-5 rule**
SoDamLoop's safety rule: dangerous commands and self-protection operations always ask for confirmation or are denied, regardless of batch approval settings.

**`README.md`**
A file that introduces and explains a software project. Usually the first thing people read when they encounter a project.

**`rm -rf`**
A Linux/Mac terminal command that permanently deletes files and folders without asking for confirmation. Extremely dangerous. SoDamHarness blocks this.

**Self-test**
Automatic checks that a program runs on itself to verify it is working correctly. SoDamHarness runs 72 self-tests during the install process.

**Semver (Semantic Versioning)**
A standard for version numbers in the format MAJOR.MINOR.PATCH. Example: `0.1.0` means major version 0, minor version 1, patch 0.

**`SKILL.md`**
A file format used by Claude Code for defining reusable instruction templates (skills). SoDamPrompt uses this format.

**State file**
A file that records the current status of a running process so it can be monitored or resumed. SoDamLoop saves state files for each active loop.

**T1 rule**
SoDamContext's security rule: never display the actual value of a secret key — only show a masked version like `sk-ant-…REDACTED`.

**T8 rule**
SoDamContext's safety rule: never delete lines containing safety-critical keywords (like "never", "always", "must", "secret", "forbidden"), even if they appear to be duplicate lines.

**Terminal (Command Line)**
A text-based interface for typing commands directly to your computer. Also called: Terminal (Mac/Linux), PowerShell (Windows), Command Prompt (Windows).

**`~` (tilde)**
A shortcut symbol meaning "your home folder." On Mac/Linux, `~` = `/Users/YourName/`. In PowerShell, `~` = `C:\Users\YourName\`.

**Timestamp**
A record of exactly when something happened. SoDam uses timestamps in backup filenames: `filename_20260629_143022.backup` means June 29, 2026 at 14:30:22.

---

## Appendix B: Version History

### Currently Released

| Plugin | Version | Phase | Self-test | Status |
|--------|---------|-------|-----------|--------|
| 🛡️ SoDamHarness | v0.1.0 | Phase 1 complete | 72/72 PASS | ✅ Released |
| 🔁 SoDamLoop | v0.1.0-phase1a | Phase 1a complete | 17/17 PASS | ✅ Released — batch approval (SP2) live |
| 🧭 SoDamAgentic | v0.1.0 | init-mvp | 22/22 PASS | ✅ Released — F4 bulk-delete safety active |

### In Development

| Plugin | Version | Phase | Status |
|--------|---------|-------|--------|
| 📄 SoDamContext | v0.1.0 | Phase 1 | 🔄 AI implementation complete; awaiting human e2e testing + beta |
| ✍️ SoDamPrompt | v0.1.0 | Code complete | ✅ 10 SKILL.md skills shipped (web-app plan dropped); live auto-match unverified |
| 🔍 SoDamReverse | v0.1.0 | Phase 1-2 live | ✅ Phase 1 + Android live-tested; layer-2 over-blocking & legal review remain |

### Family Bundle

| Bundle | Version | Contents |
|--------|---------|---------|
| SoDam Family Bundle | v0.1.0 | 3 active plugins (Harness, Loop, Agentic) + Context (AI-complete) + 2 planned |

### Key Milestones

| Date | Event |
|------|-------|
| 2026-06-25 | SoDamContext initial development |
| 2026-06-26 | SoDamAgentic MVP completed |
| 2026-06-27 | SoDamLoop Phase 1a completed |
| 2026-06-28 | SoDamPrompt and SoDamReverse PRDs completed |
| 2026-06-29 | SoDam Family 6-sibling architecture documented; SODAM_FAMILY_MAP updated to 6 siblings |

### Version Compatibility Policy

| Version bump type | Meaning | Action required |
|------------------|---------|----------------|
| PATCH (0.0.x) | Bug fix only | Update any sibling independently |
| MINOR (0.x.0) | New feature, backward compatible | Update only the specific sibling |
| MAJOR (x.0.0) | Breaking change | All siblings must be compatibility-verified; update marketplace.json simultaneously |

**Shared constant changes** (safe-keywords, secret-patterns in rules/) are treated as MINOR or higher and must be synchronized across all siblings that use them.

---

*Apache-2.0 © 2026 SoDam AI Studio*

*This guide is provided for reference purposes. For the most up-to-date information, always check the individual sibling repositories on GitHub.*

*"Claude" is a trademark of Anthropic PBC. SoDam Family is an independent third-party project and is not affiliated with, endorsed by, or sponsored by Anthropic PBC.*
