import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BlurText from "../BlurText";
import { Highlighter } from "@/components/magicui/highlighter";

export default function Hero() {
  return (
    <>
      {/* <HeroHeader /> */}
      <main className="overflow-x-hidden pt-12">
        <section className="w-full lg:w-[90vw] mx-auto">
          <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
            {HeroText()}
          </div>
        </section>
      </main>
    </>
  );

  function HeroText() {
    return (
      <div className="relative mx-auto flex max-w-4xl rounded-2xl flex-col px-6 lg:block bg-neutral-950/2 dark:bg-neutral-950/10 backdrop-blur-xl border border-neutral-800/50">
        <div className="mx-auto max-w-lg text-center lg:mx-auto lg:w-1/2 mt-8 mb-8 lg:mt-12">
          <BlurText
            text="Grow 10x Faster with RadiumCoders"
            delay={1}
            animateBy="words"
            direction="bottom"
            className="max-w-2xl text-balance text-5xl font-medium md:text-6xl xl:text-7xl"
          />
          {HeroDessText()}
          {HeroCTA()}
        </div>
      </div>
    );

    function HeroCTA() {
      return (
        <div className="mt-6 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-center">
          <Button asChild size="lg" className="px-5 text-base">
            <Link href="/contact">
              <span className="text-nowrap">Contact Us!!</span>
            </Link>
          </Button>
        </div>
      );
    }

    function HeroDessText() {
      return (
        <p className="mt-8 max-w-2xl text-pretty text-base md:text-lg">
          We create{" "}
          <Highlighter
            action="underline"
            color="var(--primary)"
            padding={1}
            isView
          >
            <span className="text-primary font-semibold">high‑performance</span>
          </Highlighter>{" "}
          websites that are{" "}
          <Highlighter
            action="underline"
            color="var(--primary)"
            padding={1}
            isView
          >
            <span className="text-primary font-semibold">modern</span>
          </Highlighter>
          ,{" "}
          <Highlighter
            action="underline"
            color="var(--primary)"
            padding={1}
            isView
          >
            <span className="text-primary font-semibold">minimalistic</span>
          </Highlighter>
          , and designed to tell your story while driving{" "}
          <Highlighter
            action="underline"
            color="var(--primary)"
            padding={1}
            isView
          >
            <span className="text-primary font-semibold">real results</span>
          </Highlighter>
          .
        </p>
      );
    }
  }
}
