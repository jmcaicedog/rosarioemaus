"use client";
import Header from "@/components/Header";
import FooterBar from "@/components/FooterBar";
import MisterioTitulo from "@/components/MisterioTitulo";
import { useState, useEffect } from "react";
import DecenarioRosas from "@/components/DecenarioRosas";
import PadreNuestro from "@/components/PadreNuestro";
import AveMaria from "@/components/AveMaria";
import Gloria from "@/components/Gloria";
import OracionDeFatima from "@/components/OracionDeFatima";
import Jaculatorias from "@/components/Jaculatorias";
import MadreMisericordia from "@/components/MadreMisericordia";

export default function Page() {
  const [misterioIndex, setMisterioIndex] = useState(0);
  // Array de 5 misterios, cada uno con 10 rosas (false = desactivada)
  const [rosasPorMisterio, setRosasPorMisterio] = useState(
    Array(5)
      .fill(null)
      .map(() => Array(10).fill(false))
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [misterioIndex]);

  const handleSetMisterioIndex = (index) => {
    setMisterioIndex(index);
  };

  // Actualiza el estado de las rosas para el misterio actual
  const handleRosaClick = (idx) => {
    setRosasPorMisterio((prev) =>
      prev.map((rosas, i) =>
        i === misterioIndex
          ? rosas.map((activa, j) => (j === idx ? !activa : activa))
          : rosas
      )
    );
  };

  // Calcula la cantidad de rosas activas por misterio
  const etiquetas = rosasPorMisterio.map(
    (rosas) => rosas.filter((r) => r).length
  );

  return (
    <>
      <Header />
      <MisterioTitulo misterioIndex={misterioIndex} />
      <PadreNuestro />
      <MadreMisericordia />
      <AveMaria />
      <DecenarioRosas
        rosas={rosasPorMisterio[misterioIndex]}
        onRosaClick={handleRosaClick}
      />
      <Gloria />
      <OracionDeFatima />
      <Jaculatorias />
      <FooterBar
        activeIndex={misterioIndex}
        setActiveIndex={handleSetMisterioIndex}
        etiquetas={etiquetas}
      />
    </>
  );
}
