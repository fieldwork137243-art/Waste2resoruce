import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { caseStudies, regions, pathways, stages } from '../data/caseStudies';
import CaseStudyCard from '../components/CaseStudyCard';

export default function CaseStudiesPage() {
  const [search, setSearch] = useState('');
  const [regionFilter, setRegionFilter] = useState('All');
  const [pathwayFilter, setPathwayFilter] = useState('All');
  const [stageFilter, setStageFilter] = useState('All');

  const filtered = useMemo(() => {
    return caseStudies.filter(s => {
      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        s.title.toLowerCase().includes(q) ||
        s.company.toLowerCase().includes(q) ||
        s.country.toLowerCase().includes(q) ||
        s.commodity.toLowerCase().includes(q) ||
        s.tags.some(t => t.toLowerCase().includes(q));
      const matchesRegion = regionFilter === 'All' || s.region === regionFilter;
      const matchesPathway = pathwayFilter === 'All' || s.pathway === pathwayFilter;
      const matchesStage = stageFilter === 'All' || s.stage === stageFilter;
      return matchesSearch && matchesRegion && matchesPathway && matchesStage;
    });
  }, [search, regionFilter, pathwayFilter, stageFilter]);

  const selectStyle = {
    fontSize: 'var(--text-sm)',
    color: 'var(--foreground)',
    backgroundColor: 'var(--card)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius)',
    padding: '0.5rem 0.75rem',
    outline: 'none',
    cursor: 'pointer',
    minWidth: '140px',
  };

  return (
    <>
      {/* Page header */}
      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--muted)', paddingBottom: 'var(--space-12)' }}
      >
        <div className="container">
          <span
            className="font-body font-semibold uppercase tracking-widest mb-4 block"
            style={{ fontSize: 'var(--text-xs)', color: 'var(--primary)' }}
          >
            Intelligence Database
          </span>
          <h1
            className="font-display font-semibold mb-4"
            style={{ fontSize: 'var(--text-3xl)', color: 'var(--foreground)' }}
          >
            Case Studies
          </h1>
          <p
            style={{ fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)', maxWidth: '58ch' }}
          >
            Documented global projects where mine tailings are being reprocessed, reused, or
            repurposed. Filterable by region, pathway, and development stage.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section
        className="sticky top-16 z-40 border-b"
        style={{
          backgroundColor: 'var(--background)',
          borderColor: 'var(--border)',
          paddingBlock: 'var(--space-4)',
        }}
      >
        <div className="container">
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap items-center">
            {/* Search */}
            <div
              className="relative flex-1 min-w-[200px]"
              style={{ maxWidth: '340px' }}
            >
              <Search
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2"
                style={{ color: 'var(--muted-foreground)' }}
              />
              <input
                type="search"
                placeholder="Search by keyword, country, commodity…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-lg"
                style={{
                  fontSize: 'var(--text-sm)',
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)',
                  color: 'var(--foreground)',
                  outline: 'none',
                }}
                aria-label="Search case studies"
              />
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <SlidersHorizontal size={15} style={{ color: 'var(--muted-foreground)' }} />
              <select
                value={regionFilter}
                onChange={e => setRegionFilter(e.target.value)}
                style={selectStyle}
                aria-label="Filter by region"
              >
                {regions.map(r => <option key={r}>{r}</option>)}
              </select>
              <select
                value={pathwayFilter}
                onChange={e => setPathwayFilter(e.target.value)}
                style={selectStyle}
                aria-label="Filter by pathway"
              >
                {pathways.map(p => <option key={p}>{p}</option>)}
              </select>
              <select
                value={stageFilter}
                onChange={e => setStageFilter(e.target.value)}
                style={selectStyle}
                aria-label="Filter by stage"
              >
                {stages.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>

            <span
              className="ml-auto font-body"
              style={{ fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)' }}
            >
              {filtered.length} result{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </section>

      {/* Results grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          {filtered.length === 0 ? (
            <div
              className="flex flex-col items-center justify-center py-24 text-center"
              style={{ color: 'var(--muted-foreground)' }}
            >
              <Search size={40} className="mb-4 opacity-30" />
              <h3
                className="font-display font-semibold mb-2"
                style={{ fontSize: 'var(--text-lg)', color: 'var(--foreground)' }}
              >
                No matching studies
              </h3>
              <p style={{ fontSize: 'var(--text-sm)', maxWidth: '36ch' }}>
                Try adjusting your search or filters to find relevant case studies.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(study => (
                <CaseStudyCard key={study.id} study={study} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
