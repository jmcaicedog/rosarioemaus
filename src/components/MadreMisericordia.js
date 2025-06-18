import React from "react";
import { Typography } from "@mui/material";

export default function MadreMisericordia() {
  return (
    <div>
      <Typography
        variant="body1"
        sx={{
          color: "#555",
          mt: 1,
          whiteSpace: "pre-line",
          padding: 2,
          textAlign: "center",
          fontWeight: 700,
        }}
      >
        María es Madre de Gracia y de Misericordia, <br />
        En la vida y en la muerte, ampáranos Madre Nuestra.
      </Typography>
    </div>
  );
}
