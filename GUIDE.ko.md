# 소담 가족 (SoDam Family) 완전 가이드

> AI·컴퓨터를 처음 접하는 분들을 위한 단계별 완전 설명서

---

## 목차

1. [소담 가족이란?](#1-소담-가족이란)
2. [6형제 상세 소개](#2-6형제-상세-소개)
3. [시작 전 준비물 (상세)](#3-시작-전-준비물-상세)
4. [다운로드 방법 (상세)](#4-다운로드-방법-상세)
5. [설치 방법 (OS별 단계별)](#5-설치-방법-os별-단계별)
6. [보안·개인정보·데이터 흐름](#6-보안개인정보데이터-흐름)
7. [아키텍처 (구조 설명)](#7-아키텍처-구조-설명)
8. [워크플로우 (사용 시나리오)](#8-워크플로우-사용-시나리오)
9. [명령어 상세 설명](#9-명령어-상세-설명)
10. [파일·문서 위치](#10-파일문서-위치)
11. [문제·오류 대처 방법](#11-문제오류-대처-방법)
12. [FAQ (자주 묻는 질문)](#12-faq-자주-묻는-질문)
13. [라이선스·저작권·상업적 사용](#13-라이선스저작권상업적-사용)

---

## 1. 소담 가족이란?

### 쉬운 말로 설명

소담 가족은 **Claude Code**(클로드 코드)를 더 안전하고 쉽게 쓸 수 있게 도와주는 **도구 묶음**입니다.

| 용어 | 쉬운 말 설명 |
|------|------------|
| **Claude Code** | Anthropic(미국 AI 회사)이 만든 AI 코딩 도우미. 채팅으로 컴퓨터 작업을 시킬 수 있음 |
| **플러그인(Plugin)** | 핸드폰 앱처럼, 이미 설치된 프로그램에 기능을 추가하는 것 |
| **훅(Hook)** | Claude Code가 어떤 행동을 하기 직전에 자동으로 실행되는 안전장치 |
| **CLAUDE.md** | Claude Code에게 "이렇게 행동해"라고 알려주는 설명서 파일 |

### 왜 필요한가요?

Claude Code는 강력하지만, 실수로 **파일을 지우거나 중요한 것을 망가뜨릴** 수 있습니다.
소담 가족은 이런 사고를 **사전에 막거나**, **되돌리거나**, **미리 알려주는** 안전망 역할을 합니다.

### 누가 만들었나요?

SoDam AI Studio가 개발했으며, Apache-2.0 오픈소스 라이선스로 무료 공개되어 있습니다.

---

## 2. 6형제 상세 소개

### 🛡️ SoDamHarness — 안전지킴이 (L0: 기반층)

**역할**: 모든 형제의 안전 기반. 다른 형제가 동작하려면 Harness가 먼저 설치되어야 합니다.

**하는 일**:
- `rm -rf`, 파일 삭제 등 되돌리기 어려운 명령 실행 전 확인
- 중요 파일 수정 전 자동 백업
- `/sodam-harness-undo`로 마지막 작업 되돌리기
- 비밀키(API 키 등)가 코드에 그대로 쓰여있으면 경고

**설치 위치**: `~/.claude/plugins/sodam-harness/`

---

### 📄 SoDamContext — 설명서검진 (L1: 중간층)

**역할**: AI의 사용설명서인 CLAUDE.md·AGENTS.md를 검사하고 깨끗하게 정리합니다.

**하는 일**:
- CLAUDE.md의 중복 줄, 모순, 비밀키 노출 검사
- 발견된 문제를 처방(수정)하되 안전키워드 포함 줄은 절대 건드리지 않음
- 항상 "미리보기 먼저 보여주기" 방식 — 사용자 확인 후 적용

**핵심 안전 규칙 (T1·T8)**:
- `T1`: 비밀키 값을 절대 출력하지 않음 (`sk-ant-…REDACTED`로만 표시)
- `T8`: "금지/never/must/항상/secret" 등 안전키워드가 있는 줄은 중복이어도 삭제하지 않음

**설치 위치**: `~/.claude/plugins/sodam-context/`

---

### 🔁 SoDamLoop — 자동반복이 (L2: 응용층)

**역할**: 정해진 작업을 자동으로 반복하고 스케줄을 관리합니다.

**하는 일**:
- Stop 훅(hook) 기반으로 루프 구동 (Claude Code 세션이 끝나면 자동 재시작)
- maker(작업 AI) / checker(검토 AI) 분리로 안전한 자동화
- 최대 8회 반복 후 자동 중단 (폭주 방지)

**주의**: SoDamHarness가 반드시 먼저 설치되어 있어야 합니다.

**설치 위치**: `~/.claude/plugins/sodam-loop/`

---

### 🧭 SoDamAgentic — 계획도우미 (L2: 응용층)

**역할**: 코딩 전 먼저 계획을 세우고, 변경 내용을 쉬운 말로 설명해 줍니다.

**하는 일**:
- 코딩 시작 전 "무엇을 할지" 먼저 계획 수립
- 변경된 파일/코드를 비개발자도 이해할 수 있는 한국어로 요약
- Harness가 살아있는지 감지 후 협력 (`isHarnessAlive()` 3조건 확인)

**설치 위치**: `~/.claude/plugins/sodam-agentic/`

---

### ✍️ SoDamPrompt — 프롬프트도구 (L3: 사용자층)

**역할**: 처음 AI를 쓰는 분들을 위한 빈칸 채우기 한국어 프롬프트 10개.

**하는 일**:
- 슬래시 명령어(예: `/독후감-도우미`) 입력 → 빈칸만 채우면 완성
- 별도 설치 없이 `~/.claude/skills/` 폴더에 SKILL.md 복사로 동작

**설치 방식**: 플러그인이 아닌 스킬(SKILL.md) 방식

---

### 🔍 SoDamReverse — 역공학분석 (L3: 사용자층)

**역할**: 외부 코드·앱 구조를 분석하여 SoDamHarness 안전규칙을 자동 주입.

**하는 일**:
- 분석 대상 코드에서 구조 파악
- Harness safety-rules 재주입 스크립트 실행

**주의**: 고급 사용자 전용. 처음 사용자에게는 불필요합니다.

**설치 위치**: `~/.claude/plugins/sodam-reverse/`

---

## 3. 시작 전 준비물 (상세)

### 필수 프로그램

#### Node.js 설치 (반드시 버전 18 이상)

1. [nodejs.org](https://nodejs.org) 방문
2. **LTS (Long-Term Support)** 버튼 클릭 (안정적인 버전)
3. 다운로드된 `.msi` 파일 (Windows) 또는 `.pkg` 파일 (Mac) 실행
4. 설치 마법사에서 모든 항목 기본값으로 "다음" 클릭
5. 설치 완료 후 컴퓨터 재시작 (권장)

**설치 확인**:
```
Windows: 시작 메뉴 → PowerShell 검색 → 실행 → 입력: node --version
Mac: Command+Space → 터미널 → 입력: node --version
```
결과: `v18.x.x` 또는 `v20.x.x` 형태로 나오면 성공

#### Claude Code 설치

Claude Code는 Anthropic 공식 홈페이지에서 다운로드합니다.

> ⚠️ **중요**: Claude Code는 유료 서비스입니다. Anthropic 계정 및 구독이 필요합니다.

1. [claude.ai/code](https://claude.ai/code) 방문
2. 운영체제에 맞는 설치 파일 다운로드
3. 설치 후 Anthropic 계정으로 로그인

**설치 확인**:
```
claude --version
```

### 운영체제별 추가 사항

| 운영체제 | 추가 작업 |
|---------|---------|
| Windows 10/11 | PowerShell 5.1 이상 (기본 포함), 없으면 `winget install Microsoft.PowerShell` |
| Mac (macOS 12+) | 없음 (기본 터미널 사용) |
| Mac (Apple Silicon M1/M2/M3) | 없음 (Node.js ARM 버전 자동 설치) |
| Linux (Ubuntu 20.04+) | `sudo apt install nodejs npm` 또는 NodeSource 공식 설치법 |

---

## 4. 다운로드 방법 (상세)

### 방법 1: GitHub ZIP 다운로드 (초보자 권장)

**상세 단계 (SoDamHarness 예시)**:

1. 주소창에 `https://github.com/sodam-ai/SoDam-Harness-Eng` 입력하여 이동
2. 페이지 우측 상단의 초록색 버튼 `< > Code` 클릭
3. 드롭다운에서 `Download ZIP` 클릭
4. 다운로드된 `SoDam-Harness-Eng-main.zip` 파일 더블클릭 (압축 해제)
5. 압축 해제된 폴더 `SoDam-Harness-Eng-main` 이 생성됨

### 방법 2: git clone (터미널을 쓸 수 있는 분)

```bash
# Windows PowerShell 또는 Mac 터미널에서
git clone https://github.com/sodam-ai/SoDam-Harness-Eng
git clone https://github.com/sodam-ai/SoDam-Context-Eng
git clone https://github.com/sodam-ai/SoDam-Loop-Eng
git clone https://github.com/sodam-ai/SoDam-Agentic-Eng
git clone https://github.com/sodam-ai/SoDam-Prompt-Eng
git clone https://github.com/sodam-ai/SoDam-Reverse-Eng
```

### 다운로드 후 폴더 확인

각 형제 폴더 안에 아래 파일들이 있어야 정상입니다:

```
sodam-harness/
├── plugin.json          ← 플러그인 설명 파일 (필수)
├── hooks/
│   └── guard.mjs        ← 안전 훅 (Harness 핵심)
├── commands/            ← 슬래시 명령어 폴더
│   ├── status.md
│   ├── undo.md
│   └── fix.md
└── README.md
```

---

## 5. 설치 방법 (OS별 단계별)

> ⚠️ **설치 순서 반드시 지켜주세요**: Harness → Loop → Context → Agentic → Prompt → Reverse

### Windows 설치

#### SoDamHarness (필수)

```powershell
# 1. PowerShell을 관리자 권한으로 실행 (시작 메뉴 → PowerShell 우클릭 → 관리자로 실행)

# 2. 플러그인 폴더 만들기 (이미 있으면 넘어가도 됨)
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.claude\plugins\sodam-harness"

# 3. 파일 복사 (압축 해제한 폴더 경로로 바꿔주세요)
xcopy /E /I /Y "C:\Users\내이름\Downloads\SoDam-Harness-Eng-main" "$env:USERPROFILE\.claude\plugins\sodam-harness"
```

#### SoDamContext (선택)

```powershell
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.claude\plugins\sodam-context"
xcopy /E /I /Y "C:\Users\내이름\Downloads\SoDam-Context-Eng-main" "$env:USERPROFILE\.claude\plugins\sodam-context"
```

#### SoDamLoop (선택)

```powershell
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.claude\plugins\sodam-loop"
xcopy /E /I /Y "C:\Users\내이름\Downloads\SoDam-Loop-Eng-main" "$env:USERPROFILE\.claude\plugins\sodam-loop"
```

#### SoDamAgentic (선택)

```powershell
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.claude\plugins\sodam-agentic"
xcopy /E /I /Y "C:\Users\내이름\Downloads\SoDam-Agentic-Eng-main" "$env:USERPROFILE\.claude\plugins\sodam-agentic"
```

#### SoDamPrompt (선택, SKILL.md 방식)

```powershell
# skills 폴더 만들기
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.claude\skills"

# SKILL.md 파일들 복사
xcopy /E /I /Y "C:\Users\내이름\Downloads\SoDam-Prompt-Eng-main\skills" "$env:USERPROFILE\.claude\skills"
```

### Mac / Linux 설치

```bash
# SoDamHarness (필수)
mkdir -p ~/.claude/plugins/sodam-harness
cp -r ~/Downloads/SoDam-Harness-Eng-main/* ~/.claude/plugins/sodam-harness/

# SoDamContext (선택)
mkdir -p ~/.claude/plugins/sodam-context
cp -r ~/Downloads/SoDam-Context-Eng-main/* ~/.claude/plugins/sodam-context/

# SoDamLoop (선택)
mkdir -p ~/.claude/plugins/sodam-loop
cp -r ~/Downloads/SoDam-Loop-Eng-main/* ~/.claude/plugins/sodam-loop/

# SoDamAgentic (선택)
mkdir -p ~/.claude/plugins/sodam-agentic
cp -r ~/Downloads/SoDam-Agentic-Eng-main/* ~/.claude/plugins/sodam-agentic/

# SoDamPrompt (선택, SKILL.md 방식)
mkdir -p ~/.claude/skills
cp -r ~/Downloads/SoDam-Prompt-Eng-main/skills/* ~/.claude/skills/
```

### 설치 완료 확인

```
1. Claude Code 완전히 종료 (창 닫기 또는 Ctrl+C)
2. Claude Code 다시 실행
3. 아래 명령어 입력:
```

```
/sodam-harness-status
```

✅ 한국어 상태 메시지가 나오면 설치 성공!
❌ "명령어를 찾을 수 없습니다" → §11 문제 대처 참고

---

## 6. 보안·개인정보·데이터 흐름

### 데이터 흐름 원칙

```
사용자 입력
    ↓
Claude Code (로컬 실행)
    ↓
SoDamHarness 훅 (실행 전 검사) ← 100% 로컬, 외부 전송 없음
    ↓
안전하면 → 실행
위험하면 → 차단 또는 확인 요청
```

### 보안 항목별 상세

#### 비밀키·API 키 보호

소담 가족은 비밀키 **값을 절대 읽거나 출력하지 않습니다**.

- 검사 시 마스킹 표시만: `sk-ant-api03-…REDACTED`
- 원본 값은 읽지 않음 (T1 안전 원칙)
- `.env` 파일 내부 값 노출 없음

#### 개인정보 수집 없음

소담 가족은 아래 정보를 수집하지 않습니다:
- 이름·이메일·전화번호·주민등록번호
- IP 주소·위치 정보
- 코드 내용 (외부 서버로 전송 안 함)
- 채팅 내용

#### 네트워크 사용

| 상황 | 네트워크 사용 여부 |
|------|-----------------|
| 플러그인 설치 | GitHub에서 1회 다운로드 (이후 없음) |
| 플러그인 동작 중 | **100% 로컬** — 외부 전송 없음 |
| 백업 파일 저장 | 로컬 폴더에만 저장 |
| 명령어 실행 | 로컬 처리 |

#### 훅(Hook)의 동작 방식

PreToolUse 훅은 Claude Code가 도구를 실행하기 **직전**에 호출됩니다:

```
Claude Code가 "파일 삭제" 요청 받음
         ↓
SoDamHarness guard.mjs 실행 (로컬)
         ↓
위험 판단? YES → "정말 삭제할까요?" 확인 요청
         NO  → 그대로 진행
```

**Fail-Closed 원칙**: 훅 실행 중 오류가 발생하면 → **차단(deny)** (허용이 아님)
이 원칙은 오류가 생겼을 때도 더 안전한 쪽을 선택한다는 뜻입니다.

#### 안전하지 않은 상황

소담 가족이 막을 수 없는 경우도 있습니다. 솔직하게 알려드립니다:

- Claude Code를 완전히 우회하는 방식의 파일 삭제 (직접 파일 탐색기에서 삭제 등)
- 사용자가 직접 "허용"을 눌러 위험한 작업을 진행한 경우
- Claude Code 자체의 버그나 예상치 못한 업데이트
- SoDamHarness 없이 다른 형제만 설치된 경우

> **결론**: 안전 도구지만 모든 사고를 100% 막지는 못합니다. 중요한 파일은 별도 백업을 권장합니다.

---

## 7. 아키텍처 (구조 설명)

### 계층 구조

```
┌──────────────────────────────────────────────────────┐
│              L3 사용자층 (User Layer)                 │
│         SoDamPrompt    SoDamReverse                  │
├──────────────────────────────────────────────────────┤
│              L2 응용층 (Application Layer)            │
│         SoDamLoop      SoDamAgentic                  │
├──────────────────────────────────────────────────────┤
│              L1 중간층 (Middle Layer)                 │
│                   SoDamContext                       │
├──────────────────────────────────────────────────────┤
│              L0 기반층 (Foundation Layer)             │
│                   SoDamHarness                       │
└──────────────────────────────────────────────────────┘
            ↑ 모든 형제의 안전 기반
```

### 의존 방향 (단방향)

```
SoDamHarness (L0)
      ↑
SoDamContext (L1) ← Context는 Harness 없이도 동작 (폴백 모드)
      ↑
SoDamLoop · SoDamAgentic (L2) ← Harness 감지 후 협력 모드 전환
      ↑
SoDamPrompt · SoDamReverse (L3)
```

**중요**: 의존은 아래에서 위로만 (단방향). 아래층이 위층을 참조하지 않습니다.

### 공유 라이브러리

```
D:\AI_Dev_Work\2026y\SoDam_Family\shared\
└── family-detect.mjs   ← 형제 감지 공통 라이브러리
```

`isFamilyAlive('harness')` 함수 — 어떤 형제든 Harness가 살아있는지 확인할 때 사용.

### 번들 정의 (marketplace.json)

```json
{
  "name": "sodam-family-bundle",
  "plugins": [
    {"name": "sodam-harness", "order": 1, "required": true},
    {"name": "sodam-loop",    "order": 2, "required": false},
    {"name": "sodam-context", "order": 3, "required": false},
    {"name": "sodam-agentic", "order": 4, "required": false}
  ]
}
```

---

## 8. 워크플로우 (사용 시나리오)

### 시나리오 1: 처음 설치 후 기본 점검

```
1. Claude Code 실행
2. /sodam-harness-status         → Harness 상태 확인
3. /sodam-context-checkup        → CLAUDE.md 건강검진 실행
4. 검진 결과 확인
5. 문제 발견 시: /sodam-context-treat → 처방(수정) 미리보기 확인 후 적용
```

### 시나리오 2: 코딩 작업 시작

```
1. /sodam-agentic-start          → 온보딩 안내 시작
2. /sodam-agentic-plan           → 코딩 전 계획 먼저 수립
3. Claude Code에게 코딩 지시
4. /sodam-agentic-review         → 변경 내용 한국어로 검토
5. 문제 있으면: /sodam-harness-undo → 마지막 작업 되돌리기
```

### 시나리오 3: 프롬프트 도구 사용 (SoDamPrompt)

```
1. Claude Code 실행
2. /독후감-도우미 입력
3. 빈칸 채우기 (책 제목, 느낀 점 등)
4. AI가 완성된 독후감 초안 생성
```

### 시나리오 4: 자동 반복 작업 (SoDamLoop)

```
1. /sodam-loop-start             → 반복 작업 설정
2. 반복할 작업 설명 입력
3. 자동 반복 시작 (maker AI 작업 → checker AI 검토 → 반복)
4. 완료 또는 /sodam-loop-stop    → 중지
```

---

## 9. 명령어 상세 설명

### 🛡️ SoDamHarness 명령어

#### `/sodam-harness-status`
- **용도**: 현재 Harness 상태 확인
- **출력**: 버전, 활성화 여부, 보호 중인 항목 목록
- **언제 쓰나**: 처음 시작하거나 뭔가 이상할 때

#### `/sodam-harness-undo`
- **용도**: 마지막으로 Harness가 백업한 작업 되돌리기
- **주의**: Harness가 백업한 것만 되돌릴 수 있음 (Harness 설치 전 작업은 불가)
- **백업 위치**: `~/.sodam/backups/`

#### `/sodam-harness-fix`
- **용도**: 간단한 문제 자동 수정 시도
- **주의**: 모든 문제를 고치지는 못함. 수정 전 확인 메시지 표시

---

### 📄 SoDamContext 명령어

#### `/sodam-context-checkup`
- **용도**: CLAUDE.md 건강검진
- **검사 항목**: 중복 줄, 모순 규칙, 비밀키 노출 여부, 파일 크기
- **출력**: 문제 목록 및 권장 처방

#### `/sodam-context-intake`
- **용도**: 새로운 CLAUDE.md를 검진 대상으로 등록
- **사용 시점**: 새 프로젝트를 시작하거나 CLAUDE.md를 새로 만들었을 때

#### `/sodam-context-treat`
- **용도**: 검진에서 발견된 문제를 처방(수정)
- **동작**: 먼저 변경 미리보기 보여줌 → 사용자 확인 → 적용
- **안전 보장**: T8 원칙 — 안전키워드 포함 줄은 절대 삭제 안 함

---

### 🔁 SoDamLoop 명령어

#### `/sodam-loop-start`
- **용도**: 자동 반복 작업 시작
- **설정**: 반복 횟수 (최대 8회), 작업 내용

#### `/sodam-loop-stop`
- **용도**: 현재 실행 중인 루프 중단
- **주의**: 즉시 중단 (현재 작업 완료 후 중단이 아님)

---

### 🧭 SoDamAgentic 명령어

#### `/sodam-agentic-start`
- **용도**: 계획도우미 온보딩 시작
- **출력**: 단계별 사용법 안내

#### `/sodam-agentic-plan`
- **용도**: 코딩 전 계획 수립
- **동작**: 무엇을 할지 → 어떻게 할지 → 위험 요소 → 단계별 계획서 생성

#### `/sodam-agentic-review`
- **용도**: 변경된 파일을 비개발자 말로 요약
- **출력 예시**: "오늘 바뀐 것: 로그인 버튼 색이 파란색으로 바뀌었어요. 비밀번호 검사가 강화됐어요."

---

### ✍️ SoDamPrompt 명령어

> **출시 예정 (Coming Soon)**
> SoDamPrompt는 현재 개발 중입니다. 아래는 예정된 기능 안내입니다.

SoDamPrompt는 **프롬프트(Claude에게 내리는 지시문) 전문가** 플러그인입니다.
Claude에게 뭐라고 말해야 할지 막막할 때, SoDamPrompt가 더 좋은 질문과 지시문을 만들어 줍니다.

#### 예정 명령어

| 명령어 | 설명 |
|---|---|
| `/sodam-prompt-improve` | 내가 쓴 프롬프트를 더 명확하게 개선 |
| `/sodam-prompt-template` | 자주 쓰는 프롬프트 템플릿 저장·불러오기 |
| `/sodam-prompt-analyze` | 현재 프롬프트의 문제점 분석 |
| `/sodam-prompt-suggest` | 작업 목적에 맞는 프롬프트 자동 제안 |

#### 어떤 상황에 도움이 되나요?

- "Claude한테 뭐라고 하면 더 잘 알아들을까?" 할 때
- 같은 질문을 여러 번 반복하고 싶을 때 (템플릿 저장)
- Claude의 답변이 원하는 방향과 다를 때 (프롬프트 개선)
- 처음 Claude를 써보는 분이 어떻게 말해야 할지 모를 때

> 출시 알림을 받으려면 SoDam Family 공식 채널을 팔로우하세요.

---

### 🔍 SoDamReverse 명령어

> **출시 예정 (Coming Soon)**
> SoDamReverse는 현재 개발 중입니다. 아래는 예정된 기능 안내입니다.

SoDamReverse는 **역공학(Reverse Engineering) 방어 전문** 플러그인입니다.
쉽게 말하면, "내 프로젝트를 Claude가 너무 많이 알아버리는 것"을 막아주는 안전장치입니다.

#### 역공학이 뭔가요? (쉬운 설명)

건물 설계도를 남에게 보여주면 그 건물을 그대로 복사할 수 있습니다.
마찬가지로 내 코드나 비즈니스 로직을 Claude가 모두 분석하면,
누군가 같은 정보로 비슷한 것을 만들 수도 있습니다.
SoDamReverse는 이런 상황을 감지하고 경고해 줍니다.

#### 예정 명령어

| 명령어 | 설명 |
|---|---|
| `/sodam-reverse-scan` | 민감한 비즈니스 로직 노출 여부 스캔 |
| `/sodam-reverse-shield` | 핵심 로직을 Claude가 분석하지 못하게 보호 |
| `/sodam-reverse-report` | 현재 프로젝트의 정보 노출 위험 리포트 |
| `/sodam-reverse-audit` | 과거 세션에서 민감 정보 요청 이력 검토 |

#### 이런 분께 필요합니다

- 나만의 비즈니스 아이디어가 담긴 코드를 다루는 분
- 고객 개인정보가 포함된 프로젝트를 작업하는 분
- 회사 내부 시스템을 Claude로 개발하는 분
- 특허나 영업비밀이 걱정되는 분

> SoDamReverse는 AI 보안의 새로운 영역입니다. 더 많은 정보는 공식 문서를 참조하세요.

---

## 10장. 파일과 문서 위치

> "뭔가 잘못됐을 때 어디를 봐야 하는지" 알면 반이 해결됩니다.

이 장에서는 SoDam Family 플러그인들이 설치되는 위치와
중요한 파일들이 어디에 있는지 설명합니다.

---

### 📂 플러그인 설치 폴더

플러그인은 여러분의 홈 폴더 아래 `.claude/plugins/` 안에 설치됩니다.

| 플러그인 | 설치 경로 |
|---|---|
| SoDamHarness | `.claude/plugins/sodam-harness/` |
| SoDamContext | `.claude/plugins/sodam-context/` |
| SoDamLoop | `.claude/plugins/sodam-loop/` |
| SoDamAgentic | `.claude/plugins/sodam-agentic/` |
| SoDamPrompt | `.claude/plugins/sodam-prompt/` (출시 예정) |
| SoDamReverse | `.claude/plugins/sodam-reverse/` (출시 예정) |

> **홈 폴더가 어디인가요?**
> 홈 폴더는 여러분 개인 공간입니다. 경로 맨 앞의 `~`(물결표)가 홈 폴더를 나타냅니다.
> - **Windows**: `C:\Users\여러분이름\`
> - **Mac**: `/Users/여러분이름/`
> - **Linux**: `/home/여러분이름/`

---

### 📁 데이터 저장 폴더

플러그인이 실제로 데이터를 저장하는 폴더는 따로 있습니다.

| 플러그인 | 데이터 폴더 | 저장하는 것 |
|---|---|---|
| SoDamHarness | `.sodamharness/` | 보호 규칙, 감사 로그 |
| SoDamHarness | `.sodamharness/backups/` | 되돌리기용 백업 파일 |
| SoDamContext | `.sodamcontext/` | 검진 결과, 처방 기록 |
| SoDamLoop | `.sodam-loop/` | 루프 규칙, 실행 이력 |
| SoDamAgentic | `.sodamagentic/` | 계획서, 검토 결과 |

위 경로는 모두 홈 폴더 바로 아래에 있습니다.
예: Windows라면 `C:\Users\여러분이름\.sodamharness\`

---

### 📄 중요한 파일들

#### CLAUDE.md (프로젝트 설명서 파일)
- **위치**: 각 프로젝트 폴더 안 또는 홈 폴더의 `.claude/CLAUDE.md`
- **역할**: Claude에게 "이 프로젝트에서는 이렇게 행동해"라고 알려주는 파일
- **예시 내용**: "한국어로만 대답해", "절대 파일을 지우지 마"
- **주의**: 너무 길어지면 Claude가 혼란스러워할 수 있습니다. SoDamContext가 이 파일을 관리해 줍니다.

#### plugin.json (플러그인 핵심 설정)
- **위치**: 각 플러그인 폴더 안 (예: `.claude/plugins/sodam-harness/plugin.json`)
- **역할**: 플러그인의 이름, 버전, 명령어 목록 등 핵심 정보가 담긴 파일
- **주의**: 직접 수정하지 마세요. 플러그인 업데이트 시 자동으로 바뀝니다.

#### hooks.json (자동 실행 설정)
- **위치**: `.claude/plugins/sodam-harness/hooks.json`
- **역할**: "Claude가 특정 행동을 하기 전에 자동으로 검사해"를 설정하는 파일
- **주의**: SoDamHarness가 관리합니다. 직접 수정하면 보호 기능이 꺼질 수 있습니다.

#### loop-rules.json (루프 규칙)
- **위치**: `.sodam-loop/loop-rules.json`
- **역할**: SoDamLoop가 반복 작업할 때 따르는 규칙들
- **편집 방법**: `/sodam-loop-help`를 실행하면 안전하게 설정을 바꿀 수 있습니다.

---

### 📚 문서 파일

각 플러그인 폴더 안에는 다음 문서 파일들이 있습니다.

| 파일명 | 내용 |
|---|---|
| `README.ko.md` | 각 플러그인의 짧은 소개 (5분 버전) |
| `GUIDE.ko.md` | 지금 읽고 계신 이 파일 (완전 초보자용 설명서) |
| `LICENSE` | Apache-2.0 라이선스 원문 (영문) |
| `CHANGELOG.md` | 버전별 변경 내역 |

같은 내용을 SoDam Family GitHub 저장소에서도 볼 수 있습니다.
인터넷에서 최신 버전을 언제든 확인하실 수 있습니다.

---

### 🗂️ 백업 파일 관리

SoDamHarness가 만드는 백업 파일들은 `.sodamharness/backups/` 폴더에 날짜별로 저장됩니다.

```
.sodamharness/
└── backups/
    ├── 2026-06-28/
    │   ├── myfile.py.bak
    │   └── config.json.bak
    └── 2026-06-27/
        └── index.js.bak
```

**백업이 너무 많이 쌓이면 어떻게 하나요?**

오래된 백업은 직접 지워도 됩니다.
`backups/` 폴더 안의 오래된 날짜 폴더를 삭제하면 저장 공간이 확보됩니다.
단, 최근 3일치는 남겨두는 것이 좋습니다.
혹시 오늘 작업에서 문제가 생겼을 때 되돌릴 수 있기 때문입니다.

---

### ✍️ SoDamPrompt 명령어

| 명령어 | 무엇을 채워야 하나 |
|--------|-----------------|
| `/독후감-도우미` | 책 제목, 저자, 느낀 점 키워드 |
| `/정중한-메시지` | 받는 사람, 요청 내용, 관계 |
| `/긴글-3줄요약` | 요약할 글 붙여넣기 |
| `/쉽게-설명해줘` | 설명받을 내용, 대상 (초등학생? 직장인?) |
| `/공부-계획표` | 공부 주제, 목표 날짜, 하루 가능 시간 |
| `/자기소개-다듬기` | 현재 자기소개 붙여넣기 |
| `/sns-캡션` | 사진 상황, 느낌, 해시태그 키워드 |
| `/영어-자연스럽게` | 영어 문장 붙여넣기, 상황 (이메일? 대화?) |
| `/발표-대본` | 주제, 발표 시간, 청중 |
| `/부탁-사과-메시지` | 상황, 부탁하거나 사과할 내용 |

---

## 10. 파일·문서 위치

### 플러그인 설치 위치

| 운영체제 | 경로 |
|---------|------|
| Windows | `C:\Users\내이름\.claude\plugins\` |
| Mac / Linux | `~/.claude/plugins/` |

### 각 형제별 설치 경로

```
~/.claude/plugins/
├── sodam-harness/         ← SoDamHarness
│   ├── plugin.json
│   └── hooks/guard.mjs
├── sodam-context/         ← SoDamContext
│   ├── plugin.json
│   └── commands/
├── sodam-loop/            ← SoDamLoop
│   ├── plugin.json
│   └── hooks/
├── sodam-agentic/         ← SoDamAgentic
│   ├── plugin.json
│   └── commands/
└── sodam-reverse/         ← SoDamReverse (선택)
    └── plugin.json

~/.claude/skills/          ← SoDamPrompt (SKILL.md 방식)
├── 독후감-도우미/SKILL.md
├── 정중한-메시지/SKILL.md
└── ...
```

### 백업 파일 위치

Harness가 자동으로 만드는 백업:

```
Windows: C:\Users\내이름\.sodam\backups\
Mac/Linux: ~/.sodam/backups/
```

백업 파일 형태: `파일명_날짜시간.backup` (예: `CLAUDE.md_20260629_143022.backup`)

### 로그 파일

Claude Code 세션 기록:
```
Windows: C:\Users\내이름\AppData\Roaming\claude-code\projects\
Mac/Linux: ~/.claude-code/projects/
```

---

## 11. 문제·오류 대처 방법

### 문제 1: 명령어가 안 보여요 / 없는 명령어라고 나와요

**증상**: `/sodam-harness-status` 입력했는데 "알 수 없는 명령어" 표시

**원인 및 해결**:

| 가능성 | 확인 방법 | 해결 |
|--------|---------|------|
| Claude Code 재시작 안 함 | - | Claude Code 완전 종료 후 재실행 |
| 설치 경로 잘못됨 | `~/.claude/plugins/sodam-harness/plugin.json` 있는지 확인 | 올바른 경로에 재설치 |
| plugin.json 없음 | 폴더 내용 확인 | 다운로드 파일 다시 복사 |

---

### 문제 2: `node --version` 오류가 나요

**증상**: `node --version` 입력 시 오류 또는 "찾을 수 없습니다"

**해결**:
1. [nodejs.org](https://nodejs.org) 재방문
2. LTS 버전 재설치
3. 설치 완료 후 **컴퓨터 재시작**
4. 터미널 새로 열고 `node --version` 재시도

---

### 문제 3: 차단 메시지가 너무 자주 떠요

**증상**: 작업할 때마다 "위험한 작업입니다" 경고 반복

**원인**: Harness가 민감도를 높게 설정하고 있을 수 있음

**해결**:
- 이것은 정상 동작입니다. Harness는 안전을 위해 확인을 요청합니다.
- 안전한 작업임을 확인했으면 "허용"을 선택하면 계속 진행됩니다.
- 반복적으로 차단된다면 `/sodam-harness-status`로 상태를 확인하세요.

---

### 문제 4: 백업 파일이 너무 많이 쌓여요

**증상**: `~/.sodam/backups/` 폴더가 너무 커짐

**해결**: 오래된 백업 파일은 직접 삭제해도 됩니다.
```powershell
# Windows: 30일 이상 된 백업 삭제
Get-ChildItem "$env:USERPROFILE\.sodam\backups\" | Where-Object {$_.LastWriteTime -lt (Get-Date).AddDays(-30)} | Remove-Item
```

---

### 문제 5: Context 검진에서 비밀키가 발견됐어요

**증상**: `/sodam-context-checkup` 결과에 "비밀키 의심" 표시

**절대 하지 말 것**: 해당 키 값을 Claude Code 채팅창에 붙여넣기하지 마세요!

**해결 순서**:
1. `/sodam-context-treat` 실행 (Context가 마스킹된 형태로만 처리)
2. 발견된 비밀키를 실제 `.env` 파일로 이동
3. `.gitignore`에 `.env` 추가 여부 확인
4. 이미 GitHub에 올라갔다면 → 즉시 해당 키를 무효화(revoke)하고 새 키 발급

---

### 문제 6: Loop가 무한 반복돼요

**증상**: `/sodam-loop-start` 후 멈추지 않음

**해결**:
1. `/sodam-loop-stop` 입력
2. 작동 안 하면: Claude Code 강제 종료 (Ctrl+C 또는 창 닫기)
3. Loop는 최대 8회 반복 후 자동 중단 설계 — 그래도 멈추지 않으면 버그 신고

---

## 12. FAQ (자주 묻는 질문)

**Q. 소담 가족을 설치하면 Claude Code가 느려지나요?**

A. 아주 약간의 부하가 추가됩니다. 보통 1초 미만의 지연. 대부분의 환경에서 체감하기 어렵습니다.

---

**Q. 형제를 하나만 설치해도 되나요?**

A. 네, 가능합니다. 단, SoDamHarness는 다른 형제의 기반이므로 Harness만 있으면 됩니다. 나머지는 원하는 것만 골라 설치하세요.

---

**Q. 전부 동시에 설치해도 되나요?**

A. 가능하지만, 충돌 위험을 피하려면 설치 순서(Harness → Loop → Context → Agentic → Prompt → Reverse)를 지켜주세요.

---

**Q. 기존 CLAUDE.md가 망가질까요?**

A. SoDamContext는 반드시 미리보기를 먼저 보여주고 사용자 확인 후 적용합니다. 안전키워드가 있는 줄은 절대 건드리지 않습니다.

---

**Q. 회사 컴퓨터에 설치해도 되나요?**

A. 100% 로컬 동작이므로 회사 데이터가 외부로 나가지 않습니다. 단, 회사 정책에 따라 외부 도구 설치가 제한될 수 있으니 IT 부서에 확인하세요.

---

**Q. Windows에서 경로에 한글이 있어도 되나요?**

A. 경로에 한글(예: `C:\사용자\홍길동`)이 포함된 경우 일부 Node.js 스크립트에서 오류가 날 수 있습니다. 가능하면 영문 경로를 권장합니다.

---

**Q. 인터넷이 없어도 사용할 수 있나요?**

A. 초기 다운로드 후에는 **100% 오프라인**으로 동작합니다. Claude Code 자체는 Anthropic 서버에 연결이 필요하지만, 소담 가족 플러그인은 인터넷이 없어도 동작합니다.

---

**Q. 업데이트는 어떻게 하나요?**

A. 각 형제의 GitHub 페이지에서 최신 버전을 다운로드하여 같은 방법으로 재설치합니다. 기존 설정 파일 덮어쓰기 전에 백업하세요.

---

## 13. 라이선스·저작권·상업적 사용

### Apache License 2.0 상세

소담 가족 6형제 모두 **Apache License Version 2.0**을 사용합니다.
전문은 각 형제 폴더의 `LICENSE` 파일에서 확인할 수 있습니다.

### 정확한 허용 범위

| 행위 | 허용 여부 | 조건 |
|------|---------|------|
| 개인 PC에서 사용 | ✅ 완전 무제한 | 없음 |
| 교육 목적 사용 | ✅ 완전 허용 | 없음 |
| 비상업적 팀 사용 | ✅ 허용 | 없음 |
| 소스 코드 학습·분석 | ✅ 허용 | 없음 |
| **상업적 서비스에 포함** | ✅ 허용 | 아래 조건 4가지 |
| **코드 수정 후 배포** | ✅ 허용 | 아래 조건 4가지 |
| **오픈소스 프로젝트에 포함** | ✅ 허용 | 아래 조건 4가지 |

### 상업적 사용·재배포 시 4가지 필수 조건

> 이 조건을 지키지 않으면 라이선스 위반이 됩니다.

**① LICENSE 파일 포함 (필수)**
배포물(앱, ZIP, npm 패키지 등)에 원본 `LICENSE` 파일을 반드시 포함해야 합니다.

**② NOTICE 파일 포함 (있는 경우)**
원본 `NOTICE` 파일이 있다면 반드시 포함해야 합니다.
(NOTICE 파일은 저작권자와 기여자 정보를 담고 있습니다.)

**③ 수정 사항 표시 (수정 시)**
소스 코드를 수정했다면 "이 파일은 원본에서 수정됨" 사실을 해당 파일에 명시해야 합니다.

**④ 저작권 표시 유지**
원본에 있는 저작권 표시(`Copyright © 2026 SoDam AI Studio`)를 제거하면 안 됩니다.

### 절대 할 수 없는 것

**상표 무단 사용 금지**:
- "SoDam AI Studio"라는 이름을 제품 추천·홍보 목적으로 사용 불가
- 예를 들어, 내 제품 광고에 "SoDam AI Studio 공인 파트너" 라고 쓰는 것 금지
- 허용: "이 제품은 SoDamHarness를 사용합니다" (사실 고지 목적)

**보증 주장 금지**:
- 개발자가 이 소프트웨어를 보증한다고 주장 불가
- "Anthropic 보증" 또는 "공식 추천 제품"이라고 쓰는 것 금지

**책임 전가 금지**:
- 이 도구를 사용해서 발생한 데이터 손실·손해에 대해 개발자에게 법적 책임을 물을 수 없습니다
- Apache-2.0은 "있는 그대로(AS IS)" 제공합니다

### 법적 고지 (면책 사항)

```
이 소프트웨어는 "있는 그대로(AS IS)" 제공되며,
명시적이거나 묵시적인 어떠한 보증도 없습니다.
사용으로 인한 손해에 대해 저작권자는 책임지지 않습니다.
(Apache License 2.0, Section 7 및 8)
```

> 이 도구는 참고용이며, 사용으로 인한 결과는 사용자 본인의 책임입니다.
> 중요 데이터는 반드시 별도 백업을 유지하세요.

### 특허 조항

Apache-2.0은 **기여자 특허 라이선스**를 포함합니다:
- 소담 가족 기여자들이 보유한 특허를 자유롭게 사용할 수 있습니다
- 단, 소담 가족에 대한 특허 소송을 제기하면 특허 라이선스가 자동 종료됩니다

---

*Apache-2.0 © 2026 SoDam AI Studio*
*이 가이드는 참고용이며, 최신 정보는 각 형제 GitHub 저장소를 확인하세요.*
