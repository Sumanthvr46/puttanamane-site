import { useRef } from 'react'

export function useSwipe(onSwipeLeft, onSwipeRight, threshold = 48) {
  const startX = useRef(0)
  const startY = useRef(0)

  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX
    startY.current = e.touches[0].clientY
  }

  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - startX.current
    const dy = e.changedTouches[0].clientY - startY.current
    if (Math.abs(dx) < threshold || Math.abs(dx) < Math.abs(dy)) return
    if (dx < 0) onSwipeLeft()
    else onSwipeRight()
  }

  return { onTouchStart, onTouchEnd }
}
