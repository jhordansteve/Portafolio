import React from "react";
import iconoUno from "../../../img/iconoUno.png";
import iconoDos from "../../../img/iconoDos.png";
import CardInformation from "../../molecules/CardInformation/CardInformation";
import { ContainerFormacion } from "./styles";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Formacion = () => {
  const theme = useTheme();
  const palette = theme.palette;
  return (
    <ContainerFormacion>
      <Paper
        elevation={3}
        style={{ width: "90%" }}
        sx={{ bgcolor: "background.default" }}
      >
        <Typography
          variant="h3"
          gutterBottom
          style={{
            color: palette.text.primary,
            textAlign: "center",
            margin: "60px 0 30px 0",
          }}
        >
          Formación
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={window.screen.width > 767 ? 6 : 12}>
            <CardInformation
              img={iconoUno}
              title="Ingeniería"
              description="Titulación universitaria en Tecnologías de la Información y comunicación"
              mg="translateY(50px)"
            />
          </Grid>
          <Grid item xs={window.screen.width > 767 ? 6 : 12}>
            <CardInformation
              img={iconoDos}
              title="Técnico Superior Universitario"
              description="Titulación universitaria en Tecnologías de Información y comunicación área sistemas informático."
              mg="translateY(80px)"
            />
          </Grid>
        </Grid>
      </Paper>
    </ContainerFormacion>
  );
};

export default Formacion;
