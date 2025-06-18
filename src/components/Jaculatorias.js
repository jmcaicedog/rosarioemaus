import React from "react";
import { Typography } from "@mui/material";

export default function Jaculatorias() {
  return (
    <div>
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", mt: 2, textAlign: "center" }}
      >
        Jaculatorias
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#555",
          mt: 1,
          whiteSpace: "pre-line",
          padding: 2,
          textAlign: "center",
          mb: 12,
        }}
      >
        El rosario de María nos libre de todo mal,
        <br />
        Alabemos noche y día a la Reina Celestial. Y con ella adoremos a la
        Santísima Trinidad,
        <br />
        <br />
        Inmaculado corazón de María,
        <br />
        Se tú la salvación del alma mía.
        <br />
        <br />
        Espíritu Santo,
        <br />
        Ilumínanos y santifícanos.
        <br />
        <br />
        Sagrado Corazón de Jesús,
        <br />
        En vos confío.
        <br />
        <br />
        San José,
        <br />
        Ruega por nosotros.
        <br />
        <br />
      </Typography>
    </div>
  );
}
