import React from "react";
import { Shield } from "lucide-react";
import type { Meta, StoryObj } from "@storybook/react";

import { Alert, AlertTitle, AlertDescription } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Design System/Atoms/Alert",
  component: Alert,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const primary: Story = {
  args: {
    variant: "default",
  },

  render: (args) => {
    return (
      <Alert {...args}>
        <Shield className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    );
  },
};
