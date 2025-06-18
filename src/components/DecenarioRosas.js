import React from "react";
import { Box, IconButton } from "@mui/material";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";

const DecenarioRosas = ({ rosas, onRosaClick }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      mt: 3,
    }}
  >
    {[0, 1].map((fila) => (
      <Box key={fila} sx={{ display: "flex", gap: 2, mb: 1 }}>
        {Array.from({ length: 5 }).map((_, col) => {
          const idx = fila * 5 + col;
          return (
            <IconButton
              key={idx}
              onClick={() => onRosaClick(idx)}
              sx={{
                color: rosas[idx] ? "#A12330" : "#bdbdbd",
                transition: "color 0.2s",
                fontSize: 36,
              }}
            >
              <LocalFloristIcon fontSize="large" />
            </IconButton>
          );
        })}
      </Box>
    ))}
  </Box>
);

export default DecenarioRosas;
