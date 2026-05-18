import { stats } from '../settings'
import Reveal from './Reveal'

export default function IntroStats() {
  return (
    <section className="relative z-10 -mt-8 px-4 sm:-mt-10 sm:px-6 lg:px-10">
      <Reveal className="mx-auto max-w-5xl">
        <ul className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-parchment bg-parchment shadow-xl shadow-ink/5">
          {stats.map((item) => (
            <li
              key={item.label}
              className="bg-ivory px-4 py-6 text-center sm:px-6 sm:py-8 md:py-10"
            >
              <p className="font-display text-2xl font-semibold text-forest sm:text-3xl md:text-4xl">
                {item.value}
              </p>
              <p className="mt-1.5 text-[0.65rem] font-medium uppercase tracking-widest text-ink-soft sm:mt-2 sm:text-xs">
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
