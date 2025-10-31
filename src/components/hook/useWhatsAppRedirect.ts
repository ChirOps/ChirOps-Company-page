// hooks/useWhatsAppRedirect.ts
import { useCallback } from "react";

interface UseWhatsAppRedirectProps {
  phoneNumber: string;
  message: string;
  target: "_blank" | "_self";
}

const useWhatsAppRedirect = ({
  phoneNumber,
  message = "",
  target = "_blank",
}: UseWhatsAppRedirectProps) => {
  const redirectToWhatsApp = useCallback(() => {
    // Validar que el número tenga formato internacional
    // if (!phoneNumber || !/^\d+$/.test(phoneNumber)) {
    //   console.error(
    //     "El número de teléfono debe contener solo dígitos en formato internacional"
    //   );
    //   return;
    // }

    // Codificar mensaje para URL
    const encodedMessage = encodeURIComponent(message);

    // Construir URL de WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Redirigir según el target especificado
    if (target === "_self") {
      window.location.href = whatsappUrl;
    } else {
      window.open(whatsappUrl, target);
    }
  }, [phoneNumber, message, target]);

  return redirectToWhatsApp;
};

export default useWhatsAppRedirect;
