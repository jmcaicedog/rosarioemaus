"use client";
import Header from "@/components/Header";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center bg-white text-center px-4 mt-48">
        <div>
          <Image
            src="/portada.webp"
            alt="Cristo Rey"
            width={205}
            height={307}
            className="rounded-xl object-cover"
          />
        </div>

        <button
          onClick={() => router.push("/rosario_primera_parte")}
          className="bg-[#A12330] text-white font-semibold px-6 py-2 mt-4 rounded-lg shadow hover:bg-rosewood/90 transition"
        >
          Iniciar Rosario
        </button>
      </main>
    </>
  );
}
