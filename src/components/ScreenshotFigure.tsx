import { useState, useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface ScreenshotFigureProps {
  src: string;
  caption: string;
  alt?: string;
}

export default function ScreenshotFigure({ src, caption, alt }: ScreenshotFigureProps) {
  const [lightbox, setLightbox] = useState(false);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(false);
    };
    if (lightbox) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [lightbox]);

  return (
    <>
      <figure className="my-6 mx-0 group">
        <div
          className="relative rounded-xl overflow-hidden cursor-zoom-in border border-slate-200/90 bg-slate-100/60 shadow-xs hover:border-indigo-300 hover:shadow-md transition-all duration-200"
          onClick={() => setLightbox(true)}
        >
          <img
            src={src}
            alt={alt || caption}
            loading="lazy"
            className="w-full h-auto block object-contain max-h-[460px] mx-auto bg-slate-900/5 transition-transform duration-300 group-hover:scale-[1.01]"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-900/90 text-white backdrop-blur-xs shadow-md">
              <ZoomIn size={14} className="text-indigo-300" />
              <span>Click to enlarge screenshot</span>
            </div>
          </div>
        </div>

        {/* Caption */}
        <figcaption className="mt-2.5 text-center text-xs text-slate-500 font-medium tracking-tight px-2">
          {caption}
        </figcaption>
      </figure>

      {/* Lightbox Modal */}
      {lightbox && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightbox(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-5xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute -top-12 right-0 sm:right-2 p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors focus:outline-none"
              onClick={() => setLightbox(false)}
              aria-label="Close enlarged view"
            >
              <X size={20} />
            </button>

            {/* Enlarged image */}
            <img
              src={src}
              alt={alt || caption}
              className="lightbox-img bg-slate-950/80 p-1 border border-slate-700/60"
            />

            {/* Lightbox Caption */}
            <div className="text-center text-xs sm:text-sm text-slate-200 font-medium mt-3 bg-slate-900/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-800">
              {caption}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
