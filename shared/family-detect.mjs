// SoDam 6형제 — family-detect.mjs
// 형제 플러그인 생존 감지 공통 라이브러리 (Single Source of Truth)
//
// 출처: SoDamAgentic delegate.mjs 3조건 감지 로직을 6형제 공통화.
// 모든 형제가 이 파일을 import해서 Harness·형제 감지를 동일하게 수행한다.
//
// 보안: fs/os/path 모듈만 사용. 네트워크·외부 명령·동적 코드 실행 0.
// fail-closed: 감지 오류 자체도 false 반환 — 안전 폴백 강제.

import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { homedir } from "node:os";
import path from "node:path";

const MIN_VERSION = "0.1.0";

// 형제별 헬스체크 파일 (존재 확인으로 "진짜 설치됨" 검증)
const HEALTH_FILES = {
  harness: path.join("hooks", "guard.mjs"),
  context: path.join("lib", "checkup-cli.mjs"),
  loop: path.join("hooks", "safety-gate.mjs"),
  agentic: path.join("hooks", "delegate.mjs"),
};

function safeReaddir(dir) {
  try { return readdirSync(dir); } catch { return []; }
}

// 간이 semver 비교: a < b → -1, a == b → 0, a > b → 1
function cmpVersion(a, b) {
  const pa = String(a).split(".").map((n) => parseInt(n, 10) || 0);
  const pb = String(b).split(".").map((n) => parseInt(n, 10) || 0);
  for (let i = 0; i < 3; i++) {
    const d = (pa[i] || 0) - (pb[i] || 0);
    if (d !== 0) return d < 0 ? -1 : 1;
  }
  return 0;
}

// pluginsBase 아래(2단계까지)에서 name === pluginName 매니페스트를 찾는다.
function findPlugin(pluginsBase, pluginName) {
  if (!existsSync(pluginsBase)) return null;
  const dirs = [];
  for (const e of safeReaddir(pluginsBase)) {
    const p1 = path.join(pluginsBase, e);
    try { if (!statSync(p1).isDirectory()) continue; } catch { continue; }
    dirs.push(p1);
    for (const e2 of safeReaddir(p1)) {
      const p2 = path.join(p1, e2);
      try { if (statSync(p2).isDirectory()) dirs.push(p2); } catch { /* skip */ }
    }
  }
  for (const dir of dirs) {
    for (const man of [
      path.join(dir, ".claude-plugin", "plugin.json"),
      path.join(dir, "plugin.json"),
    ]) {
      try {
        if (!existsSync(man)) continue;
        const j = JSON.parse(readFileSync(man, "utf8"));
        if (j && j.name === pluginName) return { dir, version: j.version || "0.0.0" };
      } catch { /* 깨진 매니페스트 무시 */ }
    }
  }
  return null;
}

/**
 * 주어진 plugins 폴더 기준으로 형제 플러그인 생존 판정.
 * @param {string} pluginsBase  Claude Code plugins 폴더 경로
 * @param {string} name         형제 이름: 'harness' | 'context' | 'loop' | 'agentic'
 * @returns {boolean}
 */
export function isFamilyAliveAt(pluginsBase, name) {
  try {
    const pluginName = `sodam-${name}`;
    const p = findPlugin(pluginsBase, pluginName);
    if (!p) return false;                                         // ① 존재 실패
    if (cmpVersion(p.version, MIN_VERSION) < 0) return false;    // ② 최소버전 미달
    // ③ 헬스체크: 형제별 핵심 파일 존재
    const relHealth = HEALTH_FILES[name];
    if (relHealth && !existsSync(path.join(p.dir, relHealth))) return false;
    return true;
  } catch {
    return false; // 감지 자체 오류 → fail-closed
  }
}

/**
 * 운영 경로(사용자 홈의 Claude Code plugins 폴더)로 형제 생존 판정.
 * @param {string} name  형제 이름: 'harness' | 'context' | 'loop' | 'agentic'
 * @returns {boolean}
 */
export function isFamilyAlive(name) {
  return isFamilyAliveAt(path.join(homedir(), ".claude", "plugins"), name);
}

// ── 하위 호환 export (Agentic delegate.mjs가 이 파일을 import 가능하도록) ──

/** @returns {boolean} SoDamHarness 3조건 감지 */
export function isHarnessAlive() {
  return isFamilyAlive("harness");
}

/** @param {string} pluginsBase  테스트용 오버라이드 경로 */
export function isHarnessAliveAt(pluginsBase) {
  return isFamilyAliveAt(pluginsBase, "harness");
}
