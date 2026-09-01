# SoDam Family 🏡

> **New to AI? That's OK** — see at a glance what each of SoDam Family's seven siblings does

[![License: Apache-2.0](https://img.shields.io/badge/License-Apache--2.0-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/Version-0.1.0-green.svg)](marketplace.json)
[![Language](https://img.shields.io/badge/Language-English-red.svg)]()
[![Platform](https://img.shields.io/badge/Platform-Claude%20Code-purple.svg)]()

---

## Table of Contents

1. [Introduction — What is SoDam Family?](#1-introduction--what-is-sodam-family-)
2. [Seven Siblings at a Glance](#2-seven-siblings-at-a-glance-)
3. [Architecture — How Everything Connects](#3-architecture--how-everything-connects-)
4. [FAQ — Frequently Asked Questions](#4-faq--frequently-asked-questions-)
5. [Legal / Copyright / License / Commercial Use](#5-legal--copyright--license--commercial-use-)

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
| 🛡️ **[SoDamHarness](https://github.com/sodam-ai/SoDam-Harness-Eng)** | Safety Gate | Blocks dangerous commands, creates backups before risky operations, and lets you undo mistakes | **REQUIRED — Install this first** |
| 📄 **[SoDamContext](https://github.com/sodam-ai/SoDam-Context-Eng)** | AI Manual Doctor | Diagnoses and fixes your AI instruction file (`CLAUDE.md`) when it gets bloated or broken | Optional |
| 🔁 **[SoDamLoop](https://github.com/sodam-ai/SoDam-Loop-Eng)** | Auto-Repeater | Automatically repeats the same AI task multiple times so you don't have to type it over and over | Optional |
| 🧭 **[SoDamAgentic](https://github.com/sodam-ai/SoDam-Agentic-Eng)** | Plan Helper | Teaches Claude Code to plan before acting, and explains what it changed in plain everyday language | Optional |
| ✍️ **[SoDamPrompt](https://github.com/sodam-ai/SoDam-Prompt-Eng)** | Prompt Tool | Gives you 10 ready-made AI instruction templates — just fill in the blanks and you're done | Optional |
| 🔍 **[SoDamReverse](https://github.com/sodam-ai/SoDam-Reverse-Eng)** | RE Defense | Prevents Claude Code from helping anyone reverse-engineer (take apart and copy) other apps or software | Optional |
| 🗺️ **[SoDamGraph](https://github.com/sodam-ai/SoDam-Graph-Eng)** | Family Map | Reads the other six siblings (read-only) and shows you where each one currently stands | Optional |

> ⚠️ **Always install SoDamHarness before the other siblings.** The other six depend on Harness's safety layer to work properly — except SoDamGraph, which is a read-only observer and doesn't depend on any sibling.

---

## 3. Architecture — How Everything Connects 🏗️

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

> 🗺️ **SoDamGraph sits outside this ladder** — it's not an entry point, it's a read-only map that watches all six siblings above from the side.

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

                    ⋯ (read-only, outside the stack) ⋯
┌─────────────────────────────────────────────────────────────────┐
│              🗺️ SoDamGraph — observes all six above              │
│         (no dependency either direction — pure observer)         │
└─────────────────────────────────────────────────────────────────┘
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
| ✍️ SoDamPrompt | sodam-ai/SoDam-Prompt-Eng | **Public** |
| 🔍 SoDamReverse | sodam-ai/SoDam-Reverse-Eng | Private |
| 🗺️ SoDamGraph | sodam-ai/SoDam-Graph-Eng | Private |

---

## 4. FAQ — Frequently Asked Questions ❓

*(Click a question to expand the answer)*

<details>
<summary><b>1. Is SoDam Family free?</b></summary><br>

Yes, completely free. All seven plugins are open source (meaning anyone can read and use the code) under the Apache 2.0 license. Personal use and commercial use are both allowed at no cost, subject to the license conditions described in Section 5.
</details>

<details>
<summary><b>2. Are my files sent to any server or company?</b></summary><br>

No. SoDam Family runs entirely on your own computer. Your files, documents, and code never leave your machine. The only exception is the conversations you have with Claude AI — those go through Anthropic's servers because that is how Claude works. SoDam Family does not change this behavior. See Anthropic's privacy policy at [anthropic.com/policies](https://www.anthropic.com/policies).
</details>

<details>
<summary><b>3. Does SoDam Family work on Mac and Linux too?</b></summary><br>

Yes. It works on Windows, Mac, and Linux. Once installed, plugin behavior is identical on all platforms.
</details>

<details>
<summary><b>4. What exactly is Claude Code? I've never heard of it.</b></summary><br>

Claude Code is the official command-line tool (CLI — a text-based program you run in a terminal) made by Anthropic to let you use Claude AI on your computer. It is especially powerful for programming and coding tasks, but you can use it for writing, research, translation, analysis, and more. Learn more at [claude.ai/code](https://claude.ai/code).
</details>

<details>
<summary><b>5. Can AI change my files without asking me?</b></summary><br>

Without SoDamHarness: Yes. When you ask Claude Code to edit files, it can read and write files on your computer.

With SoDamHarness installed: Harness intercepts risky write operations and asks "Are you sure?" before proceeding. It also creates a backup of the original file first. The most dangerous commands (like deleting an entire folder) are blocked completely, even if you type them yourself by accident.
</details>

<details>
<summary><b>6. Do I need an internet connection to use SoDam Family?</b></summary><br>

Internet is needed for two things only:
1. Downloading and installing the plugins (one-time setup)
2. Talking to Claude AI (every conversation travels through Anthropic's servers)

After setup, the SoDam plugins themselves run locally with no internet required. Their safety checks happen entirely on your machine.
</details>

<details>
<summary><b>7. Can I use SoDam Family on my phone or tablet?</b></summary><br>

No. SoDam Family requires Claude Code, which currently runs on desktop computers (Windows, Mac, Linux). There is no official phone or tablet version of Claude Code at the time of writing.
</details>

<details>
<summary><b>8. I don't know English well. Can I still use this?</b></summary><br>

Claude Code itself can respond in almost any language. Just ask it: "Please always reply in [your language]." The original SoDam Family was designed for Korean speakers, and a full Korean README (`README.md`) is included in this repository.
</details>

<details>
<summary><b>9. Can I use SoDam Family with ChatGPT, Gemini, Copilot, or other AI tools?</b></summary><br>

No. SoDam Family is specifically built for Claude Code and uses Claude Code's plugin system (hooks, skills, slash commands). It is incompatible with ChatGPT, Gemini, GitHub Copilot, Ollama, or any other AI tool. Each AI platform has its own separate plugin ecosystem.
</details>

---

## 5. Legal / Copyright / License / Commercial Use 📜

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

## 🙌 Thank You

Thank you for checking out SoDam Family!

- **Korean README**: [README.md](README.md)
- **Bug Reports**: Open an issue on the relevant plugin's GitHub repository
- **Found something wrong in this document?** A GitHub Pull Request would be appreciated.

---

*Apache-2.0 © 2026 SoDam AI Studio. This software is provided for reference purposes. Results from using this software are the user's own responsibility.*
