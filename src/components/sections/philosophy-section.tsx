import { SquareCheckBig } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import Image from "next/image";

export default function PhilosophySection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-4 md:mb-6 leading-tight px-4">
        En <span className="text-[#6F3096]">ChirOps</span>, no solo construimos
        sitios web
      </h2>

      <p className="text-center text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto px-4">
        Nos enfocamos en lo que importa: entender tu negocio, tu audiencia y tus
        metas, para diseñar soluciones digitales que no solo se ven bien, sino
        que funcionan.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center px-4 md:px-0 py-6">
        <Card className="p-6 md:p-8 border border-[#9810FA]/20 shadow-xl shadow-[#ba93d6] space-y-6 order-1 lg:order-1 rounded-lg">
          <div className="space-y-5">
            <div>
              <h3 className="text-lg md:text-2xl font-bold text-[#6F3096] mb-2">
                Diseño centrado en el usuario
              </h3>
              <p className="text-sm md:text-xl text-foreground leading-relaxed ">
                Creamos interfaces intuitivas que guían a tus visitantes hacia
                la acción que deseas: comprar, contactarte o registrarse.
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-2xl font-bold text-[#6F3096] mb-2">
                Código limpio y seguro
              </h3>
              <p className="text-sm md:text-xl text-foreground leading-relaxed">
                Desarrollamos con buenas prácticas para garantizar seguridad, y
                capacidad de crecimiento a medida que evoluciona tu negocio.
              </p>
            </div>
            <div>
              <h3 className="text-lg md:text-2xl font-bold text-[#6F3096] mb-2">
                Comunicación transparente
              </h3>
              <p className="text-sm md:text-xl text-foreground leading-relaxed">
                Te mantenemos informado en cada etapa del proyecto. Sin
                sorpresas, sin silencios: solo colaboración constante.
              </p>
            </div>
            <div>
              <h3 className="text-lg md:text-2xl font-bold text-[#6F3096] mb-2">
                Entrega ágil
              </h3>
              <p className="text-sm md:text-xl text-foreground leading-relaxed">
                Trabajamos por iteraciones, para que veas avances reales desde
                el principio y puedas dar feedback en tiempo real.
              </p>
            </div>
          </div>
        </Card>

        <div className="relative flex items-center justify-center order-2 lg:order-2 md:translate-x-6 lg:translate-x-12">
          <Image
            src="/antecedentes-tecnologicos_1302-14984-Photoroom.png"
            alt="Developers working"
            className="object-contain w-full h-auto max-w-sm md:max-w-md lg:max-w-lg"
            width={718}
            height={671}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
}
