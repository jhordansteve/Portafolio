import React from "react";
import { data } from "./fixus";
import Timeline from "./Timeline";

export default {
  title: "Molecules/Timeline",
  component: Timeline,
};

const Template = (args) => <Timeline {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: data,
};
