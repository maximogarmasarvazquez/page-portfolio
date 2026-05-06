import CoverParticles from "@/components/cover-particles";
import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden"> {/* 👈 ESTE ES EL FIX */}
      <TransitionPage />

      {/* 🌫️ BACKGROUND LAYER */}
      <div className="absolute inset-0 -z-10 bg-gradient-cover" />

      {/* ✨ GLOW (PRO LOOK) */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/20 blur-[120px] -z-10" />

      {/* 🧱 MAIN HERO */}
      <section className="relative flex items-center justify-center min-h-screen px-6">
        
        {/* partículas */}
        <CoverParticles />

        {/* contenido centrado */}
        <div className="w-full max-w-6xl mx-auto">
          <Introduction />
        </div>

      </section>
    </main>
  );
}