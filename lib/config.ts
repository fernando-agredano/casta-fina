export const WHATSAPP_NUMBER = "5213312345678";
export const WHATSAPP_MESSAGE =
  "Hola, quiero conocer más sobre la colección de Casta Fina.";

export const whatsappHref = () =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
