import Button from "./Button";
import "./Button.css";
import React from "react";
export default {
  title: "Form/Control/Button",
  component: Button,
};

export const Primary = () => <Button variant="primary">Primary String</Button>;
export const Secondary = () => (
  <Button variant="secondary">Secondary String</Button>
);
export const Success = () => <Button variant="success">Success String</Button>;
export const Danger = () => <Button variant="danger">Danger String</Button>;

const Template = (args) => <Button {...args} />;

export const PrimaryArgs = Template.bind({});

PrimaryArgs.args = {
  variant: "primary",
  children: "Custom String",
};

export const LongPrimaryA = Template.bind({});

LongPrimaryA.args = {
  ...PrimaryArgs.args,
  children: "Long primary args .. ",
};

LongPrimaryA.storyName = "Args story - Long Primary Args";
PrimaryArgs.storyName = "Args Story - Primary";
export const SecondaryArgs = Template.bind({});

SecondaryArgs.args = {
  variant: "secondary",
  children: "Secondary Custom String",
};

SecondaryArgs.storyName = "Args story - Secondary";
