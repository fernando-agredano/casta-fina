import ScrollExpandMedia from "@/components/blocks/scroll-expansion-hero";

export function Hero() {
  return (
    <div id="top">
      <ScrollExpandMedia
        bgImageSrc="/hero-principal.jpeg"
        mediaSrc="/image-principal.jpeg"
        eyebrow="Casta Fina — Est. Herencia Urbana"
        title="Casta Fina"
        subtitle="No es una gorra. Es un linaje."
        scrollHint="Desliza para revelar la pieza"
      />
    </div>
  );
}
