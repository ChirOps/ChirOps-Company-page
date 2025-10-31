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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
      <Card className="p-5 bg-white border-0 shadow-lg shadow-[#6f3096]/30">
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
      <Card className="p-5 bg-white border-0 shadow-lg shadow-[#6f3096]/30">
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
      <Card className="p-5 bg-white border-0 shadow-lg shadow-[#6f3096]/30">
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
      <Card className="p-5 bg-white border-0 shadow-lg shadow-[#6f3096]/30">
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
      <Card className="p-5 bg-white border-0 shadow-lg shadow-[#6f3096]/30">
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
  );
}
