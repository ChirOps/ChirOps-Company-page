export default function DecorativeGraphWhite() {
  return (
    <div>
      {/* Esquina superior izquierda - Hexágonos */}
      <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/3 -translate-y-1/3 z-0">
        <div className="absolute inset-0 rotate-12">
          <div
            className="h-64 w-64 border-2 border-white/20"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          />
        </div>
        <div className="absolute inset-0 -rotate-12 translate-x-8 translate-y-8">
          <div
            className="h-64 w-64 border-2 border-white/20"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          />
        </div>
      </div>

      {/* Esquina superior derecha - Triángulos */}
      <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/3 -translate-y-1/4 z-0">
        <div className="absolute inset-0 -rotate-12">
          <div
            className="h-72 w-72 border-2 border-white/20"
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          />
        </div>
        <div className="absolute inset-0 rotate-12 translate-x-8 translate-y-8">
          <div
            className="h-72 w-72 border-2 border-white/20"
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          />
        </div>
      </div>

      {/* Esquina inferior izquierda - Diamantes */}
      <div className="absolute left-0 bottom-0 h-96 w-96 -translate-x-1/3 translate-y-1/3 z-0">
        <div className="absolute inset-0 rotate-12">
          <div className="h-64 w-64 border-2 border-white/20 rotate-45" />
        </div>
        <div className="absolute inset-0 -rotate-12 translate-x-8 translate-y-8">
          <div className="h-64 w-64 border-2 border-white/20 rotate-45" />
        </div>
      </div>

      {/* Esquina inferior derecha - Estrellas */}
      <div className="absolute right-0 bottom-0 h-96 w-96 translate-x-1/3 translate-y-1/4 z-0">
        <div className="absolute inset-0 -rotate-12">
          <div
            className="h-72 w-72 border-2 border-white/20"
            style={{
              clipPath:
                "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            }}
          />
        </div>
        <div className="absolute inset-0 rotate-12 translate-x-8 translate-y-8">
          <div
            className="h-72 w-72 border-2 border-white/20"
            style={{
              clipPath:
                "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            }}
          />
        </div>
      </div>

      {/* Centro izquierda - Círculos concéntricos */}
      <div className="absolute left-0 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 z-0">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-48 w-48 rounded-full border-2 border-white/30" />
          <div className="absolute h-32 w-32 rounded-full border-2 border-white/40" />
          <div className="absolute h-16 w-16 rounded-full border-2 border-white/50" />
        </div>
      </div>

      {/* Centro derecha - Cuadrados rotados */}
      <div className="absolute right-0 top-1/2 h-80 w-80 translate-x-1/2 -translate-y-1/2 z-0">
        <div className="absolute inset-0 rotate-30">
          <div className="h-56 w-56 border-2 border-white/30" />
        </div>
        <div className="absolute inset-0 -rotate-30 translate-x-6 translate-y-6">
          <div className="h-56 w-56 border-2 border-white/30" />
        </div>
      </div>

      {/* Elementos dispersos - Pequeños hexágonos */}
      <div
        className="absolute top-1/4 left-1/4 h-16 w-16 border-2 border-white/20 rotate-12 z-0"
        style={{
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
      />
      <div
        className="absolute top-1/3 right-1/3 h-20 w-20 border-2 border-white/20 -rotate-12 z-0"
        style={{
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 h-24 w-24 border-2 border-white/20 rotate-45 z-0"
        style={{
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 h-18 w-18 border-2 border-white/20 -rotate-45 z-0"
        style={{
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
      />

      {/* Elementos dispersos - Líneas diagonales */}
      <div className="absolute top-1/5 left-1/5 h-1 w-12 bg-white/15 rotate-30 z-0" />
      <div className="absolute top-2/5 right-1/5 h-1 w-16 bg-white/15 -rotate-30 z-0" />
      <div className="absolute bottom-1/5 left-2/5 h-1 w-14 bg-white/15 rotate-60 z-0" />
      <div className="absolute bottom-2/5 right-2/5 h-1 w-10 bg-white/15 -rotate-60 z-0" />

      {/* Elementos dispersos - Puntos */}
      <div className="absolute top-1/6 left-1/6 h-3 w-3 rounded-full bg-white/10 z-0" />
      <div className="absolute top-3/4 right-1/6 h-4 w-4 rounded-full bg-white/10 z-0" />
      <div className="absolute bottom-1/6 left-3/4 h-2 w-2 rounded-full bg-white/10 z-0" />
      <div className="absolute bottom-3/4 right-3/4 h-3 w-3 rounded-full bg-white/10 z-0" />
    </div>
  );
}
