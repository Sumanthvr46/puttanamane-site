import { useCallback, useState } from 'react'
import { images, sections } from '../settings'
import SectionLabel from './SectionLabel'
import GalleryMain from './GalleryMain'
import Reveal from './Reveal'
import SafeImage from './SafeImage'

export default function Gallery() {
  const [active, setActive] = useState(0)
  const total = images.gallery.length
  const current = images.gallery[active]

  const go = useCallback(
    (dir) => setActive((i) => (i + dir + total) % total),
    [total],
  )

  return (
    <section id="gallery" className="scroll-mt-20 bg-ivory py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <Reveal>
          <SectionLabel>{sections.gallery.label}</SectionLabel>
          <h2 className="font-display text-balance text-3xl font-semibold text-ink sm:text-4xl md:text-5xl lg:text-6xl">
            {sections.gallery.title}
          </h2>
          <p className="mt-3 max-w-xl text-base text-ink-soft sm:mt-4 sm:text-lg">
            {sections.gallery.subtitle}
          </p>
        </Reveal>

        <Reveal className="mt-8 sm:mt-12" delay={120}>
          <GalleryMain
            image={current}
            index={active}
            total={total}
            onPrev={() => go(-1)}
            onNext={() => go(1)}
          />
        </Reveal>

        <Reveal className="mt-4 sm:mt-6" delay={200}>
          <ul className="flex gap-2 overflow-x-auto pb-2 snap-x-mandatory sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0 lg:grid-cols-6 lg:gap-3">
            {images.gallery.map((item, i) => (
              <li key={item.src} className="w-[28%] shrink-0 snap-center sm:w-auto">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={`tap-scale relative block w-full overflow-hidden rounded-xl transition-all duration-300 ${
                    active === i
                      ? 'ring-2 ring-forest ring-offset-2 ring-offset-ivory scale-[1.02]'
                      : 'opacity-70'
                  }`}
                >
                  <SafeImage src={item.src} alt="" className="aspect-square w-full object-cover" />
                </button>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
