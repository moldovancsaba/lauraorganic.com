// SPL Player Index — 3 domains, 27 micro-skills
// Skill 40% · Psychological 35% · Physical 25%

export type DomainKey = "skill" | "psych" | "physical";

export interface MicroSkill {
  key: string;
  label: string;
  domain: DomainKey;
  score: number;       // 0-100 vs age-group benchmark
  benchmark: number;   // age-group median
  confidence: "low" | "medium" | "high";
}

export const microSkills: MicroSkill[] = [
  // SKILL (technical + tactical execution) — 40%
  { key: "first_touch", label: "First touch", domain: "skill", score: 72, benchmark: 70, confidence: "high" },
  { key: "short_pass", label: "Short passing", domain: "skill", score: 78, benchmark: 70, confidence: "high" },
  { key: "long_pass", label: "Long passing", domain: "skill", score: 58, benchmark: 65, confidence: "medium" },
  { key: "dribble", label: "Dribbling", domain: "skill", score: 81, benchmark: 68, confidence: "high" },
  { key: "1v1", label: "1v1 attacking", domain: "skill", score: 74, benchmark: 65, confidence: "high" },
  { key: "finishing", label: "Finishing", domain: "skill", score: 66, benchmark: 62, confidence: "medium" },
  { key: "weak_foot", label: "Weak foot", domain: "skill", score: 42, benchmark: 60, confidence: "high" },
  { key: "crossing", label: "Crossing", domain: "skill", score: 61, benchmark: 60, confidence: "medium" },
  { key: "ball_master", label: "Ball mastery", domain: "skill", score: 75, benchmark: 65, confidence: "high" },
  { key: "set_piece", label: "Set pieces", domain: "skill", score: 55, benchmark: 58, confidence: "low" },

  // PSYCHOLOGICAL (cognitive + mental) — 35%
  { key: "scanning", label: "Scanning", domain: "psych", score: 48, benchmark: 65, confidence: "high" },
  { key: "decision", label: "Decision speed", domain: "psych", score: 64, benchmark: 65, confidence: "medium" },
  { key: "spatial", label: "Spatial awareness", domain: "psych", score: 70, benchmark: 65, confidence: "high" },
  { key: "reaction", label: "Reaction time", domain: "psych", score: 76, benchmark: 70, confidence: "high" },
  { key: "game_iq", label: "Game IQ", domain: "psych", score: 68, benchmark: 65, confidence: "medium" },
  { key: "focus", label: "Focus", domain: "psych", score: 82, benchmark: 65, confidence: "high" },
  { key: "confidence", label: "Confidence", domain: "psych", score: 71, benchmark: 65, confidence: "high" },
  { key: "discipline", label: "Discipline", domain: "psych", score: 86, benchmark: 65, confidence: "high" },
  { key: "resilience", label: "Mistake recovery", domain: "psych", score: 58, benchmark: 65, confidence: "medium" },
  { key: "motivation", label: "Motivation", domain: "psych", score: 79, benchmark: 65, confidence: "high" },

  // PHYSICAL — 25%
  { key: "sprint", label: "Sprint speed", domain: "physical", score: 72, benchmark: 68, confidence: "high" },
  { key: "accel", label: "Acceleration", domain: "physical", score: 69, benchmark: 65, confidence: "high" },
  { key: "agility", label: "Agility / COD", domain: "physical", score: 74, benchmark: 65, confidence: "high" },
  { key: "endurance", label: "Endurance", domain: "physical", score: 61, benchmark: 65, confidence: "high" },
  { key: "strength", label: "Strength", domain: "physical", score: 56, benchmark: 60, confidence: "medium" },
  { key: "coord", label: "Coordination", domain: "physical", score: 70, benchmark: 65, confidence: "medium" },
  { key: "mobility", label: "Mobility", domain: "physical", score: 65, benchmark: 60, confidence: "medium" },
];

export const domainWeights: Record<DomainKey, number> = {
  skill: 0.40,
  psych: 0.35,
  physical: 0.25,
};

export const domainMeta: Record<DomainKey, { label: string; color: string; icon: string }> = {
  skill: { label: "Skill", color: "domain-technical", icon: "Footprints" },
  psych: { label: "Psychological", color: "domain-mental", icon: "Brain" },
  physical: { label: "Physical", color: "domain-physical", icon: "Zap" },
};

export function domainScore(d: DomainKey, list = microSkills): number {
  const items = list.filter((m) => m.domain === d);
  return Math.round(items.reduce((a, b) => a + b.score, 0) / items.length);
}

export function splIndex(list = microSkills): number {
  const s = domainScore("skill", list);
  const p = domainScore("psych", list);
  const ph = domainScore("physical", list);
  return Math.round(s * domainWeights.skill + p * domainWeights.psych + ph * domainWeights.physical);
}

export function priorityDevelopmentAreas(list = microSkills): MicroSkill[] {
  return list
    .filter((m) => m.score < m.benchmark * 0.85) // below 85% of benchmark = PDA flag
    .sort((a, b) => a.score / a.benchmark - b.score / b.benchmark)
    .slice(0, 5);
}

// Weekly plan — Mon→Sun
export type SessionType = "Technical" | "Cognitive" | "Physical" | "Recovery" | "Match" | "Mental" | "Rest";
export interface PlannedDay {
  day: string;
  type: SessionType;
  focus: string;
  duration: number; // min
  status: "done" | "today" | "upcoming" | "skipped";
}
export const weeklyPlan: PlannedDay[] = [
  { day: "Mon", type: "Technical",  focus: "First touch + weak foot", duration: 45, status: "done" },
  { day: "Tue", type: "Cognitive",  focus: "Scanning + decisions",    duration: 42, status: "today" },
  { day: "Wed", type: "Physical",   focus: "Sprint + agility",        duration: 35, status: "upcoming" },
  { day: "Thu", type: "Mental",     focus: "Confidence finishing",    duration: 30, status: "upcoming" },
  { day: "Fri", type: "Technical",  focus: "1v1 + crossing",          duration: 50, status: "upcoming" },
  { day: "Sat", type: "Match",      focus: "vs Eagles FC",            duration: 90, status: "upcoming" },
  { day: "Sun", type: "Recovery",   focus: "Mobility + breathing",    duration: 20, status: "upcoming" },
];

// Recent activity feed
export interface ActivityEvent {
  id: string;
  kind: "drill" | "index" | "ai" | "badge" | "clip";
  text: string;
  meta: string;
}
export const recentActivity: ActivityEvent[] = [
  { id: "1", kind: "drill",  text: "Wall touch ladder · 4 sets", meta: "+2 first touch · 2h ago" },
  { id: "2", kind: "index",  text: "SPL Index updated to 74",    meta: "+3 vs last week" },
  { id: "3", kind: "ai",     text: "Coach Alex flagged scanning", meta: "PDA escalation · today" },
];

// Cross-domain insight (platform intelligence)
export interface CrossDomainInsight {
  trigger: string;
  diagnosis: string;
  prescription: string;
}
export const crossDomainInsight: CrossDomainInsight = {
  trigger: "Passing accuracy drops 22% under pressure",
  diagnosis: "This looks psychological, not technical — your scan rate also drops in the same moments.",
  prescription: "Tonight: short confidence-passing block + box breathing reset between sets.",
};

// Cohort / percentile
export const cohort = {
  ageBand: "U14",
  position: "Winger",
  cohortSize: 1243,
  rank: 47,
  percentile: 71,
  cohortAverage: 64,
  growthRate: "+12 in 12 weeks",
};
