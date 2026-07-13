# 소담 가족 (SoDam Family) 🏡

> AI, 컴퓨터, 코딩을 처음 접하는 분들을 위한 한국어 Claude Code 플러그인 모음

[![라이선스: Apache-2.0](https://img.shields.io/badge/라이선스-Apache--2.0-blue.svg)](LICENSE)
[![버전](https://img.shields.io/badge/버전-0.1.0-green.svg)](marketplace.json)
[![언어](https://img.shields.io/badge/언어-한국어-red.svg)]()
[![플랫폼](https://img.shields.io/badge/플랫폼-Claude%20Code-purple.svg)]()

---

## 이게 뭔가요? 🤔

**소담 가족**은 **Claude Code**(클로드 코드)라는 AI 도구를 더 안전하고 쉽게 쓸 수 있도록 도와주는 **플러그인 6개 묶음**입니다.

> **처음 보시는 분들을 위한 쉬운 설명**
>
> - **Claude Code**: 컴퓨터에서 쓰는 AI 코딩 도우미 (Anthropic 회사 제품)
> - **플러그인**: 핸드폰 앱처럼, Claude Code에 기능을 추가하는 것
> - **소담 가족**: "안전지키기 · 설명서검진 · 자동반복 · 계획도우미 · 프롬프트도구 · 역공학분석" 6가지 플러그인 묶음

---

## 6형제 소개 👨‍👩‍👧‍👦

| 이름 | 별명 | 하는 일 | 필수 여부 |
|------|------|---------|----------|
| 🛡️ **SoDamHarness** | 안전지킴이 | 위험한 명령 차단·백업·되돌리기 | **필수 (맨 먼저 설치)** |
| 📄 **SoDamContext** | 설명서검진 | AI 사용설명서(CLAUDE.md) 건강검진·처방 | 선택 |
| 🔁 **SoDamLoop** | 자동반복이 | 정해진 작업 자동 반복·스케줄 관리 | 선택 |
| 🧭 **SoDamAgentic** | 계획도우미 | 코딩 전 계획 먼저·변경 내용 쉬운 말로 검토 | 선택 |
| ✍️ **SoDamPrompt** | 프롬프트도구 | 빈칸만 채워 바로 쓰는 한국어 AI 프롬프트 10개 | 선택 |
| 🔍 **SoDamReverse** | 역공학분석 | 외부 코드·앱 구조 분석 (고급 사용자용) | 선택 |

> ⚠️ **SoDamHarness는 반드시 다른 형제보다 먼저 설치하세요.** 나머지는 Harness 위에서 동작합니다.

---

## 시작 전 준비물 📋

### 반드시 필요한 것

| 항목 | 버전 | 확인 방법 | 다운로드 |
|------|------|---------|---------|
| **Node.js** | 18 이상 | 터미널에서 `node --version` 입력 | [nodejs.org](https://nodejs.org) → LTS 버전 |
| **Claude Code** | 최신 | `claude --version` 입력 | [claude.ai/code](https://claude.ai/code) |
| **인터넷 연결** | - | 초기 설치 시에만 필요 | - |

> **터미널이 뭔가요?**
> - Windows: `윈도우 키` 누르고 `cmd` 또는 `PowerShell` 검색 후 실행
> - Mac: `Command(⌘) + Space` → `터미널` 검색 후 실행
> - Claude Code 안에서도 터미널 사용 가능

### Node.js 설치 방법 (처음인 분)

1. [nodejs.org](https://nodejs.org) 접속
2. "LTS (권장 버전)" 버튼 클릭하여 다운로드
3. 다운로드된 파일 실행 → "다음" 계속 클릭
4. 설치 완료 후 터미널에서 `node --version` 입력
5. `v18.x.x` 처럼 숫자가 나오면 성공

---

## 다운로드 방법 📥

각 형제는 GitHub에서 개별 다운로드합니다.

### 방법 1: ZIP으로 다운로드 (초보자 권장 ⭐)

1. 아래 링크 중 원하는 형제의 GitHub 주소로 이동
2. 초록색 `< > Code` 버튼 클릭
3. `Download ZIP` 클릭
4. 다운로드된 ZIP 파일 압축 해제

| 형제 | GitHub 주소 |
|------|------------|
| 🛡️ SoDamHarness | `https://github.com/sodam-ai/SoDam-Harness-Eng` |
| 📄 SoDamContext | `https://github.com/sodam-ai/SoDam-Context-Eng` |
| 🔁 SoDamLoop | `https://github.com/sodam-ai/SoDam-Loop-Eng` |
| 🧭 SoDamAgentic | `https://github.com/sodam-ai/SoDam-Agentic-Eng` |
| ✍️ SoDamPrompt | `https://github.com/sodam-ai/SoDam-Prompt-Eng` |
| 🔍 SoDamReverse | `https://github.com/sodam-ai/SoDam-Reverse-Eng` |

### 방법 2: git clone (터미널 사용 가능한 분)

```bash
git clone https://github.com/sodam-ai/SoDam-Harness-Eng
```

---

## 설치 방법 🔧

> **설치 순서를 반드시 지켜주세요**: Harness → Loop → Context → Agentic → Prompt → Reverse

### 1단계: SoDamHarness 설치 (필수)

**Windows:**
```powershell
# PowerShell을 관리자 권한으로 실행 후
xcopy /E /I "SoDam-Harness-Eng" "%USERPROFILE%\.claude\plugins\sodam-harness"
```

**Mac / Linux:**
```bash
cp -r SoDam-Harness-Eng ~/.claude/plugins/sodam-harness
```

### 2단계: Claude Code 재시작

```
Claude Code를 완전히 닫은 후 다시 실행하세요.
(창 닫기 → 다시 열기)
```

### 3단계: 설치 확인

Claude Code를 열고 아래 명령어 입력:
```
/sodam-harness-status
```
✅ 한국어 상태 메시지가 나오면 설치 성공!

### 4단계: 나머지 형제 설치 (선택)

같은 방법으로 원하는 형제를 추가 설치합니다.

**SoDamContext:**
```powershell
# Windows
xcopy /E /I "SoDam-Context-Eng" "%USERPROFILE%\.claude\plugins\sodam-context"
```
```bash
# Mac/Linux
cp -r SoDam-Context-Eng ~/.claude/plugins/sodam-context
```

**SoDamLoop:**
```powershell
xcopy /E /I "SoDam-Loop-Eng" "%USERPROFILE%\.claude\plugins\sodam-loop"
```

**SoDamAgentic:**
```powershell
xcopy /E /I "SoDam-Agentic-Eng" "%USERPROFILE%\.claude\plugins\sodam-agentic"
```

**SoDamPrompt (SKILL.md 방식):**
```powershell
xcopy /E /I "SoDam-Prompt-Eng\skills" "%USERPROFILE%\.claude\skills\"
```

---

## 빠른 시작 🚀

설치 완료 후 Claude Code를 열고 아래 명령어를 입력해 보세요.

### 처음 시작

```
/sodam-harness-status
```
> Harness가 켜져 있는지 확인합니다.

```
/sodam-context-checkup
```
> AI 사용설명서(CLAUDE.md) 건강상태를 확인합니다.

```
/sodam-agentic-start
```
> 계획도우미를 시작합니다. 처음 사용법을 단계별로 안내받을 수 있습니다.

---

## 명령어 목록 📌

### 🛡️ SoDamHarness (안전지킴이)

| 명령어 | 설명 |
|--------|------|
| `/sodam-harness-status` | 현재 상태 확인 |
| `/sodam-harness-undo` | 마지막 작업 되돌리기 |
| `/sodam-harness-fix` | 문제 자동 수정 시도 |

### 📄 SoDamContext (설명서검진)

| 명령어 | 설명 |
|--------|------|
| `/sodam-context-checkup` | AI 사용설명서 건강검진 |
| `/sodam-context-intake` | AI 사용설명서 새로 등록 |
| `/sodam-context-treat` | 발견된 문제 처방(수정) |

### 🔁 SoDamLoop (자동반복)

| 명령어 | 설명 |
|--------|------|
| `/sodam-loop-start` | 자동 반복 작업 시작 |
| `/sodam-loop-stop` | 반복 정지 |

### 🧭 SoDamAgentic (계획도우미)

| 명령어 | 설명 |
|--------|------|
| `/sodam-agentic-start` | 계획도우미 온보딩 시작 |
| `/sodam-agentic-plan` | 코딩 전 계획 먼저 세우기 |
| `/sodam-agentic-review` | 변경 내용 쉬운 말로 검토 |

### ✍️ SoDamPrompt (프롬프트도구)

| 명령어 | 설명 |
|--------|------|
| `/book-report-helper` | 독후감 작성 도움 |
| `/polite-message` | 정중한 메시지 작성 |
| `/long-text-summary` | 긴 글을 3줄로 요약 |
| `/explain-simply` | 어려운 내용 쉽게 설명 |
| `/study-planner` | 공부 계획표 만들기 |
| `/self-intro-polish` | 자기소개 다듬기 |
| `/sns-caption` | SNS 캡션 작성 |
| `/natural-english` | 영어 문장 자연스럽게 |
| `/presentation-script` | 발표 대본 작성 |
| `/request-apology-message` | 부탁·사과 메시지 작성 |

---

## 보안·개인정보 🔒

소담 가족은 아래 원칙을 철저히 지킵니다.

- ✅ **100% 로컬 동작** — 외부 서버로 데이터를 전송하지 않습니다
- ✅ **비밀키 값 미출력** — API 키 등은 `sk-ant-…REDACTED` 형태로만 표시
- ✅ **위험 작업 차단** — `rm -rf`, 파일 삭제 등 되돌리기 어려운 작업은 먼저 확인
- ✅ **개인정보 수집 없음** — 이름·이메일·전화번호 등 수집하지 않음
- ✅ **자동 백업** — 중요 파일 수정 전 자동 백업 (Harness)
- ❌ **완전한 사고 방지는 불가** — 안전 도구지만 모든 경우를 막지는 못합니다 (사용자 책임)

> **비밀번호·API 키가 걱정되시면?** → 상세 보안 설명은 [GUIDE.ko.md](GUIDE.ko.md) §5 참고

---

## 라이선스 📜

소담 가족 6형제 모두 **Apache License 2.0** 적용.

### 허용되는 것 ✅

| 용도 | 허용 여부 |
|------|---------|
| 개인 사용 | ✅ 완전 허용 |
| 상업적 사용 | ✅ 허용 (조건 있음) |
| 수정·변경 | ✅ 허용 (변경 사실 표시 필수) |
| 재배포 | ✅ 허용 (LICENSE + NOTICE 파일 포함 필수) |
| 특허 사용 | ✅ 기여자 특허 자동 허가 |

### 금지되는 것 ❌

| 항목 | 설명 |
|------|------|
| 상표 무단 사용 | "SoDam AI Studio" 이름을 제품 추천·홍보에 사용 불가 |
| 보증 주장 | 개발자가 이 제품을 보증한다고 주장 불가 |
| 책임 전가 | 이 도구 사용으로 인한 손해를 개발자에게 청구 불가 |

### 상업적 사용 시 반드시 해야 할 것

1. 원본 `LICENSE` 파일을 배포물에 포함
2. 원본 `NOTICE` 파일을 배포물에 포함
3. 소스 코드를 수정했다면 "이 파일을 수정했음"을 명시

> 자세한 법률 내용은 [GUIDE.ko.md](GUIDE.ko.md) §8 참고

---

## 문제가 생겼을 때 🆘

| 증상 | 해결 방법 |
|------|---------|
| 명령어가 안 보여요 | Claude Code 재시작 (완전히 닫고 다시 열기) |
| `node --version` 오류 | Node.js 재설치 (nodejs.org LTS 버전) |
| 차단 메시지가 너무 자주 떠요 | [GUIDE.ko.md](GUIDE.ko.md) §6 FAQ 참고 |
| 백업 파일이 어디 있어요? | `~/.sodamharness/backups/` 폴더 확인 (현재 형제별 독립 저장, 통합 경로는 준비 중) |
| 되돌리기가 안 돼요 | `/sodam-harness-undo` 입력 |

---

## 도움받기 💬

- **문서**: [GUIDE.ko.md](GUIDE.ko.md) — 더 자세한 설명
- **영문 문서**: [README.en.md](README.en.md)
- **버그 신고**: 각 형제 GitHub Issues 페이지

---

> 소담 가족은 비개발자·완전 초보자도 AI를 안전하고 쉽게 쓸 수 있도록 만들어졌습니다.
> 막히는 부분이 있으면 `/sodam-harness-fix` 를 먼저 입력해 보세요.

*Apache-2.0 © 2026 SoDam AI Studio. 이 도구는 참고용이며 사용으로 인한 결과는 사용자 책임입니다.*
