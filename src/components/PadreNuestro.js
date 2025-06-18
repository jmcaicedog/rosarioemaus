import React from "react";
import { Typography } from "@mui/material";

export default function PadreNuestro() {
  return (
    <div>
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", mt: 2, textAlign: "center" }}
      >
        Padre Nuestro
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
        Padre nuestro, que estás en los cielos, santificado sea tu nombre. Venga
        a nosotros tu reino; hágase tu voluntad, así en la tierra como en el
        cielo. Danos hoy nuestro pan de cada día; perdona nuestras ofensas, así
        como nosotros perdonamos a los que nos ofenden, no nos dejes caer en la
        tentación y líbranos del mal. Amén.
      </Typography>
    </div>
  );
}
