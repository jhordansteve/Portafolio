import React from "react";
import Timeline from "../../molecules/timeline/Timeline";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { data } from "./fitxus";

const Experiencia = () => {
  const theme = useTheme();
  const palette = theme.palette;
  return (
    <div style={{ padding: "60px 0 20px 0" }}>
      <Typography
        variant="h3"
        gutterBottom
        style={{
          color: palette.text.primary,
          textAlign: "center",
          margin: "0px",
        }}
      >
        Experiencia
      </Typography>
      <Timeline data={data} />
    </div>
  );
};

export default Experiencia;
