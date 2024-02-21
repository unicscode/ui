import type { Meta, StoryObj } from "@storybook/react";

import { Alert, AlertTitle, AlertDescription } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Design System/Atoms/Alert",
  component: Alert,
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const primary: Story = {
  args: {
    children: "Alert",
  },
};
