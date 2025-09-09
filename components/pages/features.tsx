import { Sparkles } from "lucide-react";
import { CardBloc } from "../bloc/CardBloc";

export default function Features() {
  return (
    <section className="relative z-10 py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance font-semibold tracking-tight text-4xl md:text-5xl">
            We are here to cover your needs
          </h2>
          <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">
            At RadiumCoders, we craft flexible, performance‑driven solutions you
            can mold to your product vision.
          </p>
        </header>
        {featuresCards()}
      </div>
    </section>
  );

  function featuresCards() {
    return (
      <div className="mx-auto mt-14 grid gap-10 sm:gap-12 md:mt-20 sm:grid-cols-2 lg:grid-cols-3">
        <CardBloc
          title="Full control"
          description="From architecture to micro‑interactions, shape every layer for a unique experience."
        >
          <Sparkles className="size-7" aria-hidden />
        </CardBloc>
        <CardBloc
          title="Customizable"
          description="Deep configuration & extensible components let you adapt fast as needs evolve."
        >
          <Sparkles className="size-7" aria-hidden />
        </CardBloc>
        <CardBloc
          title="AI Powered"
          description="Intelligent enhancements accelerate workflows, insights & automation."
        >
          <Sparkles className="size-7" aria-hidden />
        </CardBloc>
      </div>
    );
  }
}
// Removed unused CardDecorator to reduce dead code & bundle size.
