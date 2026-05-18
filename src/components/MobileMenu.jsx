import { useEffect } from 'react'
import { property } from '../settings'

const links = [
  { href: '#gallery', label: 'Photos' },
  { href: '#contact', label: 'Contact' },
]

export default function MobileMenu({ open, onClose }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  if (!open) return null

  return (
    <>
      <button
        type="button"
        className="fixed inset-0 z-[60] bg-ink/50 backdrop-blur-sm"
        aria-label="Close menu"
        onClick={onClose}
      />
      <nav
        className="menu-panel fixed inset-y-0 right-0 z-[70] flex w-[min(100%,20rem)] flex-col bg-ivory p-6 shadow-2xl"
        aria-label="Mobile"
      >
        <button
          type="button"
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-parchment text-ink"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
        <p className="mt-4 font-display text-2xl font-semibold text-ink">{property.name}</p>
        <ul className="mt-10 flex flex-col gap-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={onClose}
                className="block rounded-xl px-4 py-3 text-lg font-medium text-ink transition hover:bg-parchment"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={property.airbnbUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="tap-scale mt-auto rounded-full bg-forest py-4 text-center text-sm font-semibold text-ivory"
        >
          {property.bookLabel}
        </a>
      </nav>
    </>
  )
}
