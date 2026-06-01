import { contact, property, sections } from '../settings'
import { toTelHref } from '../utils/phone'
import SectionLabel from './SectionLabel'
import Reveal from './Reveal'

export default function Contact() {
  const addressLines = contact.address.split('\n')

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-forest py-16 sm:py-24 md:py-32"
      style={{ paddingBottom: 'max(4rem, env(safe-area-inset-bottom))' }}
    >
      <article className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <Reveal>
          <article className="relative overflow-hidden rounded-2xl border border-ivory/10 bg-forest-light/50 p-6 sm:rounded-3xl sm:p-10 md:p-14">
            <span className="grain absolute inset-0 opacity-60" aria-hidden />
            <article className="relative flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:gap-14">
              <article>
                <SectionLabel light>{sections.contact.label}</SectionLabel>
                <h2 className="font-display text-3xl font-semibold text-ivory sm:text-4xl md:text-5xl">
                  {sections.contact.title}
                </h2>
                <p className="mt-3 text-base text-ivory/80 sm:mt-4">{sections.contact.subtitle}</p>

                <address className="mt-8 not-italic sm:mt-10">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold">Address</p>
                  <p className="mt-3 space-y-1 text-sm leading-relaxed text-ivory/90 sm:text-base">
                    {addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                  <p className="mt-4">
                    <a
                      href={contact.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tap-scale inline-flex items-center rounded-full border border-ivory/30 bg-ivory/10 px-4 py-2 text-sm font-semibold text-ivory transition hover:bg-ivory/20"
                    >
                      View on Google Maps
                    </a>
                  </p>
                </address>
              </article>

              <article className="flex flex-col gap-4 sm:gap-5">
                <article className="rounded-2xl border border-ivory/15 bg-ivory/5 p-5 backdrop-blur-sm sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold">Phone</p>
                  <p className="mt-2 font-display text-xl font-semibold text-ivory sm:text-2xl md:text-3xl">
                    {contact.phoneDisplay}
                  </p>
                  <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                    <a
                      href={toTelHref(contact.phoneTel)}
                      className="tap-scale inline-flex flex-1 items-center justify-center rounded-full border border-ivory/30 bg-ivory/10 px-5 py-3 text-sm font-semibold text-ivory transition hover:bg-ivory/20"
                    >
                      {contact.callLabel}
                    </a>
                    <a
                      href={contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tap-scale inline-flex flex-1 items-center justify-center rounded-full border border-ivory/30 bg-ivory/10 px-5 py-3 text-sm font-semibold text-ivory transition hover:bg-ivory/20"
                    >
                      {contact.whatsappLabel}
                    </a>
                  </div>
                </article>

                <a
                  href={property.airbnbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-scale inline-flex w-full items-center justify-center gap-2 rounded-full bg-ivory px-8 py-4 text-sm font-semibold text-forest shadow-lg transition hover:bg-white"
                >
                  {property.bookLabel}
                  <span aria-hidden>→</span>
                </a>
              </article>
            </article>
          </article>
        </Reveal>
      </article>
    </section>
  )
}
