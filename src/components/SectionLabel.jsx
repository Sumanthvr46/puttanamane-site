export default function SectionLabel({ children, light = false }) {
  return (
    <p
      className={`mb-3 text-xs font-semibold uppercase tracking-[0.28em] ${
        light ? 'text-gold' : 'text-clay'
      }`}
    >
      {children}
    </p>
  )
}
