import React, { useState } from "react";
// Import Swiper React components
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

// import required modules
import { Autoplay, Pagination } from "swiper";
import "./style.css";

const Carrusel = ({ children }) => {
  const theme = useTheme();
  const color = theme.palette.secondary.main;
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        p: 3,
      }}
    >
      <Swiper
        style={{
          "--swiper-navigation-color": color,
          "--swiper-pagination-color": color,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        slidesPerView={window.screen.width > 767 ? 3 : 1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {children}
      </Swiper>
    </Box>
  );
};

Carrusel.propTypes = {
  /**
   * Ingresa el contenido del carrusel
   */
  children: PropTypes.node,
};

export default Carrusel;
