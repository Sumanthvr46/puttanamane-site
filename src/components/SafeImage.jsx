import { useState } from 'react'

const fallback =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect fill="#ebe4d6" width="800" height="600"/><text x="400" y="300" text-anchor="middle" fill="#4a433c" font-family="sans-serif" font-size="20">Photo unavailable</text></svg>',
  )

export default function SafeImage({ src, alt, className }) {
  const [error, setError] = useState(false)

  return (
    <img
      src={error ? fallback : src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setError(true)}
    />
  )
}
