import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}
    >
      <div className="container">
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect width="32" height="32" rx="6" fill="var(--primary)" />
                <path d="M8 23 L16 9 L24 23" stroke="var(--primary-foreground)" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11 18.5 L21 18.5" stroke="var(--primary-foreground)" strokeWidth="2"
                  strokeLinecap="round" />
                <circle cx="16" cy="9" r="2" fill="var(--primary-foreground)" />
              </svg>
              <span
                className="font-display font-semibold"
                style={{ color: 'var(--foreground)', fontSize: 'var(--text-base)' }}
              >
                Waste2Resource
              </span>
            </div>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)', maxWidth: '36ch' }}>
              An independent platform documenting how mine tailings are being reprocessed into
              critical minerals, construction materials, and circular economy products.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="font-body font-semibold mb-4 uppercase tracking-widest"
              style={{ fontSize: 'var(--text-xs)', color: 'var(--muted-foreground)' }}
            >
              Platform
            </h3>
            <ul className="flex flex-col gap-2" role="list">
              {[
                { href: '/', label: 'Home' },
                { href: '/case-studies', label: 'Case Studies' },
                { href: '/about', label: 'About' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}>
                    <a
                      style={{ fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)' }}
                      className="hover:text-foreground transition-colors"
                    >
                      {label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="font-body font-semibold mb-4 uppercase tracking-widest"
              style={{ fontSize: 'var(--text-xs)', color: 'var(--muted-foreground)' }}
            >
              Connect
            </h3>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--muted-foreground)' }}>
              Built from practitioner experience in tailings engineering and resource recovery.
            </p>
            <a
              href="https://www.linkedin.com/in/kartik-singh-tailings"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4"
              style={{ fontSize: 'var(--text-sm)', color: 'var(--primary)', fontWeight: 600 }}
            >
              Connect on LinkedIn →
            </a>
          </div>
        </div>

        <div
          className="py-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'var(--border)' }}
        >
          <p style={{ fontSize: 'var(--text-xs)', color: 'var(--muted-foreground)' }}>
            © {new Date().getFullYear()} Waste2Resource. Independent research platform.
          </p>
          <p style={{ fontSize: 'var(--text-xs)', color: 'var(--muted-foreground)' }}>
            waste2resource.co
          </p>
        </div>
      </div>
    </footer>
  );
}
