# SoDam 가족 번들 통합 명세 (Family Bundle Map)

> **캐노니컬 위치**: `D:\AI_Dev_Work\2026y\SoDam_Family\SODAM_FAMILY_MAP.md` (PRD 09 §9 지정 경로)
> PRD 05 F1 "번들 통합 명세(형제 충돌 차단)" 이행 문서.
> SoDam 7개 형제 프로젝트의 역할 경계·API 계약·버전 호환 규칙을 정의합니다.
>
> ⚠️ **2026-06-29 개정**: 4형제 → 6형제 확장 (Prompt·Reverse 추가), 시너지 갭 6개 등록.
> ⚠️ **2026-08-04 개정**: 6형제 → 7형제 확장 (Graph 추가). Graph는 나머지 형제 상태를 읽기 전용으로 판정하는 옵저버 — `deny`/`ask` 판정 권한 없음, 다른 형제 저장소를 절대 쓰지 않음. 출처: `SoDam-Graph-Eng/docs/FAMILY_CONTRACT_PROPOSAL.md`(2026-08-03, 그래프가 형제 저장소에 제출한 갱신안 8건 중 7번 항목).

---

## 0. 한 줄 원칙

> **"한 가지 일은 한 형제만 소유한다. 나머지는 위임한다. 절대 중복 구현하지 않는다."**

---

## 1. 7형제 역할 경계 (침범 절대 금지)

| 형제 | 한 단어 | **소유(이 형제만)** | **안 함(다른 형제 영역)** | Phase | 상태 |
|------|--------|---------------------|---------------------------|-------|------|
| 🛡️ **SoDamHarness** | 안전 | 위험작업 차단·백업·되돌리기·safety-rules 중앙 관리 | 컨텍스트 진단·처방 | 1 | ✅ AI 완료 |
| 📄 **SoDamContext** | 건강검진 | CLAUDE.md·AGENTS.md 건강검진·처방 | 주기 스케줄링·오케스트레이션 | 1 | ✅ AI 완료 |
| 🔁 **SoDamLoop** | 반복 | 정기 작업·훅 반복·스케줄 관리 | 컨텍스트 파일 직접 수정 | 1a | ✅ AI 완료 |
| 🧭 **SoDamAgentic** | 계획·검토 | 계획 먼저·변경점 쉬운말 검토·서브에이전트 오케스트레이션 | 안전 게이트 우회 | init-mvp | ✅ AI 완료 |
| ✍️ **SoDamPrompt** | 프롬프트 설계 | 초보용 한국어 글쓰기 스킬 10종 (무코드 SKILL.md), 6엔진 학습사다리 입구 | Context 문진(intake) 기능 중복 | Phase 1 완료 | ✅ v0.1.0 구현 완료 |
| 🔍 **SoDamReverse** | 역공학 | 외부 코드·앱 역공학 분석 Claude Code 플러그인, Harness safety-rules 주입 방식 | Context 검진(checkup) 기능 중복 | Phase 1~2 진행 | ✅ v0.1.0 라이브 성공 |
| 🗺️ **SoDamGraph** | 위치·진행 판정 | 7형제 위치·진행단계·의존관계를 지도로 판정(읽기 전용), `~/.sodam/graph-state.json` 발행 | 진행 판정을 다른 형제가 재구현·형제 저장소 쓰기 | Phase 1 (M0·M2 완료) | ✅ AI 진행 중 |

### "Context"라는 단어 혼동 해소 (★A1 갭 해소)

| 맥락 | "Context"의 의미 |
|------|-----------------|
| **SoDamContext 제품명** | CLAUDE.md·AGENTS.md **건강검진** 도구 (≠ 작업컨텍스트·세션메모) |
| Agentic PRD §8 구버전 | "작업 컨텍스트 설계·세션 메모·O-Brain 연결" → **구버전 정의, 폐기** |
| Context Engineering (기법) | AI에게 보내는 정보를 설계하는 기법 (SoDamPrompt 영역) |
| "컨텍스트 윈도우" | LLM의 입력 한계 (기술 용어) |

> **결정(2026-06-29)**: SoDamContext MVP = AI 사용설명서(CLAUDE.md/AGENTS.md) 건강검진·처방 도구.
> 세션 메모·작업컨텍스트 설계는 Phase 2 또는 별도 제품.

### 역할 명확화 (헷갈리기 쉬운 경계)

| 구분 | SoDamContext | SoDamPrompt | SoDamReverse |
|------|-------------|-------------|--------------|
| 무엇을 분석 | 내 AI 사용설명서(CLAUDE.md) 건강 | 내가 AI에게 보낼 지시문 설계 | 외부 앱·코드의 구조 |
| 주요 사용자 | Claude Code 사용자 | 프롬프트 작성자 | 역공학 분석가 |
| 출력 | 건강검진 JSON + 처방 | 완성된 프롬프트 문서 | 분석 리포트 |
| 형태 | CLI + Claude Code 플러그인 | Claude Code 플러그인 (SKILL.md 10종) | Claude Code 플러그인 |

---

## 2. 핵심 API 계약 (v0.1.x 기준)

### SoDam-Context (2026-07-15 실제 코드 대조 후 정정 — 이전 버전은 초안이라 필드가 실제와 달랐음)
```bash
# 검진
node lib/checkup-cli.mjs <파일경로> [--target claude|codex]
# 반환: {
#   ok: boolean,
#   file: string,        # 경로만 (T1: 파일 내용 미출력)
#   target: string,
#   exists: boolean,
#   secret: { found: boolean, count: number,
#     findings: [{ tier, severity, confidence, label, masked, line }] },  # 원문 값 없음(T1)
#   rules: { findings: [{ id, kind, confidence, severity, message, line }], lines, bytes },
#   suspects: { findings: [{ id, kind, confidence, severity, name, why, lines: number[], hit }] },  # hint_keyword 결정론 '의심'(낡음·자동생성미정제·스킬누수) — 이전 버전에 누락됐던 필드
#   aiSuspectQueue: [{ id, name, why }],  # hint_keyword 없어 규칙으로 못 잡는 항목(모순·맹목참조 등, 소개만)
#   summary: { problemCount: number }
# }
# sync-check(동기화 확인, 2026-07-12 신규): node lib/checkup-cli.mjs <CLAUDE.md경로> --action sync-check --target <AGENTS.md경로>
# 반환: { ok, applicable, onlyInClaude: number[], onlyInAgents: number[], claudeSafeCount, agentsSafeCount }

# 처방 미리보기
node lib/checkup-cli.mjs <파일경로> --action preview
# 반환: { ok, file, originalLines, proposedLines, removedCount, shrunk, safe }

# 처방 적용 (사용자 확인 후에만 호출)
node lib/checkup-cli.mjs <파일경파> --action apply
# 반환: { ok, appliedPath, originalLines, proposedLines, removedCount }

# 백업
node lib/checkup-cli.mjs <파일경로> --action backup
# 반환: { ok, verified, snapDir, manifest }
```

### SoDam-Harness backup CLI (Phase 1 확정: 미사용 — 각 플러그인 독립 실행)

> **결정(2026-06-29)**: Phase 1에서 Harness backup CLI는 **호출하지 않는다.**
> Loop·Context·Agentic 각자 독립 `backup.mjs`를 직접 실행. 이유: Harness CLI 미정의.

```bash
# Phase 1: 각 플러그인 독립 backup.mjs 사용 (Harness CLI 호출 안 함)
# sodamharness backup <파일경로>   ← Phase 2 이후 확정 예정

# 이관 조건 (SODAM_FAMILY_MAP §6 GAP-2 — 모두 충족 시 이관):
# 1. Harness plugin.json 완성 + Claude marketplace 등록 확인
# 2. sodamharness backup 명령 인터페이스 확정 (exit 코드·JSON 스키마)
# 3. Harness e2e smoke test 통과 (사람 직접 검증)
# 4. Loop에서 sodamharness 비정상 종료 시 자체 폴백 동작 확인
```

이관 전 Harness에 보안 패치 발생 시: 동일 패치를 각 플러그인 backup.mjs에 수동 적용.

### SoDam-Loop (예정)
```bash
# sodamloop schedule <job-id> <cron-expr>
# 예상 반환: { ok: boolean, jobId: string, nextRun: string }
```

### SoDam-Prompt (v0.1.0 = SKILL.md 10종, 슬래시 커맨드 / 웹앱 폐기됨)
```
# 스킬 자연어 자동매칭 또는 슬래시 커맨드로 호출 (훅·서버·DB 없음, 무코드)
/book-report-helper "책 제목" "느낀 점"   # 예: 독후감
# 입력 변수 표준: $1 $2 $ARGUMENTS
```

### SoDam-Reverse (예정)
```bash
# sodamreverse scan <대상경로> [--depth <숫자>]
# 반환: { ok, target, findings: [...], reportPath }
```

### SoDam-Graph (2026-08-04 신설 — M0·M2 구현 완료)
```bash
# /graph-map · /graph-where · /graph-next · /graph-why · /graph-shadow · /graph-reject · /graph-undo (명령 7개)
```
**규약 F — 공유 상태 읽기 (형제가 그대로 붙여 쓰는 조각, 제안됨·형제 저장소 반영은 사용자 push 대기)**:
```js
// ~/.sodam/graph-state.json 읽기 (SoDam-Graph-Eng 제공)
import { readFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

export function readFamilyState() {
  try {
    const s = JSON.parse(readFileSync(join(homedir(), '.sodam', 'graph-state.json'), 'utf8'));
    if (s.version !== 1) return null;
    const ageMin = (Date.now() - new Date(s.scanned_at).getTime()) / 60000;
    return { projects: s.projects, stale: ageMin > 60, ageMin };
  } catch { return null; } // 파일 없음·파싱 실패는 조용히 넘어감(Graph 미설치가 형제 동작을 막지 않음)
}
```
- 쓰기는 Graph 단독(형제가 쓰면 정본이 깨짐). 필드는 `id`·`name_ko`·`repo_root`·`state`·`resolve_status`·`scanned_at` 6개뿐(커밋 제목 등 민감정보 미포함).
- 출처: `SoDam-Graph-Eng/docs/FAMILY_CONTRACT_PROPOSAL.md` ④(2026-08-03).

---

## 3. 공유 상수 — ★2026-07-15 정정: 실측 결과 "동기화 대상" 자체가 없음

> 아래 표는 이전 버전에서 "Harness 보안게이트·스캔·Loop 예방 훅과 동기화 필수"라고 적었으나,
> `gh api`로 Harness-Eng(`data/safety-rules.json`·`hooks/safety-rules.json`)와 Loop-Eng(`loop-rules.json`)의
> 실제 내용을 직접 조회해 대조한 결과 **근거가 없었다** — 두 저장소 모두 위험한 셸 명령 패턴(`rm -rf`·
> `git push --force` 등)만 다룰 뿐, 비밀키 정규식·안전키워드 보존목록·CLAUDE.md 크기 한도 개념이
> 전혀 없다. 즉 Context의 아래 세 파일은 **동기화할 상대가 실제로 존재하지 않는다**(SoDam-Context-Eng
> `CHECKPOINT.md` 2026-07-15(14차 세션) 조사 기록 참고).

| 상수 | Context 파일 | 설명 | 실측 결과(2026-07-15) |
|------|------------|------|-----------|
| safe-keywords | `rules/safe-keywords.json` | 처방 절대 삭제 금지 키워드 | Harness에 대응 목록 없음(확인됨) — Context 단독 소유, 동기화 불필요 |
| secret-patterns | `rules/secret-patterns.json` | 비밀키 감지 패턴 | Harness에 비밀키 스캔 기능 자체가 없음(확인됨) — Context가 가족 내 유일한 비밀키 탐지 소유자 |
| thresholds | `rules/thresholds.json` | 크기 한도 (CLAUDE.md ≤200줄, AGENTS.md ≤32KiB) | Loop `loop-rules.json`엔 반복횟수·위험명령 토큰만 있고 크기 한도 개념 없음(확인됨) — 동기화 불필요 |

**진짜 존재하는 통합점(실측 확인)**: Harness `hooks/safety-rules.json`의 `plugins.context` 네임스페이스가
Context 전용으로 이미 예약돼 있음(`catastrophic`/`risky`/`sensitivePaths` 빈 배열, 설명: "`re-inject-context.mjs`로
주입"). 이 스크립트는 Context-Eng 어디에도 없어 **미구현** — 단, 이건 번들 동시설치 통합(가족 단위 선행 작업
필요, `SODAM_FAMILY_RISKS.md §4` "공유코어 1벌 먼저")이라 Context 단독으로 지금 만드는 건 범위 이탈로 판단해
착수하지 않음(검증 안 된 통합 코드를 미리 쌓는 위험 회피).

---

## 4. semver 호환 규칙

```
Major (x.0.0): 다른 형제 모두 호환성 검증 필수, marketplace.json 동시 업데이트
Minor (0.x.0): 기능 추가·하위 호환 유지, 개별 배포 가능
Patch (0.0.x): 버그 수정, 독립 배포 가능
```

**주의 케이스**:
- 공유 상수(safe-keywords, secret-patterns) 변경 → Minor 이상, 모든 형제에 공지
- API 시그니처 변경 → Major, 영향받는 형제 사전 협의 필수
- CLAUDE.md 줄 수 한도 변경 → thresholds.json + Loop 예방 훅 동시 업데이트

---

## 5. 의존 방향 (단방향, 순환 금지)

```
Harness (L0) ← 기반, 모든 형제가 의존 가능
    ↑
Context (L1) ← Harness 없을 때 독립 폴백 내장
    ↑
Loop (L2)    ← Context 이벤트 수신 → 정기 점검 스케줄
Agentic (L2) ← Context 리포트 소비 → 개선 계획 생성
    ↑
Prompt (L3), Reverse (L3) ← 6형제 학습사다리 입구/외부 분석

Graph (독립 트랙) ← 어느 형제에도 의존하지 않음. 형제 저장소를 읽기 전용으로만 훑어
                     ~/.sodam/graph-state.json 발행. 설치 순서 어디에 끼워도 무방.
```

**6엔진 학습 사다리 (Prompt §7)**: Prompt → Context → Loop → Harness → Agentic → Reverse
**Graph는 사다리 밖**: 학습 입구가 아니라 7형제 전체를 내려다보는 지도 — 독립 설치 트랙.

**순환 금지**: `Context → Harness` 허용. `Harness → Context` 금지.

---

## 6. 확인된 시너지 갭 (2026-06-29 기준)

| # | 갭 | 위험도 | 현황 |
|---|---|---|---|
| GAP-1 | Harness `.claude-plugin/plugin.json` 존재 여부 확인 필요 | 🔴 치명 | 파일 glob으로 발견됨 — 내용 검증 필요 |
| GAP-2 | Loop backup.mjs = Harness 복사본, 이관 트리거 미문서화 | 🔴 치명 | Loop PRD 갱신 필요 |
| GAP-3 | Context checkup 출력에 기계-소비 API 계약 없음 | 🟠 완화 | §2를 실제 코드와 대조해 정확도 검증 완료(2026-07-15, 이전 버전은 필드가 실제와 다른 초안이었음). 단 이 계약을 실제로 소비하는 형제 코드는 아직 없어 상호운용 실증은 미완 |
| GAP-4 | SODAM_FAMILY_MAP 임시위치(Context-Eng) | ✅ 해소 | 이 파일 = 정본 |
| GAP-5 | Agentic에서 "Context" = 세션메모 정의 충돌 | ✅ 해소 | §1 A1 섹션으로 명문화, Agentic PRD 수정 필요 |
| GAP-6 | SODAM_FAMILY_MAP Prompt/Reverse 역할 오표기 | ✅ 해소 | 이 파일에 6형제 반영 완료 |
| GAP-7 | Graph→형제 계약 갱신안(family-synergy.md 등 8건) 작성 완료, 형제 저장소 미반영 | 🟠 대기 | Graph는 읽기전용이라 직접 못 씀. 이 우산 저장소(항목 7번)는 이번에 반영 완료, 나머지 7곳은 **사용자 직접 복사·push 대기**(`SoDam-Graph-Eng/docs/FAMILY_CONTRACT_PROPOSAL.md` 참고). ⚠️ **붙여넣을 때 주의**: 규약 E(SessionStart 출력예산)는 **문서일 뿐 자동 강제 수단이 없음** — 붙여넣는 문구 끝에 "이 규약은 자동 검사되지 않으며, 신규 SessionStart 훅 작성 시 수동 준수가 필요합니다" 한 줄을 반드시 같이 넣을 것(안 그러면 "반영 완료=문제 방지 완료"로 오인됨) |

### Loop backup.mjs 이관 트리거 명문화 (GAP-2)

Loop `backup.mjs`는 현재 Harness `backup.mjs`의 **독립 복사본**이다. 의도적이나 이관 트리거 미정.

**이관 조건 (모두 충족 시 Loop backup.mjs → Harness 호출로 교체)**:
1. Harness `plugin.json` 완성 + Claude marketplace 등록 확인
2. `sodamharness backup <파일>` 명령 인터페이스 확정 (exit 코드·JSON 스키마)
3. Harness e2e smoke test 통과 (사람 직접 검증)
4. Loop에서 `sodamharness` 비정상 종료 시 자체 폴백 동작 확인

**이관 전 Harness에 보안 패치 발생 시**: 같은 패치를 Loop backup.mjs에도 수동 적용.

---

## 7. 버전 현황 (2026-08-04 갱신, 이전 2026-06-29)

| 프로젝트 | 현재 버전 | Phase |
|---------|---------|-------|
| Harness | 0.1.0 | 완료 |
| Context | 0.1.0 | 완료 |
| Loop | 0.1.0 | 완료 |
| Agentic | 0.1.0 | 완료 |
| Prompt | 0.1.0 | 완료 |
| Reverse | 0.1.0 | 진행 중 |
| Graph | 0.1.0 | 진행 중 |

> ℹ️ 테스트 통과 수·브랜치명·세부 블로커 같은 상세 개발 진행상황은 이 저장소가 PUBLIC 전환(2026-08-04)되며 별도 관리로 분리했습니다 — 형제 저장소 대부분이 아직 PRIVATE 상태라 세부 노출을 최소화하기 위함입니다.

---

> 최종 수정: 2026-08-04 (7형제 확장 반영 — Graph 추가) · **PUBLIC 전환에 따라 §7 세부 수치를 개략화**(상세는 로컬 전용 관리) ·
> 이전: 2026-07-15(§2 API 계약·§3 공유상수 실제 코드 대조 정정, GAP-3 완화) · 2026-07-13(§1·§2·§7 Prompt/Reverse 실측) · 4형제(2026-06-21) → 6형제(2026-06-29) → 7형제(2026-08-04).
