import { useInView } from '../hooks/useInView'

export default function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const [ref, visible] = useInView()

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'reveal--visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
