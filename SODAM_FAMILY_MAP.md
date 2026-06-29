# SoDam 가족 번들 통합 명세 (Family Bundle Map)

> **캐노니컬 위치**: `D:\AI_Dev_Work\2026y\SoDam_Family\SODAM_FAMILY_MAP.md` (PRD 09 §9 지정 경로)
> PRD 05 F1 "번들 통합 명세(형제 충돌 차단)" 이행 문서.
> SoDam 6개 형제 프로젝트의 역할 경계·API 계약·버전 호환 규칙을 정의합니다.
>
> ⚠️ **2026-06-29 개정**: 4형제 → 6형제 확장 (Prompt·Reverse 추가), 시너지 갭 6개 등록.

---

## 0. 한 줄 원칙

> **"한 가지 일은 한 형제만 소유한다. 나머지는 위임한다. 절대 중복 구현하지 않는다."**

---

## 1. 6형제 역할 경계 (침범 절대 금지)

| 형제 | 한 단어 | **소유(이 형제만)** | **안 함(다른 형제 영역)** | Phase | 상태 |
|------|--------|---------------------|---------------------------|-------|------|
| 🛡️ **SoDamHarness** | 안전 | 위험작업 차단·백업·되돌리기·safety-rules 중앙 관리 | 컨텍스트 진단·처방 | 1 | ✅ AI 완료 |
| 📄 **SoDamContext** | 건강검진 | CLAUDE.md·AGENTS.md 건강검진·처방 | 주기 스케줄링·오케스트레이션 | 1 | ✅ AI 완료 |
| 🔁 **SoDamLoop** | 반복 | 정기 작업·훅 반복·스케줄 관리 | 컨텍스트 파일 직접 수정 | 1a | ✅ AI 완료 |
| 🧭 **SoDamAgentic** | 계획·검토 | 계획 먼저·변경점 쉬운말 검토·서브에이전트 오케스트레이션 | 안전 게이트 우회 | init-mvp | ✅ AI 완료 |
| ✍️ **SoDamPrompt** | 프롬프트 설계 | 웹앱 기반 프롬프트 작성 도구 (Next.js+Supabase), 6엔진 학습사다리 입구(L1) | Context 문진(intake) 기능 중복 | Phase 1 착수 준비 | PRD 8개 완성 |
| 🔍 **SoDamReverse** | 역공학 | 외부 코드·앱 역공학 분석 Claude Code 플러그인, Harness safety-rules 주입 방식 | Context 검진(checkup) 기능 중복 | Phase 1 착수 준비 | PRD 9개 완성 |

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
| 형태 | CLI + Claude Code 플러그인 | Next.js 웹앱 (Phase 1) | Claude Code 플러그인 |

---

## 2. 핵심 API 계약 (v0.1.x 기준)

### SoDam-Context (확정됨 ✅)
```bash
# 검진
node lib/checkup-cli.mjs <파일경로> [--target claude|codex]
# 반환: {
#   ok: boolean,
#   file: string,        # 경로만 (T1: 파일 내용 미출력)
#   target: string,
#   exists: boolean,
#   secret: { found, count, findings: [{ line, pattern }] },
#   rules: { findings: [{ id, name, line, bytes }], lines, bytes },
#   aiSuspectQueue: [{ id, name, why }],
#   summary: { problemCount }
# }

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

### SoDam-Prompt (Phase 1 = 웹앱 REST API, Phase 2 = SKILL.md export)
```
# Phase 1: Next.js API routes (확정 예정)
# Phase 2: SKILL.md export → Claude Code 플러그인 마켓 1급화
```

### SoDam-Reverse (예정)
```bash
# sodamreverse scan <대상경로> [--depth <숫자>]
# 반환: { ok, target, findings: [...], reportPath }
```

---

## 3. 공유 상수 (형제 간 동기화 필수)

| 상수 | Context 파일 | 설명 | 변경 시 영향 |
|------|------------|------|-----------|
| safe-keywords | `rules/safe-keywords.json` | 처방 절대 삭제 금지 키워드 | Harness 보안게이트와 동일 목록 유지 필수 |
| secret-patterns | `rules/secret-patterns.json` | 비밀키 감지 패턴 | Harness 스캔과 불일치 시 오탐·미탐 발생 |
| thresholds | `rules/thresholds.json` | 크기 한도 (CLAUDE.md ≤200줄, AGENTS.md ≤32KiB) | Loop 예방 훅과 동기화 필요 |

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
```

**6엔진 학습 사다리 (Prompt §7)**: Prompt → Context → Loop → Harness → Agentic → Reverse

**순환 금지**: `Context → Harness` 허용. `Harness → Context` 금지.

---

## 6. 확인된 시너지 갭 (2026-06-29 기준)

| # | 갭 | 위험도 | 현황 |
|---|---|---|---|
| GAP-1 | Harness `.claude-plugin/plugin.json` 존재 여부 확인 필요 | 🔴 치명 | 파일 glob으로 발견됨 — 내용 검증 필요 |
| GAP-2 | Loop backup.mjs = Harness 복사본, 이관 트리거 미문서화 | 🔴 치명 | Loop PRD 갱신 필요 |
| GAP-3 | Context checkup 출력에 기계-소비 API 계약 없음 | 🔴 치명 | §2에 초안 작성됨, Phase 2 확정 |
| GAP-4 | SODAM_FAMILY_MAP 임시위치(Context-Eng) | ✅ 해소 | 이 파일 = 정본 |
| GAP-5 | Agentic에서 "Context" = 세션메모 정의 충돌 | ✅ 해소 | §1 A1 섹션으로 명문화, Agentic PRD 수정 필요 |
| GAP-6 | SODAM_FAMILY_MAP Prompt/Reverse 역할 오표기 | ✅ 해소 | 이 파일에 6형제 반영 완료 |

### Loop backup.mjs 이관 트리거 명문화 (GAP-2)

Loop `backup.mjs`는 현재 Harness `backup.mjs`의 **독립 복사본**이다. 의도적이나 이관 트리거 미정.

**이관 조건 (모두 충족 시 Loop backup.mjs → Harness 호출로 교체)**:
1. Harness `plugin.json` 완성 + Claude marketplace 등록 확인
2. `sodamharness backup <파일>` 명령 인터페이스 확정 (exit 코드·JSON 스키마)
3. Harness e2e smoke test 통과 (사람 직접 검증)
4. Loop에서 `sodamharness` 비정상 종료 시 자체 폴백 동작 확인

**이관 전 Harness에 보안 패치 발생 시**: 같은 패치를 Loop backup.mjs에도 수동 적용.

---

## 7. 버전 현황 (2026-06-29)

| 프로젝트 | 현재 버전 | Phase | AI 작업 상태 | 남은 블로커 |
|---------|---------|-------|------------|-----------|
| Harness | 0.1.0 | 1 완료 | ✅ | 사람 smoke test |
| Context | 0.1.0 | 1 완료 | ✅ | 사람 e2e·베타·법무 |
| Loop | 0.1.0-phase1a | 1a 완료 | ✅ | Stop훅 라이브 검증, GAP-2 이관 트리거 |
| Agentic | 0.1.0 | init-mvp | ✅ | F2/F3/F4 라이브 검증 |
| Prompt | 0.0.0 | PRD 완성 | ✅ PRD 8개 | Phase 1 구현 착수 (Next.js+Supabase 웹앱) |
| Reverse | 0.0.0 | PRD 완성 | ✅ PRD 9개 | Phase 1 구현 착수 (plugin/hook 5개 보안차단 대기) |

---

> 최종 수정: 2026-06-29 · 이전 버전: 4형제(2026-06-21) → 6형제(2026-06-29)
