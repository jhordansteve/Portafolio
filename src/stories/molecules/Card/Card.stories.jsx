import React from "react";

import CardComponent from "./Card";

export default {
  title: "Molecules/CardComponent",
  component: CardComponent,
};

const Template = (args) => <CardComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  img: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
  title: "Lizard",
  text: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
};
