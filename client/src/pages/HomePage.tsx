import { Link } from 'wouter';
import { ArrowRight, Globe, Database, Layers, TrendingUp } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';
import CaseStudyCard from '../components/CaseStudyCard';

const stats = [
  { value: '20+', label: 'Case Studies Documented' },
  { value: '14', label: 'Countries Covered' },
  { value: '8+', label: 'Reuse Pathways Tracked' },
  { value: '100%', label: 'Practitioner-Reviewed' },
];

const features = [
  {
    icon: Database,
    title: 'Structured Intelligence Database',
    body: 'Every project captured in a standardised schema — commodity, pathway, stage, technology, economics, and source quality — so you can compare and filter with confidence.',
  },
  {
    icon: Globe,
    title: 'Global Scope',
    body: 'Case studies span Africa, South America, North America, Europe, and Asia-Pacific, covering legacy dumps, active tailings storage facilities, and closure-phase projects.',
  },
  {
    icon: Layers,
    title: 'Multiple Reuse Pathways',
    body: 'From critical mineral recovery and construction materials to underground backfill and geopolymer applications — the full spectrum of tailings reuse in one place.',
  },
  {
    icon: TrendingUp,
    title: 'Commercial & ESG Signal',
    body: 'Each case study includes an assessment of business model, funding source, strategic rationale, and ESG relevance, helping practitioners and investors assess real-world viability.',
  },
];

export default function HomePage() {
  const featured = caseStudies.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--background)' }}
      >
        <div className="container">
          <div className="max-w-3xl">
            <span
              className="inline-block px-3 py-1 rounded-full font-medium mb-6 uppercase tracking-widest"
              style={{
                fontSize: 'var(--text-xs)',
                backgroundColor: 'var(--accent)',
                color: 'var(--accent-foreground)',
              }}
            >
              Independent Research Platform
            </span>
            <h1
              className="font-display font-semibold mb-6 leading-tight"
              style={{ fontSize: 'var(--text-3xl)', color: 'var(--foreground)' }}
            >
              Mine waste is not
              <br />
              <em style={{ color: 'var(--primary)', fontStyle: 'italic' }}>waste</em> anymore.
            </h1>
            <p
              className="mb-10 leading-relaxed"
              style={{ fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)', maxWidth: '60ch' }}
            >
              A research-led platform tracking how tailings are being reprocessed into critical minerals,
              construction inputs, and lower-impact resource streams across 14 countries.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/case-studies">
                <a
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold"
                  style={{
                    fontSize: 'var(--text-sm)',
                    backgroundColor: 'var(--primary)',
                    color: 'var(--primary-foreground)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  Explore Case Studies
                  <ArrowRight size={16} />
                </a>
              </Link>
              <Link href="/about">
                <a
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold"
                  style={{
                    fontSize: 'var(--text-sm)',
                    backgroundColor: 'var(--muted)',
                    color: 'var(--foreground)',
                  }}
                >
                  About the Platform
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section
        style={{
          backgroundColor: 'var(--primary)',
          paddingBlock: 'var(--space-10)',
        }}
      >
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div
                  className="font-display font-bold mb-1"
                  style={{ fontSize: 'var(--text-2xl)', color: 'var(--primary-foreground)' }}
                >
                  {value}
                </div>
                <div
                  style={{
                    fontSize: 'var(--text-sm)',
                    color: 'color-mix(in oklch, var(--primary-foreground) 70%, transparent)',
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Opportunity */}
      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--muted)' }}
      >
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span
                className="font-body font-semibold uppercase tracking-widest mb-4 block"
                style={{ fontSize: 'var(--text-xs)', color: 'var(--primary)' }}
              >
                The Shift
              </span>
              <h2
                className="font-display font-semibold mb-6"
                style={{ fontSize: 'var(--text-2xl)', color: 'var(--foreground)' }}
              >
                From liability to stockpile.
              </h2>
              <p
                className="mb-5 leading-relaxed"
                style={{ fontSize: 'var(--text-base)', color: 'var(--muted-foreground)' }}
              >
                An estimated 180 billion tonnes of tailings are held in storage facilities worldwide.
                Managed as long-term liabilities, they represent closure costs, environmental risk,
                and regulatory exposure. Evaluated as future resource stockpiles, the picture changes.
              </p>
              <p
                className="leading-relaxed"
                style={{ fontSize: 'var(--text-base)', color: 'var(--muted-foreground)' }}
              >
                Rising commodity prices, critical mineral supply chain pressure, and tightening
                closure regulations are combining to make tailings reprocessing economically and
                strategically compelling. The question is no longer whether — it is how, where, and
                at what scale.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '180B t', label: 'Estimated global tailings inventory' },
                { value: '$6T+', label: 'Estimated residual mineral value' },
                { value: '2–4×', label: 'Cost premium for virgin vs. retreated feed' },
                { value: '50+', label: 'Countries with active reprocessing projects' },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-xl p-6"
                  style={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid oklch(from var(--foreground) l c h / 0.06)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <div
                    className="font-display font-bold mb-2"
                    style={{ fontSize: 'var(--text-xl)', color: 'var(--primary)' }}
                  >
                    {value}
                  </div>
                  <div
                    style={{ fontSize: 'var(--text-xs)', color: 'var(--muted-foreground)', lineHeight: 1.5 }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="mb-14">
            <span
              className="font-body font-semibold uppercase tracking-widest mb-3 block"
              style={{ fontSize: 'var(--text-xs)', color: 'var(--primary)' }}
            >
              What This Platform Offers
            </span>
            <h2
              className="font-display font-semibold"
              style={{ fontSize: 'var(--text-2xl)', color: 'var(--foreground)', maxWidth: '20ch' }}
            >
              Built for practitioners, investors, and researchers.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {features.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-5">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    backgroundColor: 'var(--accent)',
                    color: 'var(--accent-foreground)',
                  }}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <h3
                    className="font-display font-semibold mb-2"
                    style={{ fontSize: 'var(--text-lg)', color: 'var(--foreground)' }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{ fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)', lineHeight: 1.7 }}
                  >
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured case studies */}
      <section className="section-padding" style={{ backgroundColor: 'var(--muted)' }}>
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <span
                className="font-body font-semibold uppercase tracking-widest mb-3 block"
                style={{ fontSize: 'var(--text-xs)', color: 'var(--primary)' }}
              >
                From the Database
              </span>
              <h2
                className="font-display font-semibold"
                style={{ fontSize: 'var(--text-2xl)', color: 'var(--foreground)' }}
              >
                Featured case studies
              </h2>
            </div>
            <Link href="/case-studies">
              <a
                className="inline-flex items-center gap-2 font-semibold flex-shrink-0"
                style={{ fontSize: 'var(--text-sm)', color: 'var(--primary)' }}
              >
                View all {caseStudies.length} studies
                <ArrowRight size={15} />
              </a>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map(study => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--background)' }}
      >
        <div className="container-narrow text-center">
          <h2
            className="font-display font-semibold mb-5"
            style={{ fontSize: 'var(--text-2xl)', color: 'var(--foreground)' }}
          >
            The evidence base for tailings reuse is growing.
          </h2>
          <p
            className="mb-10 mx-auto leading-relaxed"
            style={{ fontSize: 'var(--text-base)', color: 'var(--muted-foreground)', maxWidth: '52ch' }}
          >
            Waste2Resource documents that evidence in one place — structured, searchable, and
            grounded in practitioner experience.
          </p>
          <Link href="/case-studies">
            <a
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold"
              style={{
                fontSize: 'var(--text-sm)',
                backgroundColor: 'var(--primary)',
                color: 'var(--primary-foreground)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              Browse the Case Study Database
              <ArrowRight size={16} />
            </a>
          </Link>
        </div>
      </section>
    </>
  );
}
