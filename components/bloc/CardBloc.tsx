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
    <div className="bg-background/40 supports-[backdrop-filter]:bg-background/30 relative mx-auto flex h-[22rem] w-full max-w-xs flex-col items-start border border-black/[0.2] p-4 backdrop-blur sm:h-[26rem] sm:max-w-sm sm:p-5 dark:border-white/[0.2]">
      <Icon className="absolute -top-3 -left-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -top-3 -right-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -right-3 -bottom-3 h-6 w-6 text-black dark:text-white" />

      <EvervaultCard className="aspect-[4/3] h-40 sm:aspect-square sm:h-48 md:h-56">
        {children}
      </EvervaultCard>

      <p className="dark:text-primary mx-auto mt-4 flex w-full items-center justify-center rounded-full border border-black/[0.2] px-2 py-1 text-xs font-light tracking-wide text-black sm:text-sm dark:border-white/[0.2]">
        {title}
      </p>
      <h2 className="mt-3 text-center text-xs leading-relaxed font-light text-black sm:text-sm dark:text-white">
        {description}
      </h2>
    </div>
  );
}
