import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";

const FooterBar = ({ activeIndex, setActiveIndex, etiquetas }) => {
  const icons = [
    { label: etiquetas[0] || "0" },
    { label: etiquetas[1] || "0" },
    { label: etiquetas[2] || "0" },
    { label: etiquetas[3] || "0" },
    { label: etiquetas[4] || "0" },
    { icon: <EmojiPeopleIcon fontSize="medium" />, label: "Oración" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 2,
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100vw",
        background: "#fff",
        boxShadow: "0 -2px 8px #0002",
        zIndex: 100,
      }}
    >
      {icons.map((item, index) => (
        <IconButton
          key={index}
          onClick={() => setActiveIndex(index)}
          sx={{
            backgroundColor: activeIndex === index ? "#A12330" : "#e0e0e0",
            color: activeIndex === index ? "#fff" : "#333",
            borderRadius: "50%",
            width: 48,
            height: 48,
            transition: "background 0.2s",
            "&:hover": {
              backgroundColor: activeIndex === index ? "#A12330" : "#bdbdbd",
            },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {item.icon ? (
            item.icon
          ) : (
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {item.label}
            </Typography>
          )}
        </IconButton>
      ))}
    </Box>
  );
};

export default FooterBar;
