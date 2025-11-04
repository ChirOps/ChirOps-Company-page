import { ChirOpsLogo } from "@/components/chirops-logo"
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail} from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white py-8 md:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-8">
          <div>
            <ChirOpsLogo className="" />
            <p className="text-xl md:text-2xl font-bold">ChirOps, haciendo volar tus ideas</p>
          </div>

          <div>
            <h3
              className="text-base md:text-lg font-bold mb-3 md:mb-4"
              style={{ color: "#D946EF" }}
            >
              ENLACES RÁPIDOS
            </h3>
            <ul className="space-y-2 text-white">
              <li>
                <a
                  href="#"
                  className="hover:text-purple-400 transition-colors text-sm md:text-base"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-purple-400 transition-colors text-sm md:text-base"
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-purple-400 transition-colors text-sm md:text-base"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-purple-400 transition-colors text-sm md:text-base"
                >
                  Contáctanos
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-3 md:gap-4 mb-6 md:mb-8">
          <a
            href="#"
            className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors"
            aria-label="Linkedin"
          >
            <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
          </a>
          <a
            href="mailto:chiropscompany@gmail.com"
            className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors"
            aria-label="Mail"
          >
            <Mail className="w-4 h-4 md:w-5 md:h-5" />
          </a>
          {/* <a
            href="#"
            className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-4 h-4 md:w-5 md:h-5" />
          </a>
          <a
            href="#"
            className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4 md:w-5 md:h-5" />
          </a>
          <a
            href="#"
            className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors"
            aria-label="YouTube"
          >
            <Youtube className="w-4 h-4 md:w-5 md:h-5" />
          </a> */}
        </div>

        <div className="border-t border-gray-800 pt-6 md:pt-8">
          <p className="text-xs md:text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} ChirOps. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
