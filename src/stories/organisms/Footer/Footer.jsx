import React from "react";
import perfil from "../../../img/perfil.png";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { ContainerFotter } from "./style";

const Footer = () => {
  const theme = useTheme();
  const bg = theme.palette.mode === "dark" ? "#292929" : "#ba68c8";
  return (
    <ContainerFotter style={{ "--bg": bg }}>
      <div className="img">
        <img src={perfil} width="100px" alt="foto de perfil" />
      </div>
      <div>
        <Typography variant="h3">STEVE JHORDAN DURAN</Typography>
        <Typography variant="subtitle1">Nezahualcóyotl</Typography>
        <Typography variant="subtitle1">
          jhordansteve@outlook.es / 5574283020
        </Typography>
      </div>
    </ContainerFotter>
  );
};

export default Footer;
