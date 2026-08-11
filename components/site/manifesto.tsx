'use client';

import { motion } from 'framer-motion';

export function Manifesto() {
  return (
    <section className="border-b border-border px-6 py-24 text-center md:px-16 md:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(1.9rem,5.4vw,4.2rem)] font-bold leading-[1.05] uppercase text-foreground"
        >
          No todos cargan presencia.{' '}
          <span className="text-cobalt">Algunos la construyen.</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-8 max-w-2xl text-lg font-semibold text-muted-foreground"
        >
          Casta Fina representa disciplina, calle y ambición. Para quienes
          vienen de abajo, piensan en grande y entienden que el estilo
          también habla por ellos.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 font-display text-2xl font-bold uppercase text-foreground md:text-3xl"
        >
          No es lo que llevas puesto.
          <br />
          <span className="text-cobalt">Es cómo lo haces tuyo.</span>
        </motion.p>
      </div>
    </section>
  );
}
