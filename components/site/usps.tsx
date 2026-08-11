'use client';

import { BadgeCheck, Truck, Hash, Scissors, Lock, RefreshCw } from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';

const ITEMS = [
  {
    n: 'N.º 01',
    title: 'Autenticidad certificada',
    description:
      'Cada gorra sale con su tarjeta de origen firmada y un código único que puedes verificar en nuestro libro de registro.',
    icon: BadgeCheck,
    area: 'md:col-span-5',
  },
  {
    n: 'N.º 02',
    title: 'Envío asegurado',
    description:
      'Empaque rígido, seguimiento en tiempo real y entrega en 24–72 horas en toda la república.',
    icon: Truck,
    area: 'md:col-span-7',
  },
  {
    n: 'N.º 03',
    title: 'Piezas numeradas',
    description:
      'Tirajes cerrados de 50 a 120 unidades por diseño. Agotado un número, se retira del catálogo.',
    icon: Hash,
    area: 'md:col-span-4',
  },
  {
    n: 'N.º 04',
    title: 'Bordado a mano',
    description:
      'Cada emblema se borda a mano en nuestro taller, hilo por hilo, sin plantillas digitales.',
    icon: Scissors,
    area: 'md:col-span-4',
  },
  {
    n: 'N.º 05',
    title: 'Tiraje cerrado',
    description:
      'Cuando un diseño se agota, no vuelve a fabricarse. Cada pieza es parte de un lote finito.',
    icon: Lock,
    area: 'md:col-span-4',
  },
  {
    n: 'N.º 06',
    title: 'Cambios sin costo',
    description:
      'Si la talla no es la correcta, el primer cambio corre por nuestra cuenta dentro de los 15 días posteriores a la entrega.',
    icon: RefreshCw,
    area: 'md:col-span-12',
  },
];

export function Usps() {
  return (
    <section id="certificacion" className="border-t border-b border-border px-6 py-20 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-xs tracking-[0.3em] text-cobalt uppercase">
            Certificación &middot; Casta Fina
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,5vw,3.4rem)] leading-[0.95] font-black text-foreground uppercase">
            Seis garantías, un solo linaje
          </h2>
        </div>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.n} className={`min-h-[14rem] list-none ${item.area}`}>
                <div className="relative h-full rounded-2xl border border-border p-2">
                  <GlowingEffect
                    spread={40}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={2}
                    glow
                    disabled={false}
                  />
                  <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-card p-6">
                    <div className="flex items-start justify-between">
                      <div className="w-fit rounded-lg border border-border p-2 text-cobalt">
                        <Icon size={18} />
                      </div>
                      <span className="text-xs tracking-[0.2em] text-muted-foreground">
                        {item.n}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold uppercase text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
