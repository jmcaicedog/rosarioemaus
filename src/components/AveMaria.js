import React from "react";
import { Typography } from "@mui/material";

export default function AveMaria() {
  return (
    <div>
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", mt: 2, textAlign: "center" }}
      >
        Ave María
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#555",
          mt: 1,
          whiteSpace: "pre-line",
          padding: 2,
          textAlign: "center",
        }}
      >
        Dios te salve, María, llena eres de gracia, el Señor es contigo, bendita
        Tú eres entre todas las mujeres y bendito es el fruto de tu vientre,
        Jesús. <br />
        <br />
        Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la
        hora de nuestra muerte. Amén.
      </Typography>
    </div>
  );
}
