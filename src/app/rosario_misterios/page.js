"use client";
import Header from "@/components/Header";
import FooterBar from "@/components/FooterBar";
import MisterioTitulo from "@/components/MisterioTitulo";
import { useState } from "react";
import DecenarioRosas from "@/components/DecenarioRosas";

export default function Page() {
  const [misterioIndex, setMisterioIndex] = useState(0);
  // Array de 5 misterios, cada uno con 10 rosas (false = desactivada)
  const [rosasPorMisterio, setRosasPorMisterio] = useState(
    Array(5)
      .fill(null)
      .map(() => Array(10).fill(false))
  );

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
      <DecenarioRosas
        rosas={rosasPorMisterio[misterioIndex]}
        onRosaClick={handleRosaClick}
      />
      <FooterBar
        activeIndex={misterioIndex}
        setActiveIndex={setMisterioIndex}
        etiquetas={etiquetas}
      />
    </>
  );
}
