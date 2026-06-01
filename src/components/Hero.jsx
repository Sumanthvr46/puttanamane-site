import { images, property } from '../settings'
import SafeImage from './SafeImage'

export default function Hero() {
  return (
    <section className="relative min-h-svh min-h-[100dvh] overflow-hidden">
      <div
        role="img"
        aria-label={property.name}
        style={{
          backgroundImage: `url(${images.hero})`,
          backgroundPosition: 'center',
          backgroundSize: 'contain',
        }}
        className="hero-ken-burns absolute inset-0 h-full w-full bg-no-repeat opacity-80"
      />
      <span className="grain absolute inset-0" aria-hidden />
      <span className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/25 to-ink/80" aria-hidden />
      <span className="absolute inset-0 bg-gradient-to-r from-ink/45 via-transparent to-transparent md:from-ink/40" aria-hidden />

      <article className="relative mx-auto flex min-h-svh min-h-[100dvh] max-w-7xl flex-col justify-end px-4 pb-24 pt-28 sm:px-6 sm:pb-28 sm:pt-32 lg:px-10 lg:pb-36">
        <p className="hero-fade-1 mb-3 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-ivory/90 sm:mb-4 sm:text-sm">
          <span className="h-px w-8 bg-gold sm:w-10" aria-hidden />
          {property.location}
        </p>
        <h1 className="hero-fade-2 font-display max-w-[14ch] text-[2.75rem] font-semibold leading-[1.02] tracking-tight text-ivory sm:max-w-4xl sm:text-6xl lg:text-8xl">
          {property.name}
        </h1>
        <p className="hero-fade-3 mt-4 max-w-md text-base font-light leading-relaxed text-ivory/85 sm:mt-6 sm:text-lg lg:text-xl">
          {property.tagline}
        </p>
        <a
          href="#gallery"
          className="hero-fade-4 group mt-8 inline-flex w-full items-center justify-center gap-2 text-sm font-medium text-ivory sm:mt-10 sm:w-fit sm:justify-start"
        >
          <span className="tap-scale w-full rounded-full border border-ivory/30 bg-ivory/10 px-6 py-3.5 text-center backdrop-blur-md transition group-hover:bg-ivory/20 sm:w-auto sm:py-3">
            View photos
          </span>
        </a>
        <span
          className="scroll-hint pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-ivory/60 sm:bottom-8"
          aria-hidden
        >
          ↓
        </span>
      </article>
    </section>
  )
}
