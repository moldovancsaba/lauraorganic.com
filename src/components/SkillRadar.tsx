import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { microSkills } from "@/lib/spl-index";

interface Props {
  showBenchmark?: boolean;
  height?: number;
}

export function SkillRadar({ showBenchmark = true, height = 360 }: Props) {
  const data = microSkills.map((m) => ({
    skill: m.label,
    you: m.score,
    benchmark: m.benchmark,
  }));

  return (
    <ResponsiveContainer width="100%" height={height}>
      <RadarChart data={data} outerRadius="78%">
        <PolarGrid stroke="hsl(var(--border))" strokeOpacity={0.6} />
        <PolarAngleAxis
          dataKey="skill"
          tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 9 }}
        />
        {showBenchmark && (
          <Radar
            name="Age-group benchmark"
            dataKey="benchmark"
            stroke="hsl(var(--muted-foreground))"
            strokeDasharray="3 3"
            fill="hsl(var(--muted-foreground))"
            fillOpacity={0.05}
          />
        )}
        <Radar
          name="You"
          dataKey="you"
          stroke="hsl(var(--primary))"
          fill="hsl(var(--primary))"
          fillOpacity={0.35}
          strokeWidth={2}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
