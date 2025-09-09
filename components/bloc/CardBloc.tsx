import React from "react";
import { EvervaultCard, Icon } from "../ui/evervault-card";

export function CardBloc({
  children,
  title,
  description,
}: {
  children?: React.ReactNode;
  title?: string;
  description?: string;
}) {
  return (
    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start w-full max-w-xs sm:max-w-sm mx-auto p-4 sm:p-5 relative h-[22rem] sm:h-[26rem] rounded-xl bg-background/40 backdrop-blur supports-[backdrop-filter]:bg-background/30">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <EvervaultCard className="h-40 sm:h-48 md:h-56 aspect-[4/3] sm:aspect-square">
        {children}
      </EvervaultCard>

      <p className="text-xs sm:text-sm border font-light dark:border-white/[0.2] border-black/[0.2] w-full mx-auto rounded-full mt-4 text-black dark:text-white px-2 py-1 tracking-wide">
        {title}
      </p>
      <h2 className="dark:text-white text-black mt-3 text-xs sm:text-sm font-light leading-relaxed">
        {description}
      </h2>
    </div>
  );
}
