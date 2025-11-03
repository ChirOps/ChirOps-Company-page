export function BlurredTriangleBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className="absolute left-0 top-0 w-full h-full"
        style={{
          background:
            "linear-gradient(135deg, rgba(233, 213, 255, 0.5) 0%, rgba(243, 232, 255, 0.4) 40%, rgba(250, 245, 255, 0.2) 70%, transparent 100%)",
          clipPath: "polygon(0 0, 100% 100%, 0 100%)",
          filter: "blur(200px)",
          transform: "scale(1.2)",
        }}
      />
    </div>
  )
}
