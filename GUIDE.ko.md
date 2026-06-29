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

## 11장. 문제·오류 대처 방법

> 처음에는 누구나 막힙니다. 당황하지 말고 아래 목록을 찾아보세요.

이 장은 자주 발생하는 문제 상황과 해결 방법을 모았습니다.
증상별로 찾을 수 있도록 정리했습니다.

---

### 🔴 문제 1: 명령어를 입력해도 아무 반응이 없어요

**증상**: `/sodam-harness-status` 같은 명령어를 입력했는데 Claude가 모른다고 하거나 그냥 넘어갑니다.

**원인과 해결 방법**:

1. **Claude Code를 완전히 재시작하세요.**
   플러그인은 처음 시작할 때만 불러옵니다. 설치 후 재시작하지 않으면 명령어가 작동하지 않습니다.
   터미널을 완전히 닫았다가 다시 열고 `claude` 명령어로 재시작하세요.

2. **플러그인이 제대로 설치됐는지 확인하세요.**
   Claude Code에서 다음을 입력하세요: `/sodam-harness-status`
   "명령어를 찾을 수 없습니다"라고 나오면 설치가 안 된 것입니다.
   5장 설치 방법으로 돌아가서 다시 설치하세요.

3. **명령어 앞의 `/` 슬래시를 빠뜨리지 않았는지 확인하세요.**
   `sodam-harness-status` (X) → `/sodam-harness-status` (O)

---

### 🔴 문제 2: "node를 찾을 수 없습니다" 오류가 납니다

**증상**: `node: command not found` 또는 `'node'은(는) 내부 또는 외부 명령...` 오류

**원인**: Node.js가 설치되지 않았거나, 설치됐어도 경로가 연결되지 않은 상태입니다.

**해결 방법**:
1. [nodejs.org](https://nodejs.org) 에 접속합니다.
2. 초록색 "LTS" 버튼을 눌러 다운로드합니다 (LTS = 안정적인 버전).
3. 설치 프로그램을 실행하고 "다음(Next)"을 계속 눌러 설치합니다.
4. 컴퓨터를 **완전히 재시작**합니다.
5. 터미널을 새로 열어서 `node --version`을 입력해 숫자가 나오면 성공입니다.

---

### 🔴 문제 3: 루프가 멈추지 않아요

**증상**: `/sodam-loop-start`로 시작한 작업이 계속 돌고 있는데 멈추는 방법을 모르겠어요.

**해결 방법** (순서대로 시도):

1. **Claude 채팅창에 입력**: `/sodam-loop-stop`
2. 그래도 안 되면: **Ctrl + C** 를 눌러 터미널을 강제 중단합니다.
3. 그래도 안 되면: **터미널 창을 완전히 닫습니다.**
4. 재시작 후 루프가 남긴 파일을 확인하고 필요하면 `/sodam-harness-undo`로 되돌립니다.

> **예방 방법**: 루프 시작 전에 최대 반복 횟수를 8회 이하로 설정하세요.
> 8회 이상은 SoDamLoop가 자동으로 막아줍니다.

---

### 🔴 문제 4: 파일이 잘못 바뀌었어요. 되돌리고 싶어요

**증상**: Claude가 파일을 수정했는데 원하지 않는 방향으로 바뀌었습니다.

**해결 방법**:

1. **SoDamHarness가 설치된 경우**: `/sodam-harness-undo`를 입력하면
   마지막 백업 시점으로 되돌아갑니다.

2. **어느 시점으로 돌아갈지 고를 경우**: Claude에게 말하세요.
   "`.sodamharness/backups/` 폴더 안에 있는 백업 목록을 보여줘"

3. **Git을 사용 중인 경우**: `git status`로 변경된 파일 확인 후
   `git checkout -- 파일이름`으로 되돌릴 수 있습니다.

4. **백업도 없고 Git도 없는 경우**: 안타깝지만 이전 내용을 복구하기 어렵습니다.
   앞으로는 SoDamHarness를 먼저 설치하고 작업하세요.

---

### 🔴 문제 5: 영어 오류 메시지가 나와서 무슨 뜻인지 모르겠어요

**증상**: 빨간 글씨나 알 수 없는 영어 오류가 화면에 나타납니다.

**해결 방법**:

1. 오류 메시지 전체를 **마우스로 드래그해서 복사**합니다.
2. Claude 채팅창에 붙여넣고 이렇게 물어보세요:
   `"이 오류 메시지가 무슨 뜻이고 어떻게 해결하면 돼?"`
3. Claude가 한국어로 설명해 주고 해결 방법도 알려줍니다.

> **팁**: 오류가 길어도 괜찮습니다. 전체를 복사해서 붙여넣으세요.
> 오류의 일부만 복사하면 정확한 원인을 찾기 어렵습니다.

---

### 🔴 문제 6: 백업 폴더가 너무 커졌어요 (저장 공간 부족)

**증상**: 컴퓨터 저장 공간이 부족하다는 경고가 나옵니다.

**해결 방법**:

1. 파일 탐색기(윈도우) 또는 Finder(맥)를 엽니다.
2. 홈 폴더 안의 `.sodamharness` 폴더를 찾습니다.
   - Windows: `C:\Users\이름\.sodamharness\backups\`
   - Mac/Linux: 홈 폴더 안 `.sodamharness/backups/`
3. 오래된 날짜 폴더(예: 1주일 이상 된 것)를 삭제합니다.
4. 최근 2~3일치는 남겨두세요.

> **숨김 폴더가 안 보이면**: `.`으로 시작하는 폴더는 숨겨져 있습니다.
> Windows: 탐색기 → 보기 → 숨긴 항목 체크
> Mac: Finder에서 Cmd + Shift + . 누르기

---

### 🔴 문제 7: SoDamContext가 CLAUDE.md를 너무 많이 바꿨어요

**증상**: `/sodam-context-treat`를 실행했더니 원하지 않는 내용이 바뀌었습니다.

**해결 방법**:

1. `/sodam-harness-undo`로 직전 상태로 되돌립니다.
2. 다음번에는 `/sodam-context-treat` 전에 나오는 **변경 미리보기**를
   꼼꼼히 읽고 "취소"를 선택하는 연습을 하세요.
3. CLAUDE.md를 직접 열어서 원하는 내용으로 수동으로 고칩니다.

> **안전 보장**: SoDamContext의 T8 원칙에 따라
> "절대 지우지 마", "항상 해줘" 같은 안전 키워드가 포함된 줄은
> 절대 삭제하지 않습니다.

---

### 🔴 문제 8: Claude Code 자체가 실행이 안 돼요

**증상**: `claude` 명령어를 입력해도 "명령을 찾을 수 없습니다"라고 나옵니다.

**해결 방법**:

1. Node.js가 설치됐는지 확인: 터미널에서 `node --version` 입력
2. Claude Code 재설치: `npm install -g @anthropic-ai/claude-code`
3. 터미널 재시작 후 다시 시도
4. 그래도 안 되면 컴퓨터 자체를 재시작한 후 시도

---

### 🔴 문제 9: API 키 오류가 납니다

**증상**: `Invalid API key` 또는 `Authentication failed` 오류

**해결 방법**:

1. [claude.ai](https://claude.ai) 또는 [console.anthropic.com](https://console.anthropic.com)에 로그인합니다.
2. API 키 메뉴에서 새 키를 발급합니다.
3. Claude Code에서 `/logout` 후 `/login`을 다시 합니다.
4. 또는 터미널에서 `export ANTHROPIC_API_KEY=새로운키값` 입력 후 재시작

> **주의**: API 키는 절대 다른 사람에게 알려주거나 파일에 직접 써두지 마세요.

---

### 🔴 문제 10: 플러그인 업데이트 후 명령어가 바뀌었어요

**증상**: 예전에 쓰던 명령어가 갑자기 "알 수 없는 명령"이라고 합니다.

**해결 방법**:

1. 각 플러그인 폴더 안의 `README.ko.md`를 열어 최신 명령어 목록을 확인합니다.
2. `/sodam-harness-status`를 실행하면 현재 사용 가능한 명령어 목록이 나옵니다.
3. 이 가이드의 9장을 다시 확인합니다.

---

### 🔴 문제 11: 한글이 깨져서 나와요

**증상**: 출력 결과에 글자가 이상하게 나오거나 네모(□) 표시가 뜹니다.

**해결 방법**:

- **Windows PowerShell**: `chcp 65001` 입력 후 엔터, 그 다음 Claude Code 재시작
- **Windows 터미널(Terminal 앱)**: 설정 → 프로필 → 고급 → 텍스트 인코딩 → UTF-8
- **Mac/Linux**: 보통 자동으로 한글이 잘 나옵니다. 문제 시 터미널 재시작

---

### 🆘 그래도 해결이 안 된다면

1. Claude 채팅창에 상황을 자세히 설명하세요. 예:
   `"소담루프를 설치했는데 /sodam-loop-start 명령어가 작동하지 않아. 이런 오류가 나: [오류 내용]"`

2. SoDam Family GitHub 저장소의 Issues 탭에 질문을 올리세요.

3. 오류 화면을 캡처해서 함께 올리면 더 빨리 도움받을 수 있습니다.

---

## 12장. FAQ (자주 묻는 질문)

> 많은 분들이 비슷한 질문을 합니다. 여기서 먼저 확인해보세요.

---

### 💰 비용·요금

**Q1. SoDam Family 플러그인은 무료인가요?**

네, SoDam Family 플러그인 자체는 **무료**입니다.
Apache-2.0 오픈소스 라이선스로 누구나 무료로 사용·수정·배포할 수 있습니다.

단, 플러그인이 동작하려면 **Claude Code**와 **Anthropic API**가 필요합니다.
Claude Code는 무료이지만, API 사용량에 따라 Anthropic에서 요금이 청구될 수 있습니다.
자세한 요금은 [anthropic.com/pricing](https://anthropic.com/pricing)을 확인하세요.

---

**Q2. 상업적으로 사용해도 되나요?**

네, 가능합니다. Apache-2.0 라이선스는 상업적 이용을 허용합니다.
다만, 저작권 고지와 라이선스 사본을 반드시 포함해야 합니다.
자세한 내용은 13장을 참고하세요.

---

**Q3. 자동 결제되거나 구독이 생기지 않나요?**

SoDam Family 플러그인 자체는 별도 구독이나 자동 결제가 없습니다.
Anthropic API 사용에 따른 요금은 여러분이 직접 Anthropic 계정에서 관리합니다.
예상치 못한 요금 청구를 막으려면 Anthropic 콘솔에서 사용량 한도를 설정하세요.

---

### 🔒 개인정보·보안

**Q4. 내 코드나 파일이 외부로 전송되나요?**

SoDam Family 플러그인 자체는 어떤 데이터도 외부 서버로 보내지 않습니다.
모든 데이터는 여러분의 컴퓨터 안에만 저장됩니다.

단, Claude(AI)에게 보내는 내용은 Anthropic의 서버를 거칩니다.
이것은 SoDam 플러그인과 상관없이 Claude Code 자체의 동작 방식입니다.
Anthropic의 개인정보 처리 방침은 [anthropic.com/privacy](https://anthropic.com/privacy)를 확인하세요.

---

**Q5. 회사 기밀 코드를 다뤄도 안전한가요?**

SoDam Family 플러그인 자체는 기밀 코드를 외부로 보내지 않습니다.
그러나 Claude에게 코드를 보여주면 Anthropic 서버를 통해 처리됩니다.
회사 보안 정책에 따라 외부 AI 서비스 사용이 제한될 수 있으니
회사 IT 정책을 먼저 확인하세요.

기밀 코드 보호가 걱정된다면 출시 예정인 **SoDamReverse** 플러그인을 기다려 주세요.

---

### 💻 운영체제·환경

**Q6. Windows, Mac, Linux 모두 지원하나요?**

네, 세 운영체제 모두 지원합니다.
단, Node.js와 Claude Code가 먼저 설치되어 있어야 합니다.
운영체제별 설치 방법 차이는 5장을 참고하세요.

---

**Q7. 스마트폰(휴대폰)에서도 사용할 수 있나요?**

현재는 **컴퓨터(PC·노트북)에서만** 사용할 수 있습니다.
Claude Code는 터미널(명령줄)이 필요한 도구라 스마트폰 지원이 어렵습니다.
스마트폰에서 Claude를 쓰려면 [claude.ai](https://claude.ai) 웹사이트나 앱을 이용하세요
(단, SoDam 플러그인은 사용 불가).

---

**Q8. 인터넷이 없어도 사용할 수 있나요?**

SoDam Family 플러그인의 파일 처리 기능 일부는 오프라인으로도 동작합니다.
그러나 Claude(AI 응답)를 받으려면 인터넷 연결이 필수입니다.
Claude는 Anthropic 서버와 통신해야 하기 때문입니다.

---

### ⚙️ 설치·설정

**Q9. SoDamHarness 없이 다른 플러그인만 써도 되나요?**

기술적으로는 가능합니다.
그러나 **SoDamHarness는 다른 모든 플러그인의 안전망** 역할을 합니다.
Harness 없이 Loop나 Agentic을 쓰면 실수로 파일이 삭제되거나 변경될 때 되돌릴 수 없습니다.
강력히 **SoDamHarness를 가장 먼저 설치**할 것을 권장합니다.

---

**Q10. 여러 플러그인을 동시에 써도 되나요?**

네, 함께 사용하도록 설계되어 있습니다.
SoDam Family 6형제는 서로 충돌하지 않으며, 함께 사용할수록 더 강력해집니다.
예: Harness(안전망) + Loop(자동화) + Agentic(계획) 조합을 많이 씁니다.

---

**Q11. 플러그인을 제거하고 싶으면 어떻게 하나요?**

각 플러그인은 다음 명령어로 제거할 수 있습니다:
- SoDamHarness: `/sodam-harness-uninstall`
- SoDamLoop: `/sodam-loop-uninstall`
- SoDamContext: 설치 폴더를 직접 삭제

제거해도 기존 작업 파일이나 프로젝트 코드는 영향받지 않습니다.

---

**Q12. 자동 업데이트가 되나요?**

현재 버전에서는 자동 업데이트 기능이 없습니다.
새 버전이 나오면 GitHub에서 공지하며, 수동으로 재설치해야 합니다.
향후 버전에서 자동 업데이트 기능 추가를 검토 중입니다.

---

### 🔧 사용 방법

**Q13. Claude가 한국어로 대답하지 않아요**

CLAUDE.md 파일에 다음 내용을 추가하세요:
`항상 한국어로 대답해. 영어는 쓰지 마.`

또는 Claude에게 직접 말하세요: "앞으로는 항상 한국어로만 대답해줘"
그 다음 `/sodam-context-intake`를 실행하면 이 규칙이 저장됩니다.

---

**Q14. 루프(Loop) 작업 중에 Claude가 이상한 짓을 하면 어떻게 막나요?**

SoDamHarness가 설치되어 있으면 위험한 행동(파일 삭제, 민감한 코드 수정 등)을
자동으로 감지해서 차단합니다.
그래도 걱정된다면 루프 시작 전에 `/sodam-harness-trust` 수준을 확인하세요.

---

**Q15. 계획서(Plan)가 마음에 안 들면 수정할 수 있나요?**

네, `/sodam-agentic-plan`이 계획서를 보여주면 실행 전에 내용을 바꿀 수 있습니다.
Claude에게 "3번 단계를 이렇게 바꿔줘"라고 말하면 됩니다.
계획서에 동의한 다음에만 실제 작업이 시작됩니다.

---

**Q16. 백업은 언제까지 보관되나요?**

SoDamHarness가 만드는 백업은 자동으로 삭제되지 않습니다.
여러분이 직접 관리해야 합니다.
백업 폴더가 커지면 11장의 "문제 6" 해결 방법을 참고해서 오래된 것을 지우세요.

---

**Q17. 여러 프로젝트에서 동시에 쓸 수 있나요?**

네, 가능합니다.
각 프로젝트 폴더에서 Claude Code를 열면 해당 폴더를 기준으로 작동합니다.
단, 여러 터미널 창에서 동시에 루프를 실행하면 파일 충돌이 날 수 있으니 주의하세요.

---

**Q18. CLAUDE.md가 없어도 되나요?**

CLAUDE.md가 없어도 Claude Code와 플러그인은 동작합니다.
다만 CLAUDE.md가 있으면 Claude가 더 정확하게 여러분의 의도를 파악합니다.
처음에는 없어도 되지만, 프로젝트가 복잡해질수록 만들어 두는 것이 좋습니다.

---

**Q19. 플러그인이 업데이트되면 기존 설정이 날아가나요?**

아니요. 플러그인 업데이트 시 데이터 폴더(`.sodamharness/` 등)는 보존됩니다.
plugin.json 등 핵심 설정 파일만 새 버전으로 교체됩니다.
그러나 업데이트 전에 중요한 설정은 별도로 메모해두는 것이 안전합니다.

---

**Q20. 오픈소스라서 누가 악용할 수도 있지 않나요?**

오픈소스이기 때문에 오히려 안전합니다.
누구나 코드를 볼 수 있어서 숨겨진 나쁜 기능(악성코드 등)을 감추기 어렵습니다.
SoDam Family의 모든 코드는 GitHub에 공개되어 있으며,
커뮤니티가 함께 검토합니다.

---

**Q21. Claude Code 없이 SoDam 플러그인만 쓸 수 있나요?**

아니요. SoDam Family 플러그인은 Claude Code 위에서 동작합니다.
Claude Code가 반드시 설치되어 있어야 합니다.

---

**Q22. 여러 컴퓨터에서 같은 설정을 쓰고 싶어요**

현재는 설정 동기화 기능이 없습니다.
여러 컴퓨터에서 같은 설정을 쓰려면 플러그인을 각 컴퓨터에 개별 설치해야 합니다.
CLAUDE.md 파일은 Git으로 관리하면 여러 컴퓨터에서 공유할 수 있습니다.

---

## 13장. 라이선스·저작권·상업적 사용

> 법률 용어가 어렵게 느껴지시죠? 쉽게 풀어서 설명합니다.

---

### 📜 Apache License 2.0이란?

SoDam Family는 **Apache License 2.0** 라이선스로 배포됩니다.

Apache 2.0은 세계에서 가장 널리 쓰이는 오픈소스 라이선스 중 하나입니다.
Google, Microsoft, Amazon 같은 대기업들도 이 라이선스를 사용합니다.

**쉽게 말하면**: "마음대로 쓰세요. 단, 출처는 밝혀주세요."

---

### ✅ 할 수 있는 것 (허용)

| 허용 항목 | 설명 |
|---|---|
| **자유 사용** | 개인·업무·학교·연구 등 어떤 목적으로든 사용 가능 |
| **수정** | 코드를 마음대로 고쳐서 사용 가능 |
| **재배포** | 원본 또는 수정본을 다른 사람에게 나눠줄 수 있음 |
| **상업적 이용** | 돈을 받는 프로젝트나 제품에 사용 가능 |
| **특허 사용** | SoDam AI Studio가 보유한 관련 특허를 무료로 사용 가능 |
| **서브라이선싱** | 다른 라이선스와 함께 묶어서 배포 가능 (조건 준수 시) |

---

### 📋 지켜야 할 조건

Apache 2.0을 사용할 때 반드시 지켜야 할 것들입니다.

#### 1. 저작권 고지 유지
원본 파일의 저작권 표시(`Copyright 2026 SoDam AI Studio`)를 삭제하면 안 됩니다.
파일을 수정하더라도 원본 저작권 표시는 그대로 두어야 합니다.

#### 2. 라이선스 사본 포함
배포할 때 `LICENSE` 파일(Apache 2.0 원문)을 함께 포함해야 합니다.
없으면 `apache.org/licenses/LICENSE-2.0`에서 복사해서 추가하세요.

#### 3. 수정 사항 명시
코드를 수정해서 배포할 경우, "원본에서 이 부분을 바꿨다"고 명시해야 합니다.
`NOTICE` 파일이나 코드 주석에 수정 내용을 기록하면 됩니다.

#### 4. NOTICE 파일 전달
원본에 `NOTICE` 파일이 있으면 배포 시 그 파일도 함께 포함해야 합니다.

---

### ❌ 하면 안 되는 것 (금지)

| 금지 항목 | 설명 |
|---|---|
| **상표 무단 사용** | "SoDam", "SoDam AI Studio" 이름·로고를 허가 없이 쓰는 것 |
| **저작권 표시 삭제** | 파일에서 저작권 문구를 지우는 것 |
| **라이선스 표시 삭제** | Apache 2.0 라이선스 표시를 없애는 것 |
| **원저작자 사칭** | SoDam AI Studio가 만든 것처럼 속이는 것 |

---

### ⚠️ 보증 없음 (NO WARRANTY) 안내

Apache 2.0 라이선스는 **"있는 그대로(AS IS)"** 제공됩니다.

쉽게 말하면:
- SoDam Family 플러그인을 사용하다가 발생한 문제에 대해
  SoDam AI Studio는 법적 책임을 지지 않습니다.
- 플러그인이 항상 완벽하게 작동한다고 보장하지 않습니다.
- 사용으로 인한 데이터 손실, 업무 중단, 금전적 손해에 대해
  저작권자는 배상 의무가 없습니다.

이것은 모든 오픈소스 소프트웨어의 표준 조항입니다.
중요한 작업에는 SoDamHarness로 백업을 꼭 설정하세요.

---

### 🏷️ "Claude"·"Claude Code" 상표권 안내

이 플러그인 문서에서 언급하는 **"Claude"**와 **"Claude Code"**는
**Anthropic PBC**의 등록 상표입니다.

SoDam Family는 Anthropic의 공식 제품이 아닙니다.
Claude Code 위에서 동작하는 독립적인 오픈소스 플러그인입니다.
SoDam AI Studio는 Anthropic과 제휴 관계가 아닙니다.

---

### 💼 상업적 이용 체크리스트

SoDam Family를 상업적 프로젝트에 사용하기 전에 아래를 확인하세요.

- [ ] 배포 파일에 `LICENSE` (Apache 2.0 원문) 포함했는가?
- [ ] 원본 저작권 표시(`Copyright 2026 SoDam AI Studio`)를 유지했는가?
- [ ] 코드를 수정했다면 수정 사항을 명시했는가?
- [ ] "SoDam" 이름이나 로고를 허가 없이 제품명에 쓰지 않았는가?
- [ ] Anthropic API 사용 약관을 별도로 확인했는가?
- [ ] 회사 내부 보안 정책과 충돌이 없는지 확인했는가?

모든 항목에 체크가 됐다면 상업적으로 자유롭게 사용할 수 있습니다.

---

### 👩‍⚖️ 법률 전문가 상담 권고

이 설명은 Apache 2.0 라이선스를 **쉽게 풀어쓴 것**입니다.
법적 구속력은 `LICENSE` 파일의 영문 원본에 있습니다.

중요한 상업적 결정이나 법적 판단이 필요한 경우에는
반드시 **법률 전문가(변호사)**와 상담하시기 바랍니다.
이 가이드는 법률 조언이 아니며, 법적 효력이 없습니다.

---

### 📬 저작권 문의

라이선스 관련 문의사항은 SoDam Family GitHub 저장소의
Issues 또는 Discussions 탭을 이용해 주세요.

---

## 마치며

SoDam Family를 선택해 주셔서 감사합니다.

AI 도구는 처음에는 낯설고 어렵게 느껴지지만,
조금씩 쓰다 보면 어느새 든든한 작업 동반자가 됩니다.

SoDam Family 6형제가 여러분의 작업을 안전하고 효율적으로 만들어드리겠습니다.

궁금한 점이 있으면 언제든지 Claude에게 물어보세요.
그리고 이 가이드를 북마크해두고, 막히는 부분이 있을 때마다 돌아오세요.

**함께하면 더 잘할 수 있습니다. 소담 파밀리와 함께하세요.**

---

*Copyright 2026 SoDam AI Studio — Apache License 2.0*
