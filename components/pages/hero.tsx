import React from "react";
import BlurText from "../BlurText";
import { Highlighter } from "@/components/magicui/highlighter";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";

export default function Hero() {
  return (
    <main className="overflow-x-hidden pt-12">
      <section className="mx-auto w-full lg:w-[90vw]">
        <div className="pt-12 pb-24 md:pb-32 lg:pt-44 lg:pb-56">
          <HeroText />
        </div>
      </section>
    </main>
  );
}

function HeroHighlightedText({ text }: { text: string }) {
  return (
    <Highlighter action="underline" color="var(--primary)" padding={1} isView>
      <span className="text-primary font-semibold">{text}</span>
    </Highlighter>
  );
}

function HeroCTA() {
  return (
    <div className="mt-6 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-center">
      {/* <Button asChild size="lg" className="px-5 text-base">
        <Link href="/contact">
          <span className="text-nowrap">Contact Us!!</span>
        </Link>
      </Button> */}
      <InteractiveHoverButton>Contact Us!!</InteractiveHoverButton>
    </div>
  );
}
function HeroDesscriptionText() {
  return (
      <p className="mt-8 max-w-2xl text-base text-pretty md:text-lg">
        We create <HeroHighlightedText text="high‑performance" /> websites that
        are <HeroHighlightedText text="modern" />,{" "}
        <HeroHighlightedText text="minimalistic" />, and designed to tell your
      story while driving <HeroHighlightedText text="real results" />.
    </p>
  );
}

function HeroText() {
  return (
    <div className="relative mx-auto flex max-w-4xl flex-col rounded-2xl px-6 lg:block">
      <div className="mx-auto mt-8 mb-8 max-w-lg text-center lg:mx-auto lg:mt-12 lg:w-1/2">
        <BlurText
          text="Grow 10x Faster with RadiumCoders"
          delay={1}
          animateBy="words"
          direction="bottom"
          className="max-w-2xl text-5xl font-medium text-balance md:text-6xl xl:text-7xl"
        />
        <HeroDesscriptionText />
        <HeroCTA />
      </div>
    </div>
  );
}
