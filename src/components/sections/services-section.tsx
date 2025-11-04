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
  const services = [
    {
      id: "catalogos",
      title: "Catálogos Web",
      Icon: Globe,
      description:
        "Sitios web sencillos y efectivos para mostrar tus productos o servicios de manera profesional",
    },
    {
      id: "landing",
      title: "Landing Pages",
      Icon: CardSim,
      description:
        "Páginas de aterrizaje optimizadas para convertir visitantes en clientes potenciales",
    },
    {
      id: "ecommerce",
      title: "E-Commerce",
      Icon: ShoppingCart,
      description:
        "Tiendas en línea completas con sistema de órdenes, inventario y gestión de pedidos",
    },
    {
      id: "brand",
      title: "Identidad de Marca",
      Icon: Figma,
      description:
        "Manuales de identidad visual que definen y fortalecen la presencia de tu marca",
    },
    {
      id: "consultoria",
      title: "Asesoría Técnica",
      Icon: ServerCog,
      description:
        "Consultoría especializada para optimizar y escalar tu presencia digital",
    },
  ];

  return (
    <section
      aria-labelledby="services-heading"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12"
    >
      <h2 id="services-heading" className="sr-only">
        Servicios
      </h2>

      {/* 3-column grid: mobile 1, sm 2, lg 3 */}
      <div
        role="list"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto"
      >
        {services.map((service) => (
          <Card
            key={service.id}
            className="p-6 bg-white border-0 shadow-lg shadow-[#6f3096]/30 hover:scale-105 hover:shadow-[#f09eff] transition-transform duration-300 ease-out flex flex-col h-full"
          >
            <CardHeader className="flex flex-col items-center text-center">
              <service.Icon className="w-10 h-10 md:w-12 md:h-12 text-[#6f3096] mb-4" />
              <CardTitle>
                <p className="text-2xl sm:text-3xl font-semibold">
                  {service.title}
                </p>
              </CardTitle>
            </CardHeader>
            <CardContent className="mt-3 flex-1">
              <p className="text-base sm:text-lg leading-relaxed text-slate-700">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
