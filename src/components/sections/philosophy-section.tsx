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
    <div className="max-w-6xl mx-auto">
      
        <h2 className="text-3xl md:text-6xl lg:text-6xl font-bold text-center mb-4 md:mb-6 text-balance px-4">
          En <span className="text-[#6F3096]">ChirOps</span>, no solo construimos sitios web
        </h2>

        <p className="text-center text-gray-400 text-sm md:text-2xl lg:w-6xl mx-auto px-4">
          Nos enfocamos en lo que importa: entender tu negocio, tu audiencia y tus metas, para diseñar soluciones
          digitales que no solo se ven bien, sino que funcionan.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 items-center p-5">
          <Card className="p-6 md:p-8 border sm:w-2xl border-[#9810FA]/20 bg-transparent shadow-xl shadow-[#ba93d6]  space-y-6 order-2 lg:order-1">
            <div className="space-y-5">
              <div>
                <h3 className="text-lg md:text-2xl font-bold text-[#6F3096] mb-2">Diseño centrado en el usuario</h3>
                <p className="text-sm md:text-xl text-foreground leading-relaxed ">
                  Creamos interfaces intuitivas que guían a tus visitantes hacia la acción que deseas: comprar,
                  contactarte o registrarse.
                </p>
              </div>

              <div>
                <h3 className="text-lg md:text-2xl font-bold text-[#6F3096] mb-2">Código limpio y seguro</h3>
                <p className="text-sm md:text-xl text-foreground leading-relaxed">
                  Desarrollamos con buenas prácticas para garantizar seguridad, y capacidad de crecimiento a medida que
                  evoluciona tu negocio.
                </p>
              </div>

              <div>
                <h3 className="text-lg md:text-2xl font-bold text-[#6F3096] mb-2">Comunicación transparente</h3>
                <p className="text-sm md:text-xl text-foreground leading-relaxed">
                  Te mantenemos informado en cada etapa del proyecto. Sin sorpresas, sin silencios: solo colaboración
                  constante.
                </p>
              </div>

              <div>
                <h3 className="text-lg md:text-2xl font-bold text-[#6F3096] mb-2">Entrega ágil</h3>
                <p className="text-sm md:text-xl text-foreground leading-relaxed">
                  Trabajamos por iteraciones, para que veas avances reales desde el principio y puedas dar feedback en
                  tiempo real.
                </p>
              </div>
            </div>
          </Card>

          <div className="relative sm:h-[718px] sm:w-[671px] sm:translate-x-40 flex items-center justify-center order-1 lg:order-2">
            
            <Image
              src="/antecedentes-tecnologicos_1302-14984-Photoroom.png"
              alt="Developers working"
              className="  object-contain"
              width={718}
              height={671}
            />
          </div>
        </div>
      </div>
  );
}
