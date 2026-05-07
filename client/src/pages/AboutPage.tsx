import { Link } from 'wouter';
import { ArrowRight, BookOpen, Globe, Layers } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--muted)' }}
      >
        <div className="container-narrow">
          <span
            className="font-body font-semibold uppercase tracking-widest mb-4 block"
            style={{ fontSize: 'var(--text-xs)', color: 'var(--primary)' }}
          >
            About
          </span>
          <h1
            className="font-display font-semibold mb-6"
            style={{ fontSize: 'var(--text-3xl)', color: 'var(--foreground)' }}
          >
            Built by a tailings engineer tracking the shift from liability to resource.
          </h1>
          <p
            style={{ fontSize: 'var(--text-lg)', color: 'var(--muted-foreground)', maxWidth: '60ch' }}
          >
            Waste2Resource is an independent platform documenting how mine tailings are being
            reprocessed into critical minerals, construction materials, and other circular economy
            products.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container-narrow">
          <h2
            className="font-display font-semibold mb-6"
            style={{ fontSize: 'var(--text-2xl)', color: 'var(--foreground)' }}
          >
            The platform
          </h2>
          <div
            className="space-y-5"
            style={{ fontSize: 'var(--text-base)', color: 'var(--muted-foreground)', lineHeight: 1.8 }}
          >
            <p>
              Waste2Resource brings together real-world case studies, technical insights, and industry
              signals to show where tailings reuse is already working — and where it is headed next.
              The goal is not to promote a single technology, but to document the methods, economics,
              and outcomes emerging across different commodities, jurisdictions, and reuse pathways.
            </p>
            <p>
              Every case study is captured in a structured schema covering recovery target, technology
              pathway, business model, funding source, ESG relevance, and source quality. That structure
              makes it possible to compare projects across geographies and commodities — and to identify
              patterns that matter for practitioners making real decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Background */}
      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--muted)' }}
      >
        <div className="container-narrow">
          <h2
            className="font-display font-semibold mb-6"
            style={{ fontSize: 'var(--text-2xl)', color: 'var(--foreground)' }}
          >
            Practitioner perspective
          </h2>
          <div
            className="space-y-5 mb-10"
            style={{ fontSize: 'var(--text-base)', color: 'var(--muted-foreground)', lineHeight: 1.8 }}
          >
            <p>
              The project is informed by direct experience in tailings engineering, including work on
              stability assessment, closure planning, and water management for active and legacy
              tailings storage facilities. That background shaped a question that drives this platform:
              if tailings facilities are managed as long-term liabilities, what changes when they are
              evaluated as future resource stockpiles instead?
            </p>
            <p>
              Waste2Resource is designed for engineers, project developers, investors, researchers,
              and policymakers looking for a clearer view of tailings reprocessing in practice — grounded
              in technical evidence rather than promotional narrative.
            </p>
          </div>

          {/* Credential cards */}
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                icon: Layers,
                title: 'Tailings Engineering',
                body: 'Stability, closure, water management, and reprocessing feasibility across active and legacy facilities.',
              },
              {
                icon: Globe,
                title: 'Global Case Research',
                body: 'Primary and secondary source research across 14 countries and eight distinct reuse pathways.',
              },
              {
                icon: BookOpen,
                title: 'ESG & Policy Context',
                body: 'Coverage of regulatory drivers, ESG reporting frameworks, and circular economy policy signals.',
              },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-xl p-6"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid oklch(from var(--foreground) l c h / 0.06)',
                }}
              >
                <Icon size={20} style={{ color: 'var(--primary)', marginBottom: 'var(--space-3)' }} />
                <h3
                  className="font-display font-semibold mb-2"
                  style={{ fontSize: 'var(--text-base)', color: 'var(--foreground)' }}
                >
                  {title}
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)', lineHeight: 1.6 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For who */}
      <section className="section-padding" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container-narrow">
          <h2
            className="font-display font-semibold mb-6"
            style={{ fontSize: 'var(--text-2xl)', color: 'var(--foreground)' }}
          >
            Who this is for
          </h2>
          <ul
            className="space-y-3"
            style={{ fontSize: 'var(--text-base)', color: 'var(--muted-foreground)' }}
          >
            {[
              'Mining engineers and consultants evaluating reprocessing options for active or legacy tailings facilities',
              'Project developers and investors assessing the commercial viability of tailings retreatment ventures',
              'ESG analysts and sustainability practitioners seeking evidence for circular economy and closure liability reduction',
              'Researchers and academics tracking the technical and economic frontier of mine waste valorisation',
              'Policymakers and regulators building frameworks around responsible tailings management and resource recovery',
            ].map(item => (
              <li
                key={item}
                className="flex gap-3"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full mt-3 flex-shrink-0"
                  style={{ backgroundColor: 'var(--primary)' }}
                />
                <span style={{ lineHeight: 1.7 }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-padding"
        style={{ backgroundColor: 'var(--muted)' }}
      >
        <div className="container-narrow">
          <div
            className="rounded-2xl p-10"
            style={{
              backgroundColor: 'var(--primary)',
              color: 'var(--primary-foreground)',
            }}
          >
            <h2
              className="font-display font-semibold mb-4"
              style={{ fontSize: 'var(--text-xl)', color: 'var(--primary-foreground)' }}
            >
              Explore the case study database
            </h2>
            <p
              className="mb-8"
              style={{
                fontSize: 'var(--text-base)',
                color: 'color-mix(in oklch, var(--primary-foreground) 75%, transparent)',
                maxWidth: '50ch',
                lineHeight: 1.7,
              }}
            >
              Browse documented projects from DRDGOLD, Vale, Codelco, Rio Tinto, and others —
              filtered by region, pathway, and development stage.
            </p>
            <Link href="/case-studies">
              <a
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold"
                style={{
                  fontSize: 'var(--text-sm)',
                  backgroundColor: 'var(--primary-foreground)',
                  color: 'var(--primary)',
                }}
              >
                View Case Studies
                <ArrowRight size={16} />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
