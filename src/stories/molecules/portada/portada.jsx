import { PortadaContainer } from "./styles";
import perfil from "../../../img/perfil.png";
import Typography from "@mui/material/Typography";

const Portada = () => {
  return (
    <PortadaContainer>
      <div className="portada"></div>
      <div className="contenido">
        <div className="info">
          <Typography variant="h3" gutterBottom>
            Hola! 👋
          </Typography>
          <Typography variant="h3" gutterBottom>
            Soy Jhordan
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            style={{ padding: "0 30px 0 30px", textAlign: "center" }}
          >
            Desarrollador front end con amplia experiencia profesional y muchas
            ganas de trabajar. Me caracterizo por mi capacidad para solucionar
            problemas, priorizar y gestionar proyectos y trabajar en equipo.
            Busco una oportunidad para desarrollar mi carrera y dar lo mejor de
            mí.
          </Typography>
        </div>
        <div className="foto">
          <img src={perfil} height="500vh" alt="foto de perfil" />
        </div>
      </div>
    </PortadaContainer>
  );
};

export default Portada;
