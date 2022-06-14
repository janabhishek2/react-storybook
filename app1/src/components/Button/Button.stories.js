import Button from "./Button";
import "./Button.css";
import React from "react";
import Center from "../Center/Center";
export default {
  title: "Form/Control/Button",
  component: Button,
  args:{
      children:"Default String"
  },
};

export const Primary = () => <Button variant="primary">Primary String</Button>;
export const Secondary = () => (
  <Button variant="secondary">Secondary String</Button>
);
export const Success = () => <Button variant="success">Success String</Button>;
export const Danger = () => <Button variant="danger">Danger String</Button>;


