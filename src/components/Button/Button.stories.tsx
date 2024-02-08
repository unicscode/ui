import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const primary: Story = {
  args: {
    children: "Primary",
    variant: "primary",
    disabled: false,
  },
};

export const secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
    disabled: false,
  },
};

export const destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
  },
};

export const outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

export const ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
  },
};

export const link: Story = {
  args: {
    children: "Link",
    variant: "link",
  },
};
