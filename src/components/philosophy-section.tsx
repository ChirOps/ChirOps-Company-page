import { SquareCheckBig } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";
import Image from "next/image";

export default function PhilosophySection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
      <Card className="p-5 bg-white border-0 shadow-lg shadow-[#6f3096]/40">
        <CardHeader>
          <CardTitle>
            <p className="text-4xl font-bold mb-5">
              Nuestra filosofía de trabajo
            </p>
          </CardTitle>
          <CardDescription>
            <p className="text-lg text-gray-700">
              En ChirOps, creemos que cada proyecto es único. Trabajamos de
              cerca contigo para entender tu visión y transformarla en una
              solución digital efectiva.
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <div className="flex items-center mt-5">
              <SquareCheckBig className="text-[#6f3096] mr-2 h-8 w-8" />
              <p className="font-bold text-2xl">
                Diseño centrado en el usuario
              </p>
            </div>
            <p className="text-lg text-gray-700 mt-3">
              Creamos experiencias intuitivas que conectan con tu audiencia
            </p>
          </div>
          <div>
            <div className="flex items-center mt-10">
              <SquareCheckBig className="text-[#6f3096] mr-2 h-8 w-8" />
              <p className="font-bold text-2xl">Código limpio y escalable</p>
            </div>
            <p className="text-lg text-gray-700 mt-3">
              Desarrollo profesional que crece con tu negocio
            </p>
          </div>
          <div>
            <div className="flex items-center mt-10">
              <SquareCheckBig className="text-[#6f3096] mr-2 h-8 w-8" />
              <p className="font-bold text-2xl">Comunicación transparente</p>
            </div>
            <p className="text-lg text-gray-700 mt-3">
              Te mantenemos informado en cada etapa del proyecto
            </p>
          </div>
          <div>
            <div className="flex items-center mt-10">
              <SquareCheckBig className="text-[#6f3096] mr-2 h-8 w-8" />
              <p className="font-bold text-2xl">Entrega ágil</p>
            </div>
            <p className="text-lg text-gray-700 mt-3">
              Iteraciones rápidas para ver resultados desde el inicio
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col justify-items-center justify-center">
        <div className="flex flex-col justify-items-center justify-center w-full h-full rounded-3xl bg-linear-to-br from-purple-200/60 via-purple-300/40 to-purple-200/60 shadow-lg">
          {/* icon */}
          <div className="grid justify-items-center justify-center text-center ">
            {/* Icon circle */}
            <div className="mb-8 flex h-64 w-64 items-center justify-center rounded-full bg-purple-400/30">
              <div className="flex h-48 w-48 items-center justify-center rounded-full bg-purple-500/40"></div>
            </div>

            {/* Brand text */}
            <h1 className="mb-2 text-3xl font-semibold text-gray-900">
              ChirOps
            </h1>
            <p className="text-lg text-gray-700">
              Volando alto con tu proyecto
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
