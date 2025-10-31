"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ServicesSection from "@/components/services-section";
import DecorativeGraph from "@/components/ui/decorative-graph";
import { useRef } from "react"; // Importa useRef
import PhilosophySection from "@/components/philosophy-section";
import DecorativeGraphWhite from "@/components/ui/decorative-graph-white";
import { Footer } from "@/components/ui/footer";
import ReadySection from "@/components/ready-section";
import useWhatsAppRedirect from "@/components/hook/useWhatsAppRedirect";

export default function Home() {
  // Crea una referencia para la sección de servicios
  const servicesSectionRef = useRef<HTMLDivElement>(null);

  // Función para desplazarse a la sección de servicios
  const scrollToServices = () => {
    servicesSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const phoneNumber = "+5354006464";
  const message = "Hola!. He visto su página y me interesa su cartera de servicios y quisiera conocer más, podría ayudarme?";
  const target = '_blank';
  return (
    <div>
      <div className="relative overflow-hidden">
        <DecorativeGraph />

        <main className="min-h-screen w-full relative z-10">
          <section className="grid grid-cols-1 justify-items-center justify-center pt-10">
            <h1 className="text-6xl pb-17">ChirOps</h1>
            <span className="text-7xl max-w-[40%] text-center pt-40">
              Transformamos ideas en{" "}
              <span className="text-[#6f3096]">presencia digital</span>
            </span>
            <span className="pt-10 text-xl max-w-[40%] text-center text-gray-500">
              Desarrollo de software especializado para emprendimientos y
              negocios que necesitan destacar en la web
            </span>
            <div className="flex gap-3 items-center pt-16">
              <Button
                size="lg"
                onClick={useWhatsAppRedirect({ phoneNumber, message, target })}
                className="
                  bg-[#6f3096] text-white text-sm font-extralight
                  px-10 py-4
                  transition-all duration-300 ease-out
                  hover:bg-[#8340b3]
                  hover:scale-105
                  hover:shadow-lg
                  hover:cursor-pointer
                "
              >
                <span>Comenzar proyecto</span> <ArrowRight />
              </Button>

              {/* Modifica el botón "Ver Servicios" para usar la función de desplazamiento */}
              <Button
                size="lg"
                onClick={scrollToServices} // Añade el manejador de eventos
                className="
                  border border-gray-400 text-sm font-extralight
                  px-10 py-4
                  transition-all duration-300 ease-out
                  hover:border-[#6f3096]
                  hover:text-[#6f3096]
                  hover:scale-105
                  hover:shadow-md
                  hover:cursor-pointer
                "
              >
                <span>Ver Servicios</span>
              </Button>
            </div>
          </section>
        </main>
      </div>

      <section
        ref={servicesSectionRef}
        className="min-h-screen relative overflow-hidden p-20 bg-[#FAFAFA]"
      >
        <div className="grid grid-cols-1 justify-items-center justify-center pb-16">
          <span className="text-5xl max-w-[40%] text-center">
            Servicios que impulsan tu negocio
          </span>
          <span className="pt-10 text-xl max-w-[40%] text-center text-gray-500">
            Desarrollo de software especializado para emprendimientos y negocios
            que necesitan destacar en la web
          </span>
        </div>
        <ServicesSection />
      </section>

      <section className="min-h-screen relative overflow-hidden p-20 grid">
        <DecorativeGraph />
        <PhilosophySection />
      </section>

      <section className="min-h-screen relative overflow-hidden w-full bg-[#6f3096]/80 flex flex-col justify-items-center justify-center">
        <DecorativeGraphWhite />
        <ReadySection />
      </section>
      <Footer />
    </div>
  );
}
