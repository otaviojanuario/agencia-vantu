import Image from "next/image"

export function WhatsAppButton() {
  return (
    <a href="https://wa.me/551130361825?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Ag%C3%AAncia%20VANTU%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os." target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-14 h-14 bg-green-500 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
      <Image src="/assets/whatsapp_2.png" alt="WhatsApp" width={32} height={32} />
    </a>
  )
}
