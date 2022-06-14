import Input from "./Input";
import './Input.css';
export default {
    title:"Form/Control/Input",
    component:Input
}

export const Small = ()=><Input variant="small"/>
export const Medium = ()=><Input variant="medium"/>
export const LargeInput = ()=><Input variant="large"/>

Small.storyName="Small Input";
Medium.storyName="Medium Input";
LargeInput.storyName="Large Input"