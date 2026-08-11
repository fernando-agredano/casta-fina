'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, type PanInfo } from 'framer-motion';

const REVIEWS = [
  {
    quote:
      'Tengo gorras de seis marcas distintas. Ninguna se pone como esta, y ninguna trae un número que pueda buscar en un libro real. Esa gorra ya es de familia.',
    author: 'Renata O.',
    location: 'Pieza N.º 214, Guadalajara',
  },
  {
    quote:
      'No necesito tener una colección enorme. Solo una pieza que se sienta diferente cada vez que me la pongo.',
    author: 'Ernesto R.',
    location: 'Guadalajara',
  },
  {
    quote:
      'No necesito que todos la entiendan. Con que represente mi estilo, es suficiente.',
    author: 'Damian G.',
    location: 'Guadalajara',
  },
  {
    quote: 'Hay prendas que usas. Hay piezas que te representan.',
    author: 'Raul B.',
    location: 'Guadalajara',
  },
];

export function Testimonial() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  const goPrev = () => setIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  const goNext = () => setIndex((prev) => (prev + 1) % REVIEWS.length);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60) goNext();
    else if (info.offset.x > 60) goPrev();
  };

  const active = REVIEWS[index];

  return (
    <section id="voces" className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0">
        <Image
          src="/image-final.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[50%_30%]"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Mobile: one card at a time, swipe or arrows */}
      <div className="relative h-[540px] md:hidden">
        <div
          className="relative flex h-full items-center justify-center px-6"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="w-full max-w-2xl text-center">
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={handleDragEnd}
              onPointerDown={() => setPaused(true)}
              onPointerUp={() => setPaused(false)}
              className="flex h-72 cursor-grab items-center justify-center overflow-hidden rounded-2xl border border-border bg-background/40 p-8 backdrop-blur-md active:cursor-grabbing"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="pointer-events-none text-base leading-relaxed font-semibold text-foreground text-balance">
                    &ldquo;{active.quote}&rdquo;
                  </p>
                  <p className="pointer-events-none mt-5 text-xs tracking-[0.25em] uppercase text-cobalt">
                    {active.author} — {active.location}
                  </p>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <div className="mt-6 flex items-center justify-center gap-2">
              {REVIEWS.map((review, i) => (
                <button
                  key={review.author}
                  aria-label={`Ver comentario de ${review.author}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? 'w-6 bg-cobalt' : 'w-1.5 bg-border hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: every review visible at once, each card the same fixed height */}
      <div className="relative hidden px-16 py-24 md:block">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 lg:grid-cols-4">
          {REVIEWS.map((review) => (
            <div
              key={review.author}
              className="flex h-64 flex-col items-center justify-center rounded-2xl border border-border bg-background/40 p-8 text-center backdrop-blur-md lg:h-72"
            >
              <p className="text-sm leading-relaxed font-semibold text-foreground text-balance">
                &ldquo;{review.quote}&rdquo;
              </p>
              <p className="mt-5 text-xs tracking-[0.25em] uppercase text-cobalt">
                {review.author} — {review.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
