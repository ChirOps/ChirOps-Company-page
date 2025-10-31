export default function DecorativeGraph() {
return (
  <div>
    {/* Decoraciones existentes - Esquina superior izquierda */}
    <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/3 -translate-y-1/3 z-0">
      <div className="absolute inset-0 rotate-12">
        <div className="h-64 w-64 rounded-3xl border-2 border-purple-600/40" />
      </div>
      <div className="absolute inset-0 -rotate-12 translate-x-8 translate-y-8">
        <div className="h-64 w-64 rounded-3xl border-2 border-purple-600/40" />
      </div>
    </div>

    {/* Decoraciones existentes - Esquina superior derecha */}
    <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/3 -translate-y-1/4 z-0">
      <div className="absolute inset-0 -rotate-12">
        <div className="h-72 w-72 rounded-3xl border-2 border-purple-600/40" />
      </div>
      <div className="absolute inset-0 rotate-12 translate-x-8 translate-y-8">
        <div className="h-72 w-72 rounded-3xl border-2 border-purple-600/40" />
      </div>
    </div>

    {/* Nuevas decoraciones - Esquina inferior izquierda */}
    <div className="absolute left-0 bottom-0 h-96 w-96 -translate-x-1/3 translate-y-1/3 z-0">
      <div className="absolute inset-0 rotate-12">
        <div className="h-64 w-64 rounded-3xl border-2 border-purple-600/40" />
      </div>
      <div className="absolute inset-0 -rotate-12 translate-x-8 translate-y-8">
        <div className="h-64 w-64 rounded-3xl border-2 border-purple-600/40" />
      </div>
    </div>

    {/* Nuevas decoraciones - Esquina inferior derecha */}
    <div className="absolute right-0 bottom-0 h-96 w-96 translate-x-1/3 translate-y-1/4 z-0">
      <div className="absolute inset-0 -rotate-12">
        <div className="h-72 w-72 rounded-3xl border-2 border-purple-600/40" />
      </div>
      <div className="absolute inset-0 rotate-12 translate-x-8 translate-y-8">
        <div className="h-72 w-72 rounded-3xl border-2 border-purple-600/40" />
      </div>
    </div>

    {/* Decoraciones adicionales - Centro izquierda */}
    <div className="absolute left-0 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 z-0">
      <div className="absolute inset-0 rotate-45">
        <div className="h-48 w-48 rounded-3xl border-2 border-purple-600/30" />
      </div>
      <div className="absolute inset-0 -rotate-45 translate-x-6 translate-y-6">
        <div className="h-48 w-48 rounded-3xl border-2 border-purple-600/30" />
      </div>
    </div>

    {/* Decoraciones adicionales - Centro derecha */}
    <div className="absolute right-0 top-1/2 h-80 w-80 translate-x-1/2 -translate-y-1/2 z-0">
      <div className="absolute inset-0 rotate-30">
        <div className="h-56 w-56 rounded-3xl border-2 border-purple-600/30" />
      </div>
      <div className="absolute inset-0 -rotate-30 translate-x-6 translate-y-6">
        <div className="h-56 w-56 rounded-3xl border-2 border-purple-600/30" />
      </div>
    </div>

    {/* Elementos dispersos - Pequeños círculos */}
    <div className="absolute top-1/4 left-1/4 h-16 w-16 rounded-full border-2 border-purple-600/20 rotate-12 z-0" />
    <div className="absolute top-1/3 right-1/3 h-20 w-20 rounded-full border-2 border-purple-600/20 -rotate-12 z-0" />
    <div className="absolute bottom-1/4 left-1/3 h-24 w-24 rounded-full border-2 border-purple-600/20 rotate-45 z-0" />
    <div className="absolute bottom-1/3 right-1/4 h-18 w-18 rounded-full border-2 border-purple-600/20 -rotate-45 z-0" />

    {/* Elementos dispersos - Pequeños cuadrados */}
    <div className="absolute top-1/5 left-1/5 h-12 w-12 rounded-lg border-2 border-purple-600/15 rotate-30 z-0" />
    <div className="absolute top-2/5 right-1/5 h-14 w-14 rounded-lg border-2 border-purple-600/15 -rotate-30 z-0" />
    <div className="absolute bottom-1/5 left-2/5 h-16 w-16 rounded-lg border-2 border-purple-600/15 rotate-60 z-0" />
    <div className="absolute bottom-2/5 right-2/5 h-10 w-10 rounded-lg border-2 border-purple-600/15 -rotate-60 z-0" />
  </div>
);
}