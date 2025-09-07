import Contact from "@/components/pages/contact";
import Features from "@/components/pages/features";
import Hero from "@/components/pages/hero";

export default function Home() {
  return (
    <main className="w-full z-10">
      <Hero />
      <Features />
      <Contact />
    </main>
  );
}
