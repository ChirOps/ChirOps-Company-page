import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import useWhatsAppRedirect from "../hook/useWhatsAppRedirect";

export default function ReadySection() {
  const phoneNumber = "+5354006464";
  const message =
    "¡Hola!. He visto la página de ChirOps, me interesa su cartera de servicios y quisiera conocer más. ¿Podría ayudarme?";
  const target = "_blank";
  return (
    <div className="flex flex-col w-full place-items-center justify-center">
      <span className="text-4xl lg:text-7xl text-white sm:max-w-[60%] md:max-w-[50%] text-center mb-10">
        ¿Listo para llevar tu negocio al siguiente nivel?
      </span>
      <span className="text-lg sm:text-xl max-w-[80%] sm:max-w-[50%] text-center text-white mb-10">
        Desarrollo de software especializado para emprendimientos y negocios que
        necesitan destacar en la web
      </span>
      <div className="">
        <Button
          size="lg"
          onClick={useWhatsAppRedirect({ phoneNumber, message, target })}
          className="
                  bg-[#615F5F] text-white text-sm font-extralight
                  px-10 py-4
                  transition-all duration-300 ease-out
                  hover:bg-[#615F5F]/80
                  hover:scale-105
                  hover:shadow-lg
                  hover:cursor-pointer
                "
        >
          <span>Iniciar Conversación</span> <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
