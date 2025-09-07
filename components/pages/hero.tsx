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
            <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
              <div className="mx-auto max-w-lg text-center lg:mx-auto lg:w-1/2 mt-8 lg:mt-12">
                <BlurText
                  text="Grow 10x Faster with RadiumCoders"
                  delay={10}
                  animateBy="words"
                  direction="top"
                  className="max-w-2xl text-balance text-5xl font-medium md:text-6xl xl:text-7xl"
                />
                <p className="mt-8 max-w-2xl text-pretty text-base md:text-lg">
                  We create{" "}
                  <Highlighter
                    action="underline"
                    color="var(--primary)"
                    padding={1}
                    isView
                  >
                    <span className="text-primary font-semibold">
                      high‑performance
                    </span>
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
                    <span className="text-primary font-semibold">
                      minimalistic
                    </span>
                  </Highlighter>
                  , and designed to tell your story while driving{" "}
                  <Highlighter
                    action="underline"
                    color="var(--primary)"
                    padding={1}
                    isView
                  >
                    <span className="text-primary font-semibold">
                      real results
                    </span>
                  </Highlighter>
                  .
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-center">
                  <Button asChild size="lg" className="px-5 text-base">
                    <Link href="#link">
                      <span className="text-nowrap">Start Building</span>
                    </Link>
                  </Button>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="px-5 text-base"
                  >
                    <Link href="#link">
                      <span className="text-nowrap">Request a demo</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
