export type Product = {
  serial: string;
  name: string;
  line: string;
  price: string;
  image: string;
  alt: string;
};

export const products: Product[] = [
  {
    serial: "N.º 001",
    name: "Rich Forever",
    line: "Línea Herencia",
    price: "$62.000",
    image: "/image-9.jpeg",
    alt: "Gorra negra con logo bordado \"Rich Forever\" en relieve y estrellas bordadas",
  },
  {
    serial: "N.º 002",
    name: "Casta Gótica",
    line: "Línea Herencia",
    price: "$58.000",
    image: "/image-1.jpeg",
    alt: "Gorra negra con letra A plateada bordada en relieve y visera desgastada",
  },
  {
    serial: "N.º 003",
    name: "NY Gótica",
    line: "Línea Casta",
    price: "$60.000",
    image: "/image-3.jpeg",
    alt: "Gorra negra con letras góticas, logo NY bordado y tachuelas metálicas",
  },
  {
    serial: "N.º 004",
    name: "Thirty Burbuja",
    line: "Línea Casta",
    price: "$58.000",
    image: "/image-4.jpeg",
    alt: "Gorra negra con letras burbuja \"Thirty\" bordadas y visera interior rosa",
  },
  {
    serial: "N.º 005",
    name: "Flor Nocturna",
    line: "Línea Archivo",
    price: "$65.000",
    image: "/image-2.jpeg",
    alt: "Gorra negra de terciopelo con flor bordada y pedrería brillante",
  },
  {
    serial: "N.º 006",
    name: "Corazón Roto",
    line: "Línea Archivo",
    price: "$58.000",
    image: "/image-7.jpeg",
    alt: "Gorra negra con bordado tipo tatuaje y pedrería en forma de corazón",
  },
];
