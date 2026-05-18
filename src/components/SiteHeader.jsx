import { useState } from 'react'
import { property } from '../settings'
import { useScrolled } from '../hooks/useScrolled'
import MobileMenu from './MobileMenu'

export default function SiteHeader() {
  const scrolled = useScrolled()
  const [menuOpen, setMenuOpen] = useState(false)
  const solid = scrolled || menuOpen

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid
            ? 'border-b border-parchment/80 bg-ivory/95 py-3 shadow-sm backdrop-blur-lg'
            : 'border-transparent bg-transparent py-4'
        }`}
        style={{ paddingTop: 'max(0.75rem, env(safe-area-inset-top))' }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-10">
          <a
            href="#"
            className={`shrink-0 font-display text-xl font-semibold tracking-tight transition-colors sm:text-2xl ${
              solid ? 'text-ink' : 'text-ivory'
            }`}
          >
            {property.name}
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            <a
              href="#gallery"
              className={`text-sm font-medium transition ${solid ? 'text-ink-soft hover:text-ink' : 'text-ivory/90'}`}
            >
              Photos
            </a>
            <a
              href="#contact"
              className={`text-sm font-medium transition ${solid ? 'text-ink-soft hover:text-ink' : 'text-ivory/90'}`}
            >
              Contact
            </a>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={property.airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`tap-scale rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                solid ? 'bg-forest text-ivory' : 'bg-ivory text-forest'
              }`}
            >
              <span className="lg:hidden">Book</span>
              <span className="hidden lg:inline">{property.bookLabel}</span>
            </a>
            <button
              type="button"
              className={`tap-scale flex h-10 w-10 items-center justify-center rounded-full lg:hidden ${
                solid ? 'bg-parchment text-ink' : 'bg-ivory/15 text-ivory backdrop-blur-sm'
              }`}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <span className="flex flex-col gap-1.5" aria-hidden>
                <span className="block h-0.5 w-5 rounded-full bg-current" />
                <span className="block h-0.5 w-5 rounded-full bg-current" />
                <span className="block h-0.5 w-3.5 rounded-full bg-current" />
              </span>
            </button>
          </div>
        </nav>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
