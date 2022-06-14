import Button from "./Button";
import "./Button.css";
import React from "react";
import { action, actions} from '@storybook/addon-actions';

export default {
  title: "Form/Control/Button",
  component: Button,
  args:{
      children:"Default String"
  },
  argTypes: {
    onClick: { action: true },
  },
};
const Template=(args)=><Button {...args}/>
export const Success = Template.bind({});
Success.args={
  children:"Success String",
  variant:"success",
  onClick:action("Clicked Success")
};

export const Danger = Template.bind({});
Danger.args={
  children:"Danger String",
  variant:"danger",
  onClick:action("Clicked danger")
}


