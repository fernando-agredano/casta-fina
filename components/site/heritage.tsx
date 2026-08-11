'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const STEPS = [
  {
    n: '01',
    title: 'Selección de tela',
    body: 'Mezclas de algodón peinado y lona resistente, elegidas por su caída y su durabilidad ante el sol y la calle.',
  },
  {
    n: '02',
    title: 'Bordado en taller',
    body: 'Cada emblema se borda a mano en nuestro taller de Guadalajara, hilo por hilo, sin plantillas digitales.',
  },
  {
    n: '03',
    title: 'Numeración y sello',
    body: 'La pieza recibe su número de serie y su sello de cuero antes de salir del taller hacia tu puerta.',
  },
];

export function Heritage() {
  return (
    <section id="herencia" className="border-b border-border px-6 py-24 md:px-16 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex h-full flex-col"
        >
          <div className="relative aspect-[4/3] w-full flex-1 rounded-2xl border border-cobalt/30 p-3 md:aspect-auto">
            <div className="relative h-full w-full overflow-hidden rounded-xl">
              <Image
                src="/image-6.jpeg"
                alt="Gorra negra con logo LA metálico y tachuelas, detalle de acabado"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        <div>
          <div className="text-center md:text-left">
            <p className="text-xs tracking-[0.3em] uppercase text-cobalt">
              Certificado de proceso
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,5.2vw,3.6rem)] font-black uppercase leading-[0.95] text-foreground">
              De casta fina, por hechura fina
            </h2>
            <p className="mx-auto mt-6 max-w-lg font-semibold text-muted-foreground md:mx-0">
              No competimos por precio. Competimos por lo que queda cuando la
              prenda ya se lavó cien veces y el bordado sigue intacto.
            </p>
          </div>

          <div className="mt-10 divide-y divide-border border-t border-border">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="grid grid-cols-[auto_1fr] gap-6 py-6"
              >
                <span className="font-display text-3xl text-cobalt">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold uppercase text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1 max-w-md text-sm text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
