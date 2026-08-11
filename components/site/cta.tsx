'use client';

import { useState, type FormEvent } from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { whatsappHref } from '@/lib/config';

export function Cta() {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setJoined(true);
  };

  return (
    <section id="contacto" className="border-b border-border px-6 py-24 md:px-16 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:items-center md:gap-24">
        <div className="text-center md:text-left">
          <p className="text-xs tracking-[0.3em] uppercase text-cobalt">
            Lista de espera
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,5vw,3.4rem)] font-black uppercase leading-[0.95] text-foreground">
            Entérate antes de que se agote el número
          </h2>
          <p className="mx-auto mt-5 max-w-md font-semibold text-muted-foreground md:mx-0">
            Avisamos primero a la lista cuando cae un tiraje nuevo. Sin spam,
            sin relleno — solo la pieza y su número.
          </p>

          <div className="mt-8">
            <AnimatePresence mode="wait">
              {joined ? (
                <motion.p
                  key="confirm"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg border border-cobalt/40 px-4 py-3 text-sm text-cobalt"
                >
                  Registrado. Te avisaremos antes que a nadie, {email}.
                </motion.p>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-3 sm:flex-row"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@correo.com"
                    className="w-full rounded-lg border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-cobalt"
                  />
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 rounded-lg bg-oxblood px-6 py-3 text-xs tracking-[0.2em] uppercase text-oxblood-foreground transition-opacity hover:opacity-90"
                  >
                    Unirme
                    <ArrowRight size={14} />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="rounded-2xl border border-border p-8 text-center md:p-10 md:text-left">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
            ¿Prefieres hablar directo?
          </p>
          <p className="mt-4 text-base font-bold text-foreground md:text-xl">
            Resolvemos tallas, envíos y disponibilidad por WhatsApp — sin
            bots, un humano del taller responde.
          </p>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-cobalt/50 px-5 py-3 text-xs tracking-[0.2em] uppercase text-cobalt transition-colors hover:bg-cobalt hover:text-background"
          >
            <MessageCircle size={16} />
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
