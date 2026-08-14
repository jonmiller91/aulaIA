// Contato via WhatsApp — sem formulários de captação/CRM.
// Todo CTA de contato do site aponta para o WhatsApp com mensagem pré-preenchida.

export const WHATSAPP_NUMBER = "5511000000000"; // placeholder — substituir pelo número real
export const CONTACT_PHONE = "+55 11 0000-0000";
export const CONTACT_EMAIL = "contato@selectcars.com.br";

export const GENERIC_MESSAGE =
  "Olá, gostaria de falar com um curador da SELECTCARS.";

export function whatsappLink(message: string = GENERIC_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function vehicleMessage(brand: string, model: string): string {
  return `Olá, gostaria de saber mais sobre o ${brand} ${model}`;
}
