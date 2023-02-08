import React from "react";

import ListComponent from "./List";

export default {
  title: "Atoms/List",
  component: ListComponent,
};

const Template = (args) => <ListComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: ["Single-line item", "Single-line item", "Single-line item"],
};
