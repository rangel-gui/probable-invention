import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./button";
import { ChevronRight, Mail } from "lucide-react";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "select",
      options: ["string", "ReactNode", "anchor"],
      mapping: {
        string: "Button",
        ReactNode: <ChevronRight />,
        anchor: <a>I am an anchor</a>,
      },
      description: "The content of the button",
      type: "symbol",
      table: {
        type: { summary: "string | ReactNode" },
      },
    },
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "destructive",
        "outline",
        "ghost",
        "link",
      ],
      description: "The variant of the button",
      type: "string",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    asChild: {
      control: "boolean",
      description: "Render the child element as the button",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
      description: "The size of the button",
      type: "string",
      table: {
        defaultValue: { summary: "default" },
      },
    },
  },
  args: { onClick: fn(), children: "Button" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
  },
};

export const Icon: Story = {
  args: {
    variant: "outline",
    size: "icon",
    children: <ChevronRight />,
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Mail /> Login with Email
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
};

export const AsChild: Story = {
  args: {
    asChild: true,
    children: <a href="#as%20child">I am a the child anchor</a>,
  },
};
