import React from "react";

import Navbar from "./NavBar";

export default {
  title: "Molecules/NavBar",
  component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  pages: ["Products", "Pricing", "Blog"],
};
