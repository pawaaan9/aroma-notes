"use client";
import { useEffect, useMemo, useState } from "react";

type Accord = {
  name?: string | null;
  percentage?: number | null;
  color?: { hex?: string | null } | null;
};

type Props = {
  accords: Accord[];
};

export default function MainAccordsChart({ accords }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  const items = useMemo(() => {
    return (accords || [])
      .filter(a => typeof a?.percentage === 'number' && (a?.name ?? '').toString().trim().length > 0)
      .sort((a, b) => (b?.percentage || 0) - (a?.percentage || 0));
  }, [accords]);

  if (!items.length) return null;

  return (
    <div className="space-y-2">
      {items.map((a, i) => {
        const pct = Math.max(0, Math.min(100, Number(a.percentage || 0)));
        const color = a?.color?.hex || '#e5e7eb';
        return (
          <div key={`${a.name}-${i}`} className="relative">
            <div
              className="h-8 rounded-md transition-[width] duration-700 ease-out"
              style={{
                width: mounted ? `${pct}%` : '0%',
                backgroundColor: color,
                transitionDelay: `${i * 80}ms`
              }}
            />
            <div className="absolute inset-0 flex items-center justify-between px-3">
              <span className="text-sm font-semibold text-gray-900">{a?.name}</span>
              <span className="text-xs font-semibold text-gray-900">{pct}%</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}


