// Button.stories.ts | Button.stories.tsx
// Dependencies
import React from "react";
import Button from "@components/shared/button";
import { Meta, Story } from "@storybook/react";
import { ButtonColor, ButtonProps } from "@components/shared/button/button.const";

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export default {
    title: "Button",
    component: Button
} as Meta;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
    ...Primary.args,
    children: "Primary",
    color: ButtonColor.primary,
    onClick: () => alert("  Primary  ")
};

export const Secondary = Template.bind({});
Secondary.args = {
    ...Secondary.args,
    children: "Secondary",
    color: ButtonColor.secondary,
    onClick: () => alert("Secondary")
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    ...Tertiary.args,
    children: "Tertiary",
    color: ButtonColor.tertiary,
    onClick: () => alert("Tertiary")
};

export const Light = Template.bind({});
Light.args = {
    ...Light.args,
    children: "Light",
    color: ButtonColor.light,
    onClick: () => alert("Light")
};
