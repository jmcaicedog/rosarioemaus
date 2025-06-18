"use client";

import { useState, useRef, useEffect } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Cierra el menú al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 py-3 bg-white shadow-md flex items-center justify-between">
      {/* Menú hamburguesa */}
      <button onClick={() => setOpen(!open)} className="p-2 z-10">
        <Menu className="w-10 h-10 text-[#A12330]" />
      </button>

      {/* Menú desplegable */}
      {open && (
        <div
          ref={menuRef}
          className="absolute left-4 top-16 bg-white shadow-lg rounded-md py-2 px-4 min-w-[180px] z-50"
        >
          <button
            className="block w-full text-left py-2 px-2 text-[#A12330] hover:bg-gray-100 rounded"
            onClick={() => {
              setOpen(false);
              router.push("/");
            }}
          >
            Santo Rosario
          </button>
        </div>
      )}

      {/* Título */}
      <h1 className="text-lg font-bold text-center text-[#A12330] absolute left-1/2 transform -translate-x-1/2">
        EMAÚS CRISTO REY
      </h1>

      {/* Logo */}
      <div className="w-14 h-14 relative">
        <Image
          onClick={() => router.push("/")}
          src="/logo.jpg"
          alt="Logo del Rosario"
          fill
          className="object-contain"
        />
      </div>
    </header>
  );
}
