"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import ServicesSection from "@/components/sections/services-section"
import DecorativeGraph from "@/components/ui/decorative-graph"
import { useRef } from "react"
import PhilosophySection from "@/components/sections/philosophy-section"
import DecorativeGraphWhite from "@/components/ui/decorative-graph-white"
import { Footer } from "@/components/ui/footer"
import ReadySection from "@/components/sections/ready-section"
import useWhatsAppRedirect from "@/components/hook/useWhatsAppRedirect"
import { ChirOpsLogo } from "../chirops-logo"
import { BlurredTriangleBackground } from "../ui/blurred-triangule"

export default function HomeContainer() {
  const servicesSectionRef = useRef<HTMLDivElement>(null)

  const scrollToServices = () => {
    servicesSectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const phoneNumber = "+5354006464"
  const message =
    "Hola!. He visto su página y me interesa su cartera de servicios y quisiera conocer más, podría ayudarme?"
  const target = "_blank"

  return (
    <div>
      <div className="relative overflow-hidden bg-white">
        <DecorativeGraph />
        <main className="min-h-screen w-full relative z-10">
          <section className="grid grid-cols-1 justify-items-center justify-center pt-20 ">
            <ChirOpsLogo width={328} height={241} className="p-14 sm:p-0"/>
            <span className="text-4xl lg:text-7xl sm:max-w-[60%] text-center pt-5">
              Transformamos ideas en
              <span className="text-[#6f3096] font-bold"> Presencia Digital</span>
            </span>
            <span className="pt-3 text-lg lg:text-2xl sm:max-w-[50%] text-center text-gray-500">
              Desarrollo de software especializado para emprendimientos y negocios que necesitan destacar en la web
            </span>
            <div className="grid sm:grid-cols-2 gap-3 items-center pt-10">
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
                  shadow-lg
                  shadow-[#9146c6]
                "
              >
                <span>Comenzar proyecto</span> <ArrowRight />
              </Button>

              <Button
                size="lg"
                onClick={scrollToServices}
                className="
                  border-2 border-[#6f3096] text-sm font-extralight
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

      <div className="relative">
         <BlurredTriangleBackground />
         <section className="min-h-screen relative overflow-hidden py-20 ">
        
        <PhilosophySection />
      </section>

      <section ref={servicesSectionRef} className="min-h-screen relative overflow-hidden py-20 ">
        <div className="grid grid-cols-1 justify-items-center justify-center pb-16">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold max-w-[1000px] text-center mb-3 md:mb-4 text-balance px-4">
          Tu <span className="text-[#6f3096]">presencia digital</span>, lista para{" "}
          <span className="text-[#6f3096]">vender</span>
        </h2>

        <p className="text-center text-gray-500 text-base md:text-2xl max-w-2xl mx-auto text-pretty px-4">
          Servicios digitales creados a medida, donde cada detalle tiene una razón de ser.
        </p>
        </div>
        <ServicesSection />
      </section>

      </div>
    
       

      

      <section className="min-h-screen relative overflow-hidden w-full bg-[#6f3096]/80 flex flex-col justify-items-center justify-center">
        <DecorativeGraphWhite />
        <ReadySection />
      </section>

      <Footer />
    </div>
  )
}
