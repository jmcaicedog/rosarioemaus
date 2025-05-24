"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full px-4 py-3 bg-white shadow-md flex items-center justify-between relative">
      {/* Menú hamburguesa */}
      <button onClick={() => setOpen(!open)} className="p-2 z-10">
        <Menu className="w-6 h-6 text-[#A12330]" />
      </button>

      {/* Título */}
      <h1 className="text-lg font-semibold text-[#A12330] absolute left-1/2 transform -translate-x-1/2">
        Emaus Cristo Rey
      </h1>

      {/* Logo */}
      <div className="w-10 h-10 relative">
        <Image
          onClick={() => router.push("/")}
          src="/logo.jpg" // asegúrate de tener esta imagen en la carpeta public/
          alt="Logo del Rosario"
          fill
          className="object-contain"
        />
      </div>
    </header>
  );
}
