import React from "react";
import { SwiperSlide } from "swiper/react";
import Carrusel from "./Carrusel";

export default {
  title: "Molecules/Carrusel",
  component: Carrusel,
};

const Template = () => (
  <Carrusel>
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
    <SwiperSlide>Slide 5</SwiperSlide>
    <SwiperSlide>Slide 6</SwiperSlide>
    <SwiperSlide>Slide 7</SwiperSlide>
    <SwiperSlide>Slide 8</SwiperSlide>
    <SwiperSlide>Slide 9</SwiperSlide>
  </Carrusel>
);

export const Primary = Template.bind({});
Primary.args = {
  containers: ["Products", "Pricing", "Blog"],
};
