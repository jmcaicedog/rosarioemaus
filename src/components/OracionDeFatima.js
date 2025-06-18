import React from "react";
import { Typography } from "@mui/material";

export default function OracionDeFatima() {
  return (
    <div>
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", mt: 2, textAlign: "center" }}
      >
        Oración de Fatima
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
        Oh, mi buen Jesús, perdona nuestros pecados, líbranos del fuego del
        infierno, lleva todas las almas al cielo y socorre, especialmente, a las
        más necesitadas de tu infinita misericordia y danos la paz, Amén.
        <br />
        Amén.
      </Typography>
    </div>
  );
}
