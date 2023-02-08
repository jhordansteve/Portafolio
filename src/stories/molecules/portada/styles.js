import styled from 'styled-components';
import portada from "../../../img/portada.avif";

export const PortadaContainer = styled.div`
  width: 100%;
  height: 120vh;
  position: relative;
  .portada {
    width: 100%;
    height: 100%;
    background: url(${portada});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }
  .contenido {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(0, 0, 11, 0.6);
    backdrop-filter: blur(15px);
  }

  .contenido .info {
    width: 50%;
    text-align: center;
    color: #fff;
    margin-top: -20vh;
  }

  .foto {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -20vh;
  }
  @media(max-width: 776px) {
    .foto {
      display: none;
    }
    .contenido .info {
      width: 100%;
    }
  }
`;
