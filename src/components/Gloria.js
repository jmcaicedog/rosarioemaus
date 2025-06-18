import React from "react";
import { Typography } from "@mui/material";

export default function Gloria() {
  return (
    <div>
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", mt: 2, textAlign: "center" }}
      >
        Gloria
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
        Gloria al Padre y al Hijo y al Espíritu Santo.
        <br />
        Amén.
      </Typography>
    </div>
  );
}
