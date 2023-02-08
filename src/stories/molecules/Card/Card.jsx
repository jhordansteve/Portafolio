import * as React from "react";
import { ContainerCard } from "./styles";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

const CardComponent = ({ img, title, text, color = "#89ec5b" }) => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const bg = mode === "dark" ? "#2e2e2e" : "#FDFEFE";

  return (
    <ContainerCard>
      <div className="box" style={{ "--clr": color, "--bg": bg }}>
        <div className="content">
          <div className="icon">
            <img src={img} width="70" height="70" alt="logo" />
          </div>
          <div className="text">
            <Typography variant="h4" gutterBottom>
              {title}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {text}
            </Typography>
          </div>
        </div>
      </div>
    </ContainerCard>
  );
};

CardComponent.propTypes = {
  /**
   * Agregar ruta de la imagen
   */
  img: PropTypes.string,
  /**
   * Agrega el titulo de la tarjeta
   */
  title: PropTypes.string,
  /**
   * agregar una brebe descripcion en la tarjeta
   */
  text: PropTypes.string,
  /**
   * puedes cambiar el color que desees de la tarjeta
   */
  color: PropTypes.string,
};

export default CardComponent;
