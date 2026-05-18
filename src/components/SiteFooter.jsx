import { contact, property, site } from '../settings'
import { toTelHref } from '../utils/phone'
import Reveal from './Reveal'

export default function SiteFooter() {
  return (
    <footer className="bg-ink pb-[env(safe-area-inset-bottom)] pt-12 sm:pt-14">
      <article className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <Reveal>
          <article className="grid gap-8 sm:gap-10 md:grid-cols-3 md:gap-8">
            <article className="text-center md:text-left">
              <p className="font-display text-2xl text-ivory">{property.name}</p>
              <p className="mt-2 text-sm text-ivory/50">{property.location}</p>
            </article>
            <article className="text-center md:text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">Address</p>
              <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-ivory/70">
                {contact.address}
              </p>
            </article>
            <article className="text-center md:text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">Contact</p>
              <p className="mt-2 text-sm font-medium text-ivory">{contact.phoneDisplay}</p>
              <a
                href={toTelHref(contact.phoneTel)}
                className="tap-scale mt-2 inline-block text-sm text-ivory/70 hover:text-gold"
              >
                {contact.callLabel}
              </a>
              <span className="mx-2 text-ivory/30" aria-hidden>
                ·
              </span>
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-scale inline-block text-sm text-ivory/70 hover:text-gold"
              >
                {contact.whatsappLabel}
              </a>
              <a
                href={property.airbnbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-scale mt-3 block text-sm font-medium text-gold hover:text-ivory"
              >
                {property.bookLabel}
              </a>
            </article>
          </article>
        </Reveal>
        <p className="mt-10 border-t border-ivory/10 pt-8 text-center text-xs text-ivory/40 sm:mt-12 sm:text-sm">
          © {site.year} {property.name}. All rights reserved.
        </p>
      </article>
    </footer>
  )
}
