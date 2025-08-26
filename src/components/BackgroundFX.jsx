export default function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      {/* under the canvas */}
      <div className="absolute inset-0 bg-[#0e1014]" />
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.5]">
        <div className="aurora animate-aurora-slow" />
      </div>
      <div className="absolute inset-0 vignette-gradient" />
      <div className="absolute inset-x-0 top-[-30%] h-[70%] bg-[radial-gradient(600px_320px_at_50%_0%,rgba(255,255,255,0.12),transparent_70%)]" />
      <div className="absolute inset-x-0 bottom-[-25%] h-[55%] bg-[radial-gradient(700px_260px_at_50%_100%,rgba(0,0,0,0.28),transparent_75%)]" />
    </div>
  );
}
