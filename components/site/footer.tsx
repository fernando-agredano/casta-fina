export function Footer() {
  return (
    <footer className="px-6 py-14 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 text-center md:grid-cols-[1.4fr_1fr_1fr_1fr] md:text-left">
          <div>
            <p className="font-display text-2xl font-black uppercase text-foreground">
              Casta Fina
            </p>
            <p className="mx-auto mt-3 max-w-xs text-sm text-muted-foreground md:mx-0">
              Gorras de tiraje limitado, numeradas y certificadas una por
              una. Hecho a mano en Guadalajara, México.
            </p>
            <div className="mt-5 flex items-center justify-center gap-4 text-xs tracking-[0.2em] uppercase md:justify-start">
              <a
                href="#"
                aria-label="Instagram de Casta Fina"
                className="text-muted-foreground transition-colors hover:text-cobalt"
              >
                Instagram
              </a>
              <span className="text-border">&middot;</span>
              <a
                href="#"
                aria-label="TikTok de Casta Fina"
                className="text-muted-foreground transition-colors hover:text-cobalt"
              >
                TikTok
              </a>
            </div>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.25em] uppercase text-cobalt">
              Tienda
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li><a href="#coleccion" className="hover:text-foreground">Colección</a></li>
              <li><a href="#herencia" className="hover:text-foreground">Herencia</a></li>
              <li><a href="#certificacion" className="hover:text-foreground">Certificación</a></li>
              <li><a href="#voces" className="hover:text-foreground">Voces</a></li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.25em] uppercase text-cobalt">
              Ayuda
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li><a href="#contacto" className="hover:text-foreground">Contacto</a></li>
              <li><a href="#" className="hover:text-foreground">Envíos</a></li>
              <li><a href="#" className="hover:text-foreground">Cambios y devoluciones</a></li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.25em] uppercase text-cobalt">
              Legal
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Términos</a></li>
              <li><a href="#" className="hover:text-foreground">Privacidad</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 border-t border-border pt-8 text-center text-[11px] tracking-[0.15em] uppercase text-muted-foreground/70 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>&copy; {new Date().getFullYear()} Casta Fina. Todos los derechos reservados.</p>
          <p>Guadalajara, Jalisco</p>
        </div>
      </div>
    </footer>
  );
}
