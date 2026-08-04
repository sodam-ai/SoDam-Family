# SoDam Family 🏡

> A bundle of Claude Code plugins that helps complete beginners use AI safely and easily

[![License: Apache-2.0](https://img.shields.io/badge/License-Apache--2.0-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/Version-0.1.0-green.svg)](marketplace.json)
[![Language](https://img.shields.io/badge/Language-English-red.svg)]()
[![Platform](https://img.shields.io/badge/Platform-Claude%20Code-purple.svg)]()

---

## Table of Contents

1. [Introduction — What is SoDam Family?](#1-introduction--what-is-sodam-family-)
2. [Seven Siblings at a Glance](#2-seven-siblings-at-a-glance-)
3. [Prerequisites & Required Programs](#3-prerequisites--required-programs-)
4. [How to Download](#4-how-to-download-)
5. [Installation Guide](#5-installation-guide-)
6. [Quick Start](#6-quick-start-)
7. [How to Run](#7-how-to-run-)
8. [How to Use](#8-how-to-use-)
9. [How It Works — Security & Data Flow](#9-how-it-works--security--data-flow-)
10. [Complete Command List](#10-complete-command-list-)
11. [Workflow — Everyday Usage Scenarios](#11-workflow--everyday-usage-scenarios-)
12. [Architecture — How Everything Connects](#12-architecture--how-everything-connects-)
13. [File & Document Locations](#13-file--document-locations-)
14. [Troubleshooting](#14-troubleshooting-)
15. [FAQ — Frequently Asked Questions](#15-faq--frequently-asked-questions-)
16. [Legal / Copyright / License / Commercial Use](#16-legal--copyright--license--commercial-use-)

---

## 1. Introduction — What is SoDam Family? 🤔

**SoDam Family** is a bundle of **seven plugins** that make **Claude Code** safer and easier to use — especially for people who have never touched AI tools, computers, or coding before.

> **Plain English explanations (read these first!)**
>
> - **AI**: A computer program that can answer questions, write text, and help with tasks. Think of it as a very smart assistant that lives inside your computer.
> - **Claude Code**: A tool made by a company called Anthropic. It lets you talk to their AI called "Claude" right inside your computer's terminal (the black or white text window where you type commands).
> - **Plugin**: Just like apps on a smartphone add new features, a plugin adds new features to an existing program. SoDam Family plugins add new safety features to Claude Code.
> - **Terminal**: The text window on your computer where you type commands. It looks old-fashioned but it is very powerful. You will only need to type a few simple things — don't worry!

### Why does SoDam Family exist?

When you use an AI tool like Claude Code, a few risks can come up:

1. **AI can do dangerous things by accident** — It might delete your files, overwrite important documents, or make big changes without asking you first.
2. **AI instruction files get messy over time** — The file that tells Claude how to behave (called `CLAUDE.md`) slowly fills up with old rules, contradictions, and clutter.
3. **Repeating the same task is boring and slow** — If you want Claude Code to do the same thing 20 times, you have to type the command 20 times.
4. **AI sometimes acts before thinking** — It should plan what it will do, show you the plan, get your approval, and then act. Without help, it often just dives straight in.
5. **Writing good AI instructions is hard** — Most people don't know how to write effective prompts (instructions for AI).

SoDam Family solves all five of these problems with seven specialized tools that work together.

---

## 2. Seven Siblings at a Glance 👨‍👩‍👧‍👦

| Name | Nickname | What It Does | Required? |
|------|----------|--------------|-----------|
| 🛡️ **SoDamHarness** | Safety Gate | Blocks dangerous commands, creates backups before risky operations, and lets you undo mistakes | **REQUIRED — Install this first** |
| 📄 **SoDamContext** | AI Manual Doctor | Diagnoses and fixes your AI instruction file (`CLAUDE.md`) when it gets bloated or broken | Optional |
| 🔁 **SoDamLoop** | Auto-Repeater | Automatically repeats the same AI task multiple times so you don't have to type it over and over | Optional |
| 🧭 **SoDamAgentic** | Plan Helper | Teaches Claude Code to plan before acting, and explains what it changed in plain everyday language | Optional |
| ✍️ **SoDamPrompt** | Prompt Tool | Gives you 10 ready-made AI instruction templates — just fill in the blanks and you're done | Optional |
| 🔍 **SoDamReverse** | RE Defense | Prevents Claude Code from helping anyone reverse-engineer (take apart and copy) other apps or software | Optional |
| 🗺️ **SoDamGraph** | Family Map | Reads the other six siblings (read-only) and shows you where each one currently stands | Optional |

> ⚠️ **Always install SoDamHarness before the other siblings.** The other six depend on Harness's safety layer to work properly — except SoDamGraph, which is a read-only observer and doesn't depend on any sibling.

### Current Status

| Plugin | Status | Verified |
|--------|--------|---------|
| 🛡️ SoDamHarness | ✅ Live & Working | 72 self-tests PASS |
| 🔁 SoDamLoop | ✅ Live & Working | 80 self-tests PASS (65 unit + 15 integration) |
| 🧭 SoDamAgentic | ✅ Live & Working | 44 self-tests PASS |
| 📄 SoDamContext | 🔜 Coming Soon | Design complete, code in development |
| ✍️ SoDamPrompt | ✅ v0.1.0 | 10 Korean writing skills (no-code SKILL.md); 2026-06 web-app plan dropped |
| 🔍 SoDamReverse | 🔜 Coming Soon | Design complete, code in development |
| 🗺️ SoDamGraph | ✅ Phase 1 in progress | M0 + M2 milestones complete (added 2026-08-04) |

---

## 3. Prerequisites & Required Programs 📋

Before you install SoDam Family, you need two free programs on your computer.

### What You Need

| Program | Minimum Version | How to Check | Where to Get It |
|---------|----------------|--------------|-----------------|
| **Node.js** | v18 or higher | Type `node --version` in your terminal | [nodejs.org](https://nodejs.org) — click the "LTS" button |
| **Claude Code** | Latest version | Type `claude --version` in your terminal | [claude.ai/code](https://claude.ai/code) |
| **Internet connection** | Any speed | — | Only needed during first-time installation |

> 💡 **What is a "terminal"?**
>
> A terminal is the text-based window on your computer where you type commands directly. It might look intimidating, but you only need to type a few simple things.
>
> - **Windows**: Press the `Windows` key on your keyboard, type `PowerShell` or `cmd`, then press Enter
> - **Mac**: Press `Command (⌘) + Space`, type `Terminal`, press Enter
> - **Inside Claude Code**: Claude Code also has a built-in terminal you can use

### How to Install Node.js — Step by Step for First-Timers

Node.js is a free program that runs JavaScript code on your computer. SoDam Family needs it to work. Here is exactly how to install it:

1. Open your web browser (Chrome, Safari, Edge, Firefox — any of them)
2. Go to **[nodejs.org](https://nodejs.org)** in the address bar at the top
3. You will see a webpage with two large download buttons. Click the one that says **"LTS"** — that stands for "Long Term Support" and means it is the most stable version
4. A file will start downloading. On Windows, it ends in `.msi`. On Mac, it ends in `.pkg`
5. Open your Downloads folder and double-click that file
6. A setup window will appear. Click **"Next"** through all the steps. The default settings are fine — you do not need to change anything
7. Click **"Install"** and wait about 1–2 minutes for it to finish
8. After it says "Installation complete," click **"Finish"**
9. Now open your terminal (see the tip above for how to do this)
10. Type exactly this: `node --version` and press Enter
11. You should see something like `v20.11.0` or `v18.19.0` — any number that starts with 18 or higher means ✅ success!

> ⚠️ **If you see an error message**: Close the terminal window, open a new one, and try step 10 again. Sometimes the terminal needs to restart before it "sees" the new program.

---

## 4. How to Download 📥

Each SoDam sibling is stored on GitHub — a website where developers share code with the world. You download each one separately.

> 💡 **What is GitHub?** GitHub is like a cloud storage service (similar to Google Drive or Dropbox), but specifically for sharing code. You don't need an account to download files from it.

### Method 1: Download as a ZIP File (Recommended for Beginners ⭐)

This is the easiest method. No special knowledge needed.

1. Open your web browser and go to one of the GitHub links in the table below
2. Look for a green button near the top-right of the page that says **`< > Code`** — click it
3. A small dropdown menu will appear. Click **`Download ZIP`**
4. A ZIP file (a compressed file — like a folder packed into one file) will download to your computer, usually to your `Downloads` folder
5. Find the ZIP file, right-click it, and select:
   - **Windows**: "Extract All…" or "Extract Here"
   - **Mac**: Just double-click the ZIP — it will expand automatically
6. You now have a regular folder with all the plugin files inside

| Sibling | GitHub Link |
|---------|-------------|
| 🛡️ SoDamHarness | `https://github.com/sodam-ai/SoDam-Harness-Eng` |
| 📄 SoDamContext | `https://github.com/sodam-ai/SoDam-Context-Eng` |
| 🔁 SoDamLoop | `https://github.com/sodam-ai/SoDam-Loop-Eng` |
| 🧭 SoDamAgentic | `https://github.com/sodam-ai/SoDam-Agentic-Eng` |
| ✍️ SoDamPrompt | `https://github.com/sodam-ai/SoDam-Prompt-Eng` |
| 🔍 SoDamReverse | `https://github.com/sodam-ai/SoDam-Reverse-Eng` |

### Method 2: git clone (For Those Who Know How to Use a Terminal)

If you already have a program called `git` installed, you can use this shortcut. Type this in your terminal:

```bash
git clone https://github.com/sodam-ai/SoDam-Harness-Eng
```

> 💡 **What is git?** Git is a program that programmers use to download and manage code. If you have never heard of it, just use Method 1 above — it does exactly the same thing, just more simply.

---

## 5. Installation Guide 🔧

> ⚠️ **Follow this order exactly**: Harness first, then the others
>
> You do **not** need to install all six. Harness is the only required one. Add the others if you want those specific features.

### Step 1: Install SoDamHarness (REQUIRED)

Harness is the foundation. Always install it first.

**On Windows — open PowerShell and type:**

```powershell
xcopy /E /I "SoDam-Harness-Eng" "%USERPROFILE%\.claude\plugins\sodam-harness"
```

> 💡 If the `SoDam-Harness-Eng` folder is in a different location (like your Downloads folder), replace it with the full path. For example:
> ```powershell
> xcopy /E /I "C:\Users\YourName\Downloads\SoDam-Harness-Eng" "%USERPROFILE%\.claude\plugins\sodam-harness"
> ```

**On Mac or Linux — open Terminal and type:**

```bash
cp -r SoDam-Harness-Eng ~/.claude/plugins/sodam-harness
```

### Step 2: Completely Close and Restart Claude Code

This step is critical. Claude Code only loads plugins when it starts up. If you skip this step, the commands will not appear.

```
1. Click the X button to close Claude Code completely
2. Wait 5 seconds
3. Open Claude Code again
```

> ⚠️ Just minimizing the window or switching to another app is NOT enough. You must fully close and reopen Claude Code.

### Step 3: Confirm the Installation Worked

In Claude Code, type this command and press Enter:

```
/sodam-harness-install
```

Then type:

```
/sodam-harness-status
```

✅ If you see a status message appear, the installation worked! You are now protected.

### Step 4: Install Optional Siblings (Your Choice)

Use the same copy-and-paste approach for each one you want.

**SoDamLoop (Auto-Repeater):**

```powershell
# Windows
xcopy /E /I "SoDam-Loop-Eng" "%USERPROFILE%\.claude\plugins\sodam-loop"
```

```bash
# Mac/Linux
cp -r SoDam-Loop-Eng ~/.claude/plugins/sodam-loop
```

**SoDamContext (AI Manual Doctor — Coming Soon):**

```powershell
# Windows
xcopy /E /I "SoDam-Context-Eng" "%USERPROFILE%\.claude\plugins\sodam-context"
```

```bash
# Mac/Linux
cp -r SoDam-Context-Eng ~/.claude/plugins/sodam-context
```

**SoDamAgentic (Plan Helper):**

```powershell
# Windows
xcopy /E /I "SoDam-Agentic-Eng" "%USERPROFILE%\.claude\plugins\sodam-agentic"
```

```bash
# Mac/Linux
cp -r SoDam-Agentic-Eng ~/.claude/plugins/sodam-agentic
```

**SoDamPrompt (Prompt Tool — uses a different method):**

```powershell
# Windows — copies into the skills folder, not the plugins folder
xcopy /E /I "SoDam-Prompt-Eng\skills" "%USERPROFILE%\.claude\skills\"
```

```bash
# Mac/Linux
cp -r SoDam-Prompt-Eng/skills ~/.claude/skills/
```

> 💡 After installing each plugin, always **fully restart Claude Code** before using it. This is required every time.

### Recommended Installation Order

| Step | Plugin | Why |
|------|--------|-----|
| 1 | Harness | Safety first — install this before anything |
| 2 | Run `/sodam-harness-install` | Activates Harness and runs self-tests |
| 3 | Loop | If you want to automate repetitive tasks |
| 4 | Agentic | If you want structured plan-first workflows |
| 5 | Context, Prompt, Reverse | When they become available |

---

## 6. Quick Start 🚀

Once you have installed SoDamHarness, open Claude Code and try these three commands. Each one takes less than a minute.

### Your First Three Commands

**Command 1 — Confirm Harness is protecting you:**

```
/sodam-harness-status
```

You should see a message showing the safety gate is active. This means every future command Claude Code runs will be checked first.

**Command 2 — Check your AI instruction file:**

```
/sodam-context-checkup
```

This looks at your `CLAUDE.md` file (the file that tells Claude how to behave for you personally). If you don't have one yet, this command will offer to help you create one.

**Command 3 — Try the guided planning workflow:**

```
/sodam-agentic-start
```

This walks you through a simple example of the plan-first approach. Great for getting a feel for how SoDam Family works.

### Your Goal in the First 30 Minutes

```
✅ Node.js installed
✅ Claude Code installed
✅ SoDamHarness installed and running
✅ /sodam-harness-status shows "active"
✅ You typed your first Claude Code command
```

If you reach all five checkboxes, you have successfully set up your AI safety net. Give yourself a pat on the back! 🎉

---

## 7. How to Run ▶️

### Starting SoDam Family

SoDam Family does not have a separate app icon or launch button. It activates **automatically** every time Claude Code starts, as long as the plugins are in the correct folder.

```
Open Claude Code
  ↓
SoDam Family loads automatically in the background
  ↓
Type /sodam-harness-status to confirm it's running
```

### Confirming It Is Running

```
/sodam-harness-status
```

If this command shows a status report → SoDam Family is active and protecting you. ✅

If this command does nothing or shows an error → Check the troubleshooting section below.

### Running Specific Features

| What You Want to Do | Command |
|--------------------|---------|
| Confirm Harness is active | `/sodam-harness-status` |
| See what AI has been doing | `/sodam-harness-log` |
| Undo the last change AI made | `/sodam-harness-undo` |
| Fix a problem automatically | `/sodam-harness-fix` |
| Start a repeating task | `/sodam-loop-start` |
| Check loop progress | `/sodam-loop-status` |
| Plan before acting | `/sodam-agentic-plan` |
| Review recent changes in plain words | `/sodam-agentic-review` |

---

## 8. How to Use 📖

This section explains each plugin in detail with step-by-step examples.

---

### 🛡️ SoDamHarness — Your Safety Gate

Think of Harness as a security guard standing between you and Claude Code. Every single command Claude wants to run passes through this guard first. The guard decides: is this safe? Is this risky? Is this dangerous?

**First-time setup:**

```
/sodam-harness-install
```

Run this once after installation. It sets up the safety system and runs 72 automated self-tests to make sure everything works correctly. After that, it stays on automatically.

**Check status at any time:**

```
/sodam-harness-status
```

Shows whether Harness is running and what it is currently protecting.

**When something goes wrong:**

```
/sodam-harness-fix
```

Harness will try to diagnose the problem and fix it automatically. This is usually the first thing to try when anything feels off.

**Undo the last change AI made:**

```
/sodam-harness-undo
```

Before any risky operation, Harness saves a copy of your file (called a "backup"). This command restores from that backup, putting things back the way they were. Very useful when AI changes something you didn't want changed.

**See exactly what AI has been doing:**

```
/sodam-harness-log
```

Shows a history of every operation Claude Code ran since you started the session. Great for understanding what happened when you weren't watching closely.

**Reduce repeated confirmation questions:**

```
/sodam-harness-trust
```

Sometimes Harness will ask "Are you sure?" many times in a row during a long session. This command tells it to ask less often for the rest of the current session only. It resets back to normal when you restart Claude Code.

**How Harness makes decisions:**

```
Dangerous command (e.g., delete entire folder, transfer files externally)?
  → BLOCK (deny) — The command never runs. Claude Code shows an error.

Risky but sometimes OK (e.g., overwrite an existing file)?
  → BACKUP FIRST + ASK — Harness saves a copy, then asks "Are you sure?"

Safe command (e.g., read a file, write a brand new file)?
  → ALLOW — Runs immediately with no interruption.
```

**Where are the backups stored?**

```
~/.sodamharness/backups/
```

Each backup is in a folder named by the exact date and time it was made. For example:
`~/.sodamharness/backups/2026-06-29-14-30-55/your-filename.txt`

---

### 🔁 SoDamLoop — Auto-Repeater

Loop lets you tell Claude Code "do this same task 5 times" and then walk away. It is perfect for processing a long list of items, translating many sentences, or generating many outputs in one go.

**Start a repeating task:**

```
/sodam-loop-start
```

After you type this, Claude Code will ask you a series of questions:
- What task do you want repeated?
- How many times?
- What are the inputs for each repetition?

Answer these questions and Loop will handle the rest.

**Check how far along the task is:**

```
/sodam-loop-status
```

Shows you how many repetitions are done, how many are left, and whether any had errors.

**Stop a running loop immediately:**

```
/sodam-loop-cancel
```

Stops the loop right where it is. Work done so far is kept.

**Undo everything the loop changed:**

```
/sodam-loop-undo
```

Reverses all changes made during the loop session. Like a "mass undo" for all loop operations.

**Get help if the loop breaks or gets stuck:**

```
/sodam-loop-repair
```

Walks you through a guided repair process step by step.

**Get general help:**

```
/sodam-loop-help
```

**Install or remove Loop:**

```
/sodam-loop-install
/sodam-loop-uninstall
```

> 💡 **Built-in safety limits you cannot override:**
> - **Maximum 8 repetitions per run** — Prevents accidental runaway loops
> - **30-minute time limit** — The loop stops automatically after 30 minutes regardless
> - **Oscillation detection** — If the same result appears 3 times in a row (meaning the loop is stuck in a circle), it stops itself automatically
> - **Batch approval option** — You can choose, at the start, to allow safe file writes automatically for the whole session so you don't have to click "yes" every time

---

### 🧭 SoDamAgentic — Plan Helper

Without Agentic, Claude Code sometimes jumps straight into making changes without thinking it through first. Agentic adds a mandatory pause: Claude must write out its plan, show it to you, and get your OK before touching anything.

**Start a guided session (best for first-timers):**

```
/sodam-agentic-start
```

This is the onboarding wizard. It walks you through the entire plan→act→review cycle step by step. Run this first if you have never used Agentic before.

**Create a plan for your task:**

```
/sodam-agentic-plan
```

Claude Code will write out exactly what it intends to do before it does anything:
- Step 1: I will do X
- Step 2: I will do Y
- Step 3: I will do Z

You can review this plan and say "yes, go ahead" or "no, change step 2." Claude only acts after you give the green light.

**Review what was just changed (in plain language):**

```
/sodam-agentic-review
```

After Claude finishes working, this command produces a plain-English summary of what changed. No technical jargon — it reads like a friendly explanation a non-programmer can understand.

**Check the current status of your session:**

```
/sodam-agentic-status
```

Shows whether a planning session is active and where you are in the workflow.

> ⚠️ **Known limitation in Phase 1**: The planning step has been confirmed to fire reliably in real use. What's still unconfirmed is the **review step** (the summary Claude shows after making changes) — sometimes it finishes and reports back in plain conversational language instead of the structured review format. It isn't yet clear whether the review skill didn't trigger at all, or triggered but got summarized loosely; this can only be settled by more real-world use. If you want an explicit structured review, just type `/sodam-agentic-review` manually.

**Built-in safety:** Agentic blocks commands that are clearly dangerous — for example, it will not allow Claude to delete your entire project folder, even if you ask it to.

---

### 📄 SoDamContext — AI Manual Doctor (Coming Soon 🔜)

> This plugin is currently in development. The design is complete and code development is pending. The features below are planned.

Your `CLAUDE.md` file (also called `AGENTS.md` in some setups) is the instruction manual that tells Claude how to behave for your specific project. Over weeks and months, this file tends to get:

- **Bloated** — too long, full of things you no longer need
- **Redundant** — same rule written three different ways
- **Outdated** — rules from old projects that no longer apply
- **Contradictory** — rules that conflict with each other
- **Vague** — rules so unclear that Claude ignores them
- **Disorganized** — no structure, hard to read

SoDamContext is a diagnostic and treatment tool for exactly these problems.

**Planned commands:**

| Command | What It Will Do |
|---------|----------------|
| `/sodam-context-intake` | Creates a new `CLAUDE.md` from scratch by asking you 5–6 simple questions. No coding required. |
| `/sodam-context-checkup` | Scans your existing `CLAUDE.md` and detects all 6 types of health problems listed above |
| `/sodam-context-treat` | Fixes the detected problems — but only after creating a backup and getting your explicit approval |

---

### ✍️ SoDamPrompt — Prompt Tool (Coming Soon 🔜)

> 10 skill files (no-code SKILL.md) are complete at v0.1.0. (The earlier Next.js web-app plan was dropped.)

Writing good AI instructions (called "prompts") is a skill that takes time to learn. SoDamPrompt skips the learning curve by giving you 10 templates where you just fill in the blanks.

SoDamPrompt is also the **entry point for the SoDam learning ladder** — the best place for an absolute beginner to start exploring AI tools.

**Planned prompt templates:**

| Template | What It Helps With |
|----------|-------------------|
| Book report helper | Helps you write a book report |
| Polite message writer | Writes formal or polite messages for you |
| Long text → 3-line summary | Takes a long article and shrinks it to 3 sentences |
| Explain this simply | Takes something complicated and explains it in easy words |
| Study planner | Creates a personalized study schedule |
| Self-introduction polisher | Takes a rough self-introduction and makes it sound great |
| SNS caption writer | Writes catchy captions for social media posts |
| Natural English fixer | Takes awkward English sentences and makes them sound natural |
| Presentation script writer | Writes a script for a speech or presentation |
| Request / apology message | Helps write a message asking for something or apologizing |

---

### 🔍 SoDamReverse — RE Defense (Coming Soon 🔜)

> Design is complete. Code development is pending.

Reverse engineering (abbreviated "RE") means taking apart an existing app or software to understand how it works, usually in order to copy it or break its security. This is often illegal and always unethical when done without permission.

SoDamReverse prevents Claude Code from helping with reverse engineering or cracking other people's apps.

**How the three-layer defense works:**

```
Layer 1 — AI refusal:
  Claude Code politely declines the request at the conversation level.

Layer 2 — Deny hook:
  Even if the AI somehow tries to help, Harness's deny rule blocks
  the underlying command from running.

Layer 3 — SHA-256 integrity check:
  A cryptographic fingerprint (think of it as a unique digital ID)
  verifies that the defense rules themselves have not been tampered with.
  (SHA-256 = a mathematical algorithm that creates a unique "fingerprint"
  for any piece of data. If even one character changes, the fingerprint
  changes completely. This makes tampering impossible to hide.)
```

**How it is installed:** SoDamReverse works by injecting blocking rules directly into Harness. There is no separate set of commands to run — once it is installed and Harness is running, the defense is always active.

---

## 9. How It Works — Security & Data Flow 🔒

Understanding how SoDam Family protects your computer helps you use it with confidence and know its real limits.

### Your Data Stays on Your Computer

| What | Details |
|------|---------|
| ✅ 100% local operation | SoDam Family never sends your files, code, or documents to any server. Everything runs on your machine. |
| ✅ Secret values are hidden | If Claude Code ever sees something that looks like a secret key (like `sk-ant-api03-...`), Harness displays it in logs as `sk-ant-...REDACTED` — never the real value. Passwords and tokens are never backed up, only flagged as suspicious. |
| ✅ No personal data collected | SoDam Family does not collect your name, email address, phone number, or any other personal information. |
| ✅ Automatic backups | Before any risky file operation, Harness saves a backup in a timestamped folder: `YYYY-MM-DD-HH-MM-SS`. So you always know exactly when the backup was made. |
| ✅ Atomic writes | When writing a file, SoDam tools first write to a temporary file, then rename it to replace the original. This means even if your power cuts out mid-write, the original file is never corrupted — the temporary file is discarded and the original survives untouched. |
| ❌ Not a complete guarantee | SoDam Family is a safety tool, not a magic shield. Unusual situations can still slip through. Always keep your own backups of truly important data. Use at your own risk. |

> 💡 **One important exception**: When you talk to Claude AI through Claude Code, those conversations travel to Anthropic's servers. That is how Claude AI works — SoDam Family cannot and does not change this. To understand how Anthropic handles your data, read their privacy policy at [anthropic.com/policies](https://www.anthropic.com/policies).

### Each Plugin Stays Isolated

Each SoDam plugin uses its own separate data folder and never mixes data with the others:

- Harness data lives in `~/.sodamharness/` — only Harness touches this
- Loop data lives in `~/.sodam-loop/` — only Loop touches this
- Agentic data lives in `~/.sodamagentic/` — only Agentic touches this

There is no cross-contamination between plugins.

### What Happens When You Type a Command

Every time you type anything in Claude Code, the SoDam hooks run in this exact order:

```
You type a command in Claude Code
          ↓
[1] Harness guard.mjs  →  Is this safe? (ALWAYS runs — top priority, cannot be skipped)
          ↓ (if Harness allows it)
[2] Loop safety-gate.mjs  →  Is a loop active? Any loop-specific rules to apply?
          (only runs when a loop session is active)
          ↓ (if Loop allows it)
[3] Agentic guard.mjs  →  Was there a plan? Did the user approve it?
          (only runs when an agentic session is active)
          ↓ (if Agentic allows it)
[4] Reverse defense rules  →  Is this a reverse engineering attempt?
          (injected into Harness rules — works automatically, no separate step)
          ↓ (if all checks pass)
     Command runs normally
```

This layered approach provides defence in depth: even if one plugin has a bug, the others are still protecting you.

---

## 10. Complete Command List 📌

### 🛡️ SoDamHarness — Safety Gate

| Command | What It Does |
|---------|-------------|
| `/sodam-harness-install` | First-time setup + runs 72 self-tests to verify everything works |
| `/sodam-harness-status` | Shows the current protection status (is Harness active? what is it doing?) |
| `/sodam-harness-fix` | Automatically diagnoses and attempts to fix problems |
| `/sodam-harness-undo` | Restores the file that was backed up before the last risky operation |
| `/sodam-harness-trust` | Reduces "Are you sure?" prompts for the current session only |
| `/sodam-harness-log` | Shows a log of every action Claude Code has taken |

### 📄 SoDamContext — AI Manual Doctor (Coming Soon)

| Command | What It Will Do |
|---------|----------------|
| `/sodam-context-intake` | Creates a new `CLAUDE.md` by answering 5–6 simple questions |
| `/sodam-context-checkup` | Scans `CLAUDE.md` for 6 types of health problems |
| `/sodam-context-treat` | Fixes problems safely, after backup and your approval |

### 🔁 SoDamLoop — Auto-Repeater

| Command | What It Does |
|---------|-------------|
| `/sodam-loop-start` | Starts a new repetition task |
| `/sodam-loop-status` | Shows current progress (how many done, how many left) |
| `/sodam-loop-cancel` | Stops the loop immediately, keeping work done so far |
| `/sodam-loop-undo` | Reverses all changes made during the loop session |
| `/sodam-loop-repair` | Guides you through fixing a broken or stuck loop |
| `/sodam-loop-help` | Shows help and documentation for Loop |
| `/sodam-loop-install` | Installs the Loop plugin |
| `/sodam-loop-uninstall` | Removes the Loop plugin cleanly |

### 🧭 SoDamAgentic — Plan Helper

| Command | What It Does |
|---------|-------------|
| `/sodam-agentic-start` | Starts the guided onboarding — best for first-time users |
| `/sodam-agentic-plan` | Forces Claude Code to write a plan before acting |
| `/sodam-agentic-review` | Explains what was just changed, in plain everyday English |
| `/sodam-agentic-status` | Shows whether a planning session is active and where you are in it |

### ✍️ SoDamPrompt — Prompt Tool (Coming Soon)

| Command | What It Will Do |
|---------|----------------|
| `/book-report-helper` | Helps you write a book report |
| `/polite-message` | Writes a formal or polite message |
| `/long-text-summary` | Summarizes a long text into 3 sentences |
| `/explain-simply` | Explains something complex in simple terms |
| `/study-planner` | Creates a study schedule |
| `/polish-introduction` | Polishes a self-introduction |
| `/sns-caption` | Writes a social media caption |
| `/natural-english` | Makes English sound more natural |
| `/presentation-script` | Writes a presentation or speech script |
| `/request-apology` | Writes a request or apology message |

---

## 11. Workflow — Everyday Usage Scenarios 📅

Here are real examples of how you might use SoDam Family day to day.

---

### Scenario A: Setting Up for the First Time (30 minutes total)

```
[ ] 1. Install Node.js from nodejs.org (click the LTS button)
[ ] 2. Install Claude Code from claude.ai/code
[ ] 3. Download SoDam-Harness-Eng as a ZIP from GitHub
[ ] 4. Unzip it and copy the folder to ~/.claude/plugins/sodam-harness
[ ] 5. Completely close and reopen Claude Code
[ ] 6. Type: /sodam-harness-install
[ ] 7. Type: /sodam-harness-status  ← should show green status ✅
[ ] 8. Done! You are now protected.
```

---

### Scenario B: Using AI to Help You Write Something

You want to use Claude Code to help you write an email, essay, or report. SoDam Family works quietly in the background while you focus on your writing.

```
Open Claude Code
  ↓
Ask Claude: "Help me write a polite email to my professor
             asking for an extension on my assignment."
  ↓
Harness watches silently in the background
  ↓
Claude writes the email for you
  ↓
Harness had nothing to block (just reading/writing text — safe)
  ↓
You copy the email and send it
  ↓
Optional: /sodam-harness-log to see what Claude did during the session
```

---

### Scenario C: Repeating the Same Task Many Times

You have 15 product descriptions in English that you need translated into Spanish. Doing them one at a time would be tedious.

```
Type: /sodam-loop-start

Claude asks: "What task do you want to repeat?"
You say: "Translate this product description from English to Spanish."

Claude asks: "How many times?"
You say: "15"

Claude asks: "Please provide the 15 inputs."
You paste all 15 descriptions

Loop runs automatically:
  - Repetition 1/15 ... done
  - Repetition 2/15 ... done
  - ...
  - Repetition 8/15 ... (Loop pauses — max 8 per run for safety)
  - You approve continuing
  - ...
  - Repetition 15/15 ... done ✅

Check results: /sodam-loop-status
If something went wrong: /sodam-loop-undo
```

---

### Scenario D: Planning a Code Change Before Making It

You want Claude Code to add a new feature to your project. Before it touches anything, you want to see the plan.

```
Type: /sodam-agentic-plan

Claude Code writes:
  "Here is my plan:
   Step 1: Create a new file called settings.js
   Step 2: Add the configuration options you asked for
   Step 3: Update main.js to import the new settings
   Step 4: Test that the import works correctly"

You review the plan.
You say: "Looks good, but skip Step 4 — I'll test it myself."

Claude adjusts the plan and says "Confirmed. Shall I proceed?"
You say: "Yes."

Claude executes only the approved steps.

After it finishes, type: /sodam-agentic-review
Claude explains in plain English: "I created one new file and updated
one existing file. The new settings are now connected to the main app."
```

---

### Scenario E: Something Went Wrong — Undoing a Mistake

Claude made a change you didn't want. No need to panic.

```
Type: /sodam-harness-log
  ↓
Read the log to understand what happened:
  "14:32:05 — Modified: config.json (backup saved)"

Type: /sodam-harness-undo
  ↓
Harness restores config.json from the backup made at 14:32:05
  ↓
Type: /sodam-harness-status
  ↓
Confirm everything is back to normal ✅
```

---

## 12. Architecture — How Everything Connects 🏗️

### The Learning Ladder

SoDam Family is designed so beginners can start at the bottom and gradually learn more as they get comfortable. You do not need to use all six — start with what you need.

```
Level 6 (Advanced): Reverse  →  Defense against RE attempts
Level 5:            Agentic  →  Plan-first structured workflows
Level 4:            Harness  →  Safety protection (start here for safety)
Level 3:            Loop     →  Automate repetitive tasks
Level 2:            Context  →  Keep your AI instruction file healthy
Level 1 (Start):    Prompt   →  Learn to write effective AI instructions
```

> 💡 For complete beginners, the recommended starting path is:
> **Harness (for safety) → Prompt (to learn prompting) → Context (to keep things tidy)**

### Layer Structure

```
┌─────────────────────────────────────────────────────────────────┐
│                        ECOSYSTEM LAYER                          │
│      ✍️ Prompt (prompt templates)  |  🔍 Reverse (RE defense)   │
├─────────────────────────────────────────────────────────────────┤
│                        FUNCTION LAYER                           │
│     🔁 Loop (repeat tasks)  |  🧭 Agentic (plan-first mode)     │
├─────────────────────────────────────────────────────────────────┤
│                       FOUNDATION LAYER                          │
│      🛡️ Harness (safety gate)  |  📄 Context (AI manual)        │
└─────────────────────────────────────────────────────────────────┘
                              ↓
                         Claude Code
                              ↓
                    Claude AI (Anthropic servers)
```

### Hook Execution Order Inside Claude Code

When you run any command, these checks happen automatically in this exact order:

```
Step 1: Harness guard.mjs       → Runs ALWAYS. Cannot be skipped. Highest priority.
Step 2: Loop safety-gate.mjs    → Runs only when a loop session is active.
Step 3: Agentic guard.mjs       → Runs only when an agentic session is active.
Step 4: Reverse defense rules   → Injected into Harness rules. Always active once installed.
```

This design means: even if Loop or Agentic fail for any reason, Harness is still guarding you from the bottom level.

### GitHub Repositories

| Plugin | Repository | Visibility |
|--------|-----------|------------|
| 🛡️ SoDamHarness | sodam-ai/SoDam-Harness-Eng | Private |
| 🔁 SoDamLoop | sodam-ai/SoDam-Loop-Eng | Private |
| 🧭 SoDamAgentic | sodam-ai/SoDam-Agentic-Eng | Private |
| 📄 SoDamContext | sodam-ai/SoDam-Context-Eng | Private |
| ✍️ SoDamPrompt | sodam-ai/SoDam-Prompt-Eng | Private |
| 🔍 SoDamReverse | sodam-ai/SoDam-Reverse-Eng | Private |

---

## 13. File & Document Locations 📁

Here is a complete map of where SoDam Family keeps its files.

> 💡 **What does `~` mean?**
> The `~` symbol is a shorthand for your "home folder" — the main folder for your user account.
> - Windows: `C:\Users\YourName\`
> - Mac: `/Users/YourName/`
> - Linux: `/home/yourusername/`
>
> So `~/.sodamharness/` means `C:\Users\YourName\.sodamharness\` on Windows.

### Plugin Installation Folders

These are where you copy the plugin files during installation:

| Plugin | Folder |
|--------|--------|
| SoDamHarness | `~/.claude/plugins/sodam-harness/` |
| SoDamLoop | `~/.claude/plugins/sodam-loop/` |
| SoDamAgentic | `~/.claude/plugins/sodam-agentic/` |
| SoDamContext | `~/.claude/plugins/sodam-context/` |
| SoDamPrompt | `~/.claude/skills/` (skills folder, not plugins) |

### Data Folders (Created Automatically When You First Run a Plugin)

You do not need to create these. They appear on their own:

| What | Location |
|------|---------|
| Harness data & settings | `~/.sodamharness/` |
| Harness backups | `~/.sodamharness/backups/` |
| Loop data & settings | `~/.sodam-loop/` |
| Loop backups | `~/.sodam-loop/backups/` |
| Loop daily run logs | `~/.sodam-loop/runs/YYYY-MM-DD.jsonl` |
| Loop current state file | `~/.sodam-loop/state-LOOPID.json` |
| Agentic data & settings | `~/.sodamagentic/` |

> 💡 **About backup folders**: Each backup is saved in a folder named with the exact timestamp it was created:
> `~/.sodamharness/backups/2026-06-29-14-30-55/original-filename.txt`
>
> The folder name tells you: year-month-day-hour-minute-second.
> You can always find exactly which backup was made at which moment.

### Key Documents (In This Repository)

| File | What It Contains |
|------|-----------------|
| `README.md` | Korean version of this document |
| `README.en.md` | This file — English version |
| `marketplace.json` | Plugin marketplace configuration |
| `LICENSE` | Full Apache License 2.0 text |

---

## 14. Troubleshooting 🆘

Something not working? Work through this list from top to bottom.

| Symptom | What to Try |
|---------|-------------|
| Commands like `/sodam-harness-status` don't appear in Claude Code | **Most common fix**: Fully close Claude Code (not just minimize) and reopen it. Plugins only load at startup. |
| `node --version` gives an error or "command not found" | Re-install Node.js from [nodejs.org](https://nodejs.org) (LTS version). Then close and reopen your terminal and try again. |
| Harness is asking "Are you sure?" too often | Type `/sodam-harness-trust` to reduce prompts for the current session. |
| "Where are my backups?" | Look in `~/.sodamharness/backups/` — each backup is in a timestamped subfolder. |
| Undo is not working | Type `/sodam-harness-undo`. If it still fails, navigate to `~/.sodamharness/backups/` and manually copy the file you want back. |
| Loop stopped in the middle unexpectedly | Type `/sodam-loop-status` to see what happened, then `/sodam-loop-repair` for guided help. |
| Loop made changes I didn't want | Type `/sodam-loop-undo` to reverse all loop changes from that session. |
| Agentic's review summary is not showing after changes | This is a known Phase 1 limitation (the planning step itself works fine). Type `/sodam-agentic-review` manually to force the review step. |
| A plugin's commands are not showing after installation | Confirm: (1) Did you restart Claude Code fully? (2) Is the folder in the right location? Check `~/.claude/plugins/` to verify. |
| Something changed without asking me first | Type `/sodam-harness-log` to see what happened, then `/sodam-harness-undo` to restore the backup. |
| I copied the plugin to the wrong folder | Go to `~/.claude/plugins/`, delete the incorrectly-placed folder, and copy it again to the correct location. Then restart Claude Code. |
| Claude Code shows errors when starting up | Type `node --version` in your terminal to confirm Node.js v18 or higher is installed. |
| Backup folder is getting very large | Old backups do not expire. Delete backup folders from `~/.sodamharness/backups/` that you no longer need. Keep only recent ones. |

> 💡 **The two fixes that solve 90% of problems:**
> 1. Confirm that Node.js v18 or higher is installed (`node --version`)
> 2. Fully close Claude Code and reopen it
>
> Try these before anything else.

---

## 15. FAQ — Frequently Asked Questions ❓

---

**1. Is SoDam Family free?**

Yes, completely free. All six plugins are open source (meaning anyone can read and use the code) under the Apache 2.0 license. Personal use and commercial use are both allowed at no cost, subject to the license conditions described in Section 16.

---

**2. Are my files sent to any server or company?**

No. SoDam Family runs entirely on your own computer. Your files, documents, and code never leave your machine. The only exception is the conversations you have with Claude AI — those go through Anthropic's servers because that is how Claude works. SoDam Family does not change this behavior. See Anthropic's privacy policy at [anthropic.com/policies](https://www.anthropic.com/policies).

---

**3. What if I install it wrong? Will I break anything?**

Nothing catastrophic happens if you copy the files to the wrong folder. The commands just won't appear in Claude Code, and Claude Code will behave as if SoDam Family were not installed at all. Simply delete the folder, copy it to the correct location, restart Claude Code, and try again.

---

**4. Does SoDam Family work on Mac and Linux too?**

Yes. It works on Windows, Mac, and Linux. The installation commands differ slightly (PowerShell on Windows vs. bash/Terminal on Mac/Linux), but once installed, the plugin behavior is identical on all platforms.

---

**5. Can I install only Loop without installing Harness first?**

You can, but it is not recommended. Loop is designed to work on top of Harness's safety layer. Without Harness, Loop has no backup system if something goes wrong during a repetition task. Always install Harness first.

---

**6. What if the loop stops unexpectedly in the middle?**

Don't worry. Type `/sodam-loop-status` to see exactly where it stopped and why. Then type `/sodam-loop-repair` for step-by-step repair guidance. If you want to reverse all the changes the loop made up to that point, type `/sodam-loop-undo`.

---

**7. How long are backups kept? Do they expire automatically?**

Backups never expire automatically. They stay in `~/.sodamharness/backups/` and `~/.sodam-loop/backups/` until you manually delete them. This means backup folders can accumulate over time. Periodically check and delete old backup folders you no longer need.

---

**8. Can I install multiple SoDam plugins at the same time?**

Yes. They are designed to work together. Install Harness first (it's required), then install any of the others in any order. Each plugin is independent and does not interfere with the others.

---

**9. What exactly is Claude Code? I've never heard of it.**

Claude Code is the official command-line tool (CLI — a text-based program you run in a terminal) made by Anthropic to let you use Claude AI on your computer. It is especially powerful for programming and coding tasks, but you can use it for writing, research, translation, analysis, and more. Learn more at [claude.ai/code](https://claude.ai/code).

---

**10. Can AI change my files without asking me?**

Without SoDamHarness: Yes. When you ask Claude Code to edit files, it can read and write files on your computer.

With SoDamHarness installed: Harness intercepts risky write operations and asks "Are you sure?" before proceeding. It also creates a backup of the original file first. The most dangerous commands (like deleting an entire folder) are blocked completely, even if you type them yourself by accident.

---

**11. Do I need an internet connection to use SoDam Family?**

Internet is needed for two things only:
1. Downloading and installing the plugins (one-time setup)
2. Talking to Claude AI (every conversation travels through Anthropic's servers)

After setup, the SoDam plugins themselves (Harness, Loop, Agentic) run locally with no internet required. Their safety checks happen entirely on your machine.

---

**12. Can I use SoDam Family on my phone or tablet?**

No. SoDam Family requires Claude Code, which currently runs on desktop computers (Windows, Mac, Linux). There is no official phone or tablet version of Claude Code at the time of writing. If Anthropic releases a mobile version in the future, compatibility would need to be evaluated separately.

---

**13. I don't know English well. Can I still use this?**

The commands (like `/sodam-harness-status`) are English text strings, but you simply type them exactly as written — you do not need to understand what the words mean. Claude Code itself can respond in almost any language. Just ask it: "Please always reply in [your language]." The original SoDam Family was designed for Korean speakers, and a full Korean README (`README.md`) is included in this repository.

---

**14. How do I update SoDam Family when a new version is released?**

1. Download the new version from GitHub (same process as the first install)
2. Delete the old plugin folder from `~/.claude/plugins/sodam-harness/` (or whichever plugin you're updating)
3. Copy the new folder to the same location
4. Fully close and reopen Claude Code
5. Type `/sodam-harness-install` to confirm the update is working

Your data folders (`~/.sodamharness/`, `~/.sodam-loop/`, etc.) are separate from the plugin code. Updating the plugin does NOT delete your backups, logs, or settings.

---

**15. If I uninstall a plugin, are my personal files deleted?**

No. Uninstalling means deleting the plugin code from `~/.claude/plugins/sodam-harness/`. This removes the plugin features from Claude Code. But your personal data — backups in `~/.sodamharness/backups/`, logs in `~/.sodam-loop/runs/`, etc. — stays on your computer untouched. You can delete those data folders manually whenever you choose.

---

**16. What is the `~/.claude/` folder? Can I look inside it?**

Yes, you can look. It is the folder where Claude Code stores all its configuration, plugins, and skills. On Windows it is at `C:\Users\YourName\.claude\`. On Mac/Linux it is at `~/.claude/`. The dot (`.`) at the beginning of the folder name makes it a "hidden folder" on Mac and Linux — you may need to enable "show hidden files" in your file browser to see it. On Windows it is visible normally.

---

**17. Can I use SoDam Family with ChatGPT, Gemini, Copilot, or other AI tools?**

No. SoDam Family is specifically built for Claude Code and uses Claude Code's plugin system (hooks, skills, slash commands). It is incompatible with ChatGPT, Gemini, GitHub Copilot, Ollama, or any other AI tool. Each AI platform has its own separate plugin ecosystem.

---

**18. What should I do if I accidentally delete an important file?**

If SoDamHarness was running when the deletion happened, check `~/.sodamharness/backups/` immediately. If a backup exists, type `/sodam-harness-undo` or manually copy the backed-up file back to its original location.

If Harness was not running, or the file was deleted before you installed SoDam Family, Harness cannot help. This is a strong reminder to install and activate Harness before starting any AI-assisted work that touches your files.

---

**19. Is there a way to test that Harness is actually working before I rely on it?**

Yes. After installation, type `/sodam-harness-install` — this command runs 72 automated self-tests and shows you the results. All 72 should show PASS. If any fail, type `/sodam-harness-fix` to diagnose and repair.

---

**20. Can two people use SoDam Family on the same computer?**

Each user account on a computer has its own `~/.claude/` folder. If two different people log into the computer with different user accounts, they each need to install SoDam Family separately in their own account. The plugins do not automatically share between accounts.

---

## 16. Legal / Copyright / License / Commercial Use 📜

### License

All six SoDam Family plugins are released under the **Apache License, Version 2.0**.

```
Copyright 2026 SoDam AI Studio
```

The full license text is in the `LICENSE` file included in each plugin's repository. You can also read it at [apache.org/licenses/LICENSE-2.0](https://www.apache.org/licenses/LICENSE-2.0).

---

### What Is Permitted ✅

| Use Case | Status | Notes |
|----------|--------|-------|
| Personal use | ✅ Fully allowed | No conditions |
| Commercial use | ✅ Allowed | Must follow conditions below |
| Modifying the source code | ✅ Allowed | Must state what was changed |
| Distributing copies | ✅ Allowed | Must include license text |
| Using contributor patents | ✅ Automatically granted | Per Apache 2.0 terms |
| Private / internal use (not distributed) | ✅ Fully allowed | No conditions |

---

### What Is Required — Conditions ⚠️

If you redistribute SoDam Family (modified or unmodified) or include it in your own product, you **must**:

1. **Keep the original copyright notice** — Do not remove `Copyright 2026 SoDam AI Studio` from the code or documentation
2. **Include the Apache-2.0 license text** — Either include the full `LICENSE` file in your distribution, or provide a clearly visible link to it
3. **State your modifications** — If you changed any files from the original, clearly state: "This file was modified from the original by [your name or company]"

---

### What Is Prohibited ❌

| Action | Why It Is Prohibited |
|--------|---------------------|
| Using the "SoDam AI Studio" name or logo as if it were your own product or brand | Trademark protection — you cannot imply that SoDam AI Studio created or endorses your product |
| Claiming any warranty, guarantee, or endorsement | The software is provided AS IS — no promises of any kind |
| Holding authors legally liable for any damages | Apache 2.0 explicitly excludes liability for authors |

---

### ⚠️ NO WARRANTY — Important: Please Read

> **THIS SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.**
>
> This includes but is not limited to:
> - No warranty that the software will work correctly on your computer
> - No warranty of fitness for any particular purpose (that it does what you specifically need)
> - No warranty that it is free of errors or bugs
> - No warranty of merchantability (that it meets general commercial standards)
>
> **THE AUTHORS AND SODAM AI STUDIO ARE NOT LIABLE FOR ANY DAMAGES ARISING FROM USE OF THIS SOFTWARE**, including but not limited to:
> - Loss of data or files
> - Corruption of your system
> - Business losses or lost profits
> - Any indirect, incidental, special, or consequential damages
>
> **USE THIS SOFTWARE ENTIRELY AT YOUR OWN RISK.**
>
> Always maintain your own backups of important data. Do not rely on SoDam Family as your only protection.

---

### "Claude" and "Claude Code" Trademark Notice

> **"Claude" and "Claude Code" are trademarks of Anthropic PBC.**
>
> SoDam Family is an independent plugin project. It is **not** made by Anthropic and is **not** an official Anthropic product.
>
> Using Claude Code — and therefore SoDam Family as a Claude Code plugin — requires you to agree to Anthropic's Terms of Service and Privacy Policy.
>
> Please read these at: **[https://www.anthropic.com/policies](https://www.anthropic.com/policies)**
>
> SoDam AI Studio has no affiliation with Anthropic PBC.

---

### "GitHub Copilot / Codex" Notice

> **GitHub Copilot and Codex are services of Microsoft Corporation and OpenAI.**
>
> They are entirely separate from SoDam Family and Claude Code. If you use those services, you are subject to Microsoft's and OpenAI's respective terms of service. SoDam Family is incompatible with Copilot and Codex.

---

### Commercial Use Checklist

If you are using SoDam Family in a commercial product, service, or deployment, complete this checklist before launch:

- [ ] Added `SoDam Family (Apache-2.0)` attribution somewhere visible (README, About page, credits, or documentation)
- [ ] Kept the original `Copyright 2026 SoDam AI Studio` notice intact in all distributed files
- [ ] Clearly stated any modifications made to the original source files
- [ ] Included the full Apache-2.0 license text (or a clearly visible link to it) in your distribution
- [ ] Verified compliance with Anthropic's commercial API terms if using the Claude API commercially

---

### A Note on Legal Counsel

> 💡 **For large-scale commercial deployments, consulting a qualified attorney is strongly recommended.**
>
> Situations that particularly warrant legal advice:
> - Using the Claude API at commercial scale (check Anthropic's commercial terms separately and carefully)
> - Operating in jurisdictions with strict data privacy laws (GDPR in Europe, CCPA in California, PIPA in Korea, etc.)
> - Including SoDam Family in a product sold to regulated industries (finance, healthcare, legal, etc.)
> - Export control regulations if distributing software internationally
>
> SoDam AI Studio does not provide legal advice. This section is for informational purposes only.

---

## Get Help 💬

- **Korean README**: [README.md](README.md)
- **Bug Reports**: Open an issue on the relevant plugin's GitHub repository
- **First thing to try when stuck**: Type `/sodam-harness-fix` in Claude Code

---

> SoDam Family was built so that people with zero technical experience can use AI safely and confidently.
>
> Don't give up if something doesn't work right away! The most common fixes are:
> 1. Make sure Node.js is installed (`node --version` → should show v18 or higher)
> 2. Fully close and reopen Claude Code
>
> You've got this. Give it a try! 🎉

---

*Apache-2.0 © 2026 SoDam AI Studio. This software is provided for reference purposes. Results from using this software are the user's own responsibility.*
