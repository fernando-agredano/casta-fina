<div align="center">

# CASTA FINA

**Gorras de tiraje limitado, certificadas pieza por pieza.**
Herencia urbana, hechura fina.

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-black?style=flat-square&logo=framer&logoColor=white)

</div>

<br />

## Vista previa

<div align="center">

### Desktop

<img src="public/Desktop.png" alt="Casta Fina — vista desktop" width="100%" />

<br /><br />

### Mobile

<img src="public/Mobile.png" alt="Casta Fina — vista mobile" width="320" />

</div>

<br />

## Sobre el proyecto

Casta Fina es un sitio de una sola página construido para una marca de gorras de streetwear de tiraje limitado. El concepto de diseño toma prestado el lenguaje de los certificados de autenticidad y los libros de origen — números de serie, garantías, piezas numeradas — y lo aplica a una estética urbana oscura.

### Características

- **Hero de scroll interactivo** — la pieza destacada aparece y crece conforme el usuario hace scroll o desliza, con el título y subtítulo desvaneciéndose en la transición.
- **Catálogo** — grid de producto con imágenes reales, numeración de pieza y línea de colección.
- **Herencia / Certificado de proceso** — sección editorial con los pasos de manufactura.
- **Certificación** — grid tipo *bento* con efecto de brillo interactivo en el borde (sigue el cursor).
- **Voces** — carrusel de testimonios con auto-avance, flechas (desktop) y deslizar con el dedo (mobile).
- **Lista de espera + WhatsApp** — formulario de contacto y enlace directo a WhatsApp.
- **Navegación funcional de una sola página** — anclas con scroll suave que compensan la altura del header; menú lateral en mobile con fondo desenfocado.
- **Totalmente responsivo** — de mobile a desktop, con tipografía fluida y layouts que se reacomodan, no solo se encogen.

### Stack técnico

| Categoría | Tecnología |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS v4 |
| Animación | Framer Motion |
| Componentes | Convención shadcn/ui (`components/ui`) |
| Iconos | lucide-react |
| Tipografía | Big Shoulders (display) + Archivo (texto) vía `next/font` |

<br />

## Empezar

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

Otros comandos disponibles:

```bash
npm run build   # build de producción
npm run start   # sirve el build de producción
npm run lint    # revisa el código con ESLint
```

<br />

## Estructura del proyecto

```
app/
  layout.tsx        # fuentes, metadata, layout raíz
  page.tsx           # orden de las secciones de la página
  globals.css        # tema de color (oklch), radios, utilidades

components/
  site/              # una sección de la página por archivo
  blocks/            # componentes interactivos más complejos (hero)
  ui/                # primitivos reutilizables (botón, glow effect)

lib/
  products.ts        # catálogo — agrega/edita piezas aquí
  config.ts          # número de WhatsApp y mensaje predefinido

public/
  *.jpeg / *.png     # fotografía de producto y assets del sitio
```

<br />

## Personalización

- **Catálogo**: edita el arreglo en `lib/products.ts` (nombre, línea, precio, imagen, alt).
- **WhatsApp**: cambia el número y el mensaje en `lib/config.ts`.
- **Colores**: la paleta (fondo, acento *cobalt*, acento *oxblood*) vive como variables `oklch()` en `app/globals.css`.
- **Copy**: cada sección es un componente independiente en `components/site/`, con el texto directamente en el JSX.
