import React from "react";
import Image from "next/image";
function Logo() {
  return (
    <div className="flex items-center border rounded-full border-border p-1">
      <Image src="/logo.png" alt="Logo" width={40} height={40} />
    </div>
  );
}

export default Logo;
