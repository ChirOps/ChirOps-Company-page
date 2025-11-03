import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Globe, CardSim, ShoppingCart, Figma, ServerCog } from "lucide-react";

export default function ServicesSection() {
  return (
    <>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8 px-5 sm:px-14">
      <Card className="p-5 bg-white border-0 shadow-lg shadow-[#6f3096]/30 hover:scale-105 hover:shadow-[#f09eff] transition-all duration-300 ease-out">
        <CardHeader>
          <CardTitle>
            <Globe className="w-10 h-10 text-[#6f3096] mb-5" />
            <p className="text-3xl">Catálogos Web</p>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-5">
            Sitios web sencillos y efectivos para mostrar tus productos o
            servicios de manera profesional
          </p>
        </CardContent>
      </Card>
      <Card className="p-5 bg-white border-0 shadow-lg shadow-[#6f3096]/30 hover:scale-105 hover:shadow-[#f09eff] transition-all duration-300 ease-out">
        <CardHeader>
          <CardTitle>
            <CardSim className="w-10 h-10 text-[#6f3096] mb-5" />
            <p className="text-3xl">Landing Pages</p>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-5">
            Paginas de aterrizaje optimizadas para convertir visitantes en
            clientes potenciales
          </p>
        </CardContent>
      </Card>
      <Card className="p-5 bg-white border-0 shadow-lg shadow-[#6f3096]/30 hover:scale-105 hover:shadow-[#f09eff] transition-all duration-300 ease-out">
        <CardHeader>
          <CardTitle>
            <ShoppingCart className="w-10 h-10 text-[#6f3096] mb-5" />
            <p className="text-3xl">E-Comerce</p>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-5">
            Tiendas en línea completas con sistema de órdenes, inventario y
            gestión de pedidos
          </p>
        </CardContent>
      </Card>
    </div>


    <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8 mx-auto px-5 sm:px-14">
      <Card className="p-5 bg-white border-0 shadow-lg shadow-[#6f3096]/30 hover:scale-105 hover:shadow-[#f09eff] transition-all duration-300 ease-out">
        <CardHeader>
          <CardTitle>
            <Figma className="w-10 h-10 text-[#6f3096] mb-5" />
            <p className="text-3xl">Identidad de Marca</p>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-5">
            Manuales de identidad visual que defiunen y fortalecen la presencia
            de tu marca
          </p>
        </CardContent>
      </Card>
      <Card className="p-5 bg-white border-0 shadow-lg shadow-[#6f3096]/30 hover:scale-105 hover:shadow-[#f09eff] transition-all duration-300 ease-out">
        <CardHeader>
          <CardTitle>
            <ServerCog className="w-10 h-10 text-[#6f3096] mb-5" />
            <p className="text-3xl">Asesoría Técnica</p>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-5">
            Consultoría especiañizada para optimizar y escalar tu presencia
            digital
          </p>
        </CardContent>
      </Card>
    </div>
    
    </>
    

    
  );
}
