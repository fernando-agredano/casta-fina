'use client';

import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LINKS = [
  { href: '#coleccion', label: 'Colección' },
  { href: '#herencia', label: 'Herencia' },
  { href: '#certificacion', label: 'Certificación' },
  { href: '#voces', label: 'Voces' },
  { href: '#contacto', label: 'Contacto' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goToSection = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);

    // The hero locks page scroll until its intro finishes; tell it to
    // skip straight to the expanded state so anchor links always work.
    window.dispatchEvent(new Event('castafina:skip-hero-intro'));

    // Two frames: one for React to commit the "skip intro" state, one for
    // the browser to actually lay out the (now taller/shorter) hero before
    // we measure the target's position. A single rAF was not always enough,
    // which is why this used to scroll to the wrong spot intermittently.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const target = document.querySelector(href);
        if (!target) return;

        const headerHeight = headerRef.current?.offsetHeight ?? 0;
        const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
      });
    });
  };

  const menuOverlay = (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-background/85 backdrop-blur-md md:hidden"
            onClick={() => setOpen(false)}
          />
          <motion.div
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 z-[45] flex max-h-[85vh] w-[min(80vw,340px)] flex-col overflow-y-auto rounded-bl-3xl border-b border-l border-border bg-background pt-28 pb-8 md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => goToSection(e, link.href)}
                    className="block py-3 text-sm tracking-[0.15em] uppercase text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 px-6">
              <a
                href="#coleccion"
                onClick={(e) => goToSection(e, '#coleccion')}
                className="block rounded-lg bg-cobalt py-3 text-center text-xs tracking-[0.2em] uppercase text-background"
              >
                Ver colección
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-background/85 backdrop-blur border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="px-6 py-6 md:px-16">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a
            href="#top"
            onClick={(e) => goToSection(e, '#top')}
            className="font-display font-black uppercase tracking-[0.08em] text-2xl md:text-3xl text-foreground"
          >
            Casta Fina
          </a>

          <ul className="hidden md:flex items-center gap-9">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => goToSection(e, link.href)}
                  className="text-xs tracking-[0.2em] uppercase text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#coleccion"
            onClick={(e) => goToSection(e, '#coleccion')}
            className="hidden md:inline-flex items-center text-xs tracking-[0.2em] uppercase text-foreground transition-colors hover:text-cobalt"
          >
            Ver colección
          </a>

          <button
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className="relative z-10 md:hidden text-foreground"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {typeof document !== 'undefined' && createPortal(menuOverlay, document.body)}
    </header>
  );
}
