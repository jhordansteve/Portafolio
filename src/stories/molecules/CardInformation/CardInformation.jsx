import React from "react";
import { CardStyle } from "./styles";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

const CardInformation = ({ img, title, description, mg }) => {
  const theme = useTheme();
  const mode = theme.palette;
  const bg = mode.mode === "dark" ? "#000" : "#fff";
  const secondary = mode.mode === "dark" ? "#292929" : "#fff";
  const colorP = mode.mode === "dark" ? "#ca5fe3" : "#9D5FA8";
  const colorS = mode.mode === "dark" ? "#68cbfe" : "#5699BB";
  const filter = mode.mode === "dark" ? "invert(1)" : "none";
  const text = mode.text.primary;

  return (
    <CardStyle
      style={{
        "--bg": bg,
        "--secondary": secondary,
        "--text": text,
        "--filter": filter,
        "--colorP": colorP,
        "--colorS": colorS,
        "--mg": mg,
      }}
    >
      <div className="card">
        <div className="lines"></div>
        <div className="imgBx">
          <img src={img} alt="Icono" />
        </div>
        <div className="content">
          <div className="details">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </CardStyle>
  );
};

CardInformation.propTypes = {
  /**
   * Agrega la ruta de la imagen
   */
  img: PropTypes.string,
  /**
   * Agrega un titulo
   */
  title: PropTypes.string,
  /**
   * Agrega una descripcion
   */
  description: PropTypes.string,
  /**
   * margen del titulo
   */
  mg: PropTypes.string,
};

export default CardInformation;
