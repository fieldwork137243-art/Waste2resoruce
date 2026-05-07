import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useTheme } from 'next-themes';
import { Menu, X, Sun, Moon } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: 'var(--background)',
        borderColor: 'var(--border)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-3 no-underline" aria-label="Waste2Resource home">
              <svg
                width="32" height="32" viewBox="0 0 32 32" fill="none"
                xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
              >
                <rect width="32" height="32" rx="6" fill="var(--primary)" />
                <path d="M8 23 L16 9 L24 23" stroke="var(--primary-foreground)" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11 18.5 L21 18.5" stroke="var(--primary-foreground)" strokeWidth="2"
                  strokeLinecap="round" />
                <circle cx="16" cy="9" r="2" fill="var(--primary-foreground)" />
              </svg>
              <span
                className="font-display font-semibold tracking-tight"
                style={{ fontSize: 'var(--text-lg)', color: 'var(--foreground)' }}
              >
                Waste2Resource
              </span>
            </a>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href}>
                <a
                  className="px-4 py-2 rounded-lg font-body font-medium transition-colors"
                  style={{
                    fontSize: 'var(--text-sm)',
                    color: location === href ? 'var(--primary)' : 'var(--muted-foreground)',
                    backgroundColor: location === href ? 'var(--accent)' : 'transparent',
                  }}
                  aria-current={location === href ? 'page' : undefined}
                >
                  {label}
                </a>
              </Link>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ color: 'var(--muted-foreground)' }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <Link href="/case-studies">
              <a
                className="hidden md:inline-flex items-center px-4 py-2 rounded-lg font-medium"
                style={{
                  fontSize: 'var(--text-sm)',
                  backgroundColor: 'var(--primary)',
                  color: 'var(--primary-foreground)',
                }}
              >
                View Database
              </a>
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg"
              style={{ color: 'var(--foreground)' }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}
        >
          <nav className="container py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href}>
                <a
                  className="block px-4 py-3 rounded-lg font-medium"
                  style={{
                    fontSize: 'var(--text-base)',
                    color: location === href ? 'var(--primary)' : 'var(--foreground)',
                    backgroundColor: location === href ? 'var(--accent)' : 'transparent',
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
