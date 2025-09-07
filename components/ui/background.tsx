import React from "react";

function Background({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-background relative">
      {/* Diagonal Fade Grid Background - Top Right */}
      <div className="absolute inset-0 z-0 bg-grid-fade pointer-events-none" />
      {children}
    </div>
  );
}

export default Background;
