import { ChevronLeft, ChevronRight } from './icons'
import { useSwipe } from '../hooks/useSwipe'
import SafeImage from './SafeImage'

export default function GalleryMain({ image, index, total, onPrev, onNext }) {
  const swipe = useSwipe(onNext, onPrev)

  return (
    <figure
      className="group relative overflow-hidden rounded-2xl bg-ink shadow-2xl shadow-ink/15 sm:rounded-3xl"
      {...swipe}
    >
      <SafeImage
        key={image.src}
        src={image.src}
        alt={image.alt}
        className="gallery-img-enter aspect-[4/3] w-full object-cover sm:aspect-[16/10]"
      />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent px-4 pb-4 pt-12 sm:px-6 sm:pb-6 sm:pt-16">
        <p className="text-sm font-medium text-ivory/95">{image.alt}</p>
        <p className="mt-1 text-xs text-ivory/60">
          <span className="sm:hidden">Swipe to browse · </span>
          {index + 1} / {total}
        </p>
      </figcaption>
      <button
        type="button"
        onClick={onPrev}
        className="tap-scale absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/95 text-ink shadow-lg sm:left-4 md:opacity-0 md:group-hover:opacity-100"
        aria-label="Previous photo"
      >
        <ChevronLeft />
      </button>
      <button
        type="button"
        onClick={onNext}
        className="tap-scale absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/95 text-ink shadow-lg sm:right-4 md:opacity-0 md:group-hover:opacity-100"
        aria-label="Next photo"
      >
        <ChevronRight />
      </button>
    </figure>
  )
}
