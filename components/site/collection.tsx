'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { products } from '@/lib/products';

export function Collection() {
  return (
    <section id="coleccion" className="border-b border-border px-6 py-24 md:px-16 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col items-center gap-4 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-cobalt">
              Catálogo &middot; Temporada I
            </p>
            <h2 className="mt-3 font-display text-[clamp(2.2rem,6vw,4.5rem)] font-black uppercase leading-[0.9] text-foreground">
              La colección
            </h2>
          </div>
          <p className="max-w-sm font-semibold text-muted-foreground">
            Seis piezas, tiraje cerrado. Cuando se agota un número, no vuelve
            a fabricarse.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
          {products.map((product, i) => (
            <motion.article
              key={product.serial}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border"
            >
              <Image
                src={product.image}
                alt={product.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />

              <span className="absolute top-4 left-4 text-[10px] tracking-[0.25em] uppercase text-cobalt">
                {product.serial}
              </span>

              <div className="absolute inset-x-4 bottom-4 flex items-end justify-between">
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                    {product.line}
                  </p>
                  <h3 className="font-display text-xl font-bold uppercase text-foreground">
                    {product.name}
                  </h3>
                </div>
                <span className="font-bold text-lg text-foreground">
                  {product.price}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
