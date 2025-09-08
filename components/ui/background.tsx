import React from "react";
import PixelBlast from "../PixelBlast";

function Background({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-background relative">
      {/* PixelBlast Background Layer */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <PixelBlast
          className="w-full h-full"
          variant="circle"
          pixelSize={6}
          color="#B19EEF"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          // liquid
          // liquidStrength={0.12}
          // liquidRadius={1.2}
          // liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
      </div>

      {/* Diagonal Fade Grid Background - Top Right (above PixelBlast, below content) */}
      <div className="absolute inset-0 z-[1] bg-grid-fade pointer-events-none" />

      {/* Foreground Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default Background;
