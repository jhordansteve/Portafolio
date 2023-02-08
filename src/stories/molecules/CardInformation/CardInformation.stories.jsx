import React from "react";

import CardInformation from "./CardInformation";

export default {
  title: "Molecules/CardInformation",
  component: CardInformation,
};

const Template = (args) => <CardInformation {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  img: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
  title: "Lizard",
  description:
    "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
};
