import { type CaseStudy } from '../data/caseStudies';
import { MapPin, Layers, ArrowUpRight } from 'lucide-react';

interface CaseStudyCardProps {
  study: CaseStudy;
}

const stageColors: Record<string, string> = {
  Operating: '#437a22',
  Demonstration: '#01696f',
  Pilot: '#d19900',
  Concept: '#7a7974',
  Announced: '#006494',
};

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  const stageColor = stageColors[study.stage] || 'var(--muted-foreground)';

  return (
    <article
      className="rounded-xl p-6 flex flex-col gap-4 h-full group"
      style={{
        backgroundColor: 'var(--card)',
        border: '1px solid oklch(from var(--foreground) l c h / 0.08)',
        boxShadow: 'var(--shadow-sm)',
        transition: 'box-shadow var(--transition-interactive), transform var(--transition-interactive)',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-md)';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-sm)';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <span
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-medium mb-3"
            style={{
              fontSize: 'var(--text-xs)',
              backgroundColor: `color-mix(in oklch, ${stageColor} 12%, transparent)`,
              color: stageColor,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: stageColor }}
            />
            {study.stage}
          </span>
          <h3
            className="font-display font-semibold leading-snug"
            style={{ fontSize: 'var(--text-lg)', color: 'var(--foreground)' }}
          >
            {study.title}
          </h3>
        </div>
        <ArrowUpRight
          size={18}
          className="flex-shrink-0 mt-1 opacity-30 group-hover:opacity-80 transition-opacity"
          style={{ color: 'var(--primary)' }}
        />
      </div>

      {/* Meta */}
      <div className="flex flex-wrap gap-3">
        <span
          className="flex items-center gap-1.5"
          style={{ fontSize: 'var(--text-xs)', color: 'var(--muted-foreground)' }}
        >
          <MapPin size={13} />
          {study.country}
        </span>
        <span
          className="flex items-center gap-1.5"
          style={{ fontSize: 'var(--text-xs)', color: 'var(--muted-foreground)' }}
        >
          <Layers size={13} />
          {study.pathway}
        </span>
      </div>

      {/* Summary */}
      <p
        className="flex-1 leading-relaxed"
        style={{ fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)' }}
      >
        {study.summary.length > 200 ? study.summary.slice(0, 200) + '…' : study.summary}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-2">
        {study.tags.slice(0, 3).map(tag => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-full"
            style={{
              fontSize: 'var(--text-xs)',
              backgroundColor: 'var(--muted)',
              color: 'var(--muted-foreground)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
