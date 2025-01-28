import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  component: Input,
  args: {
    placeholder: "Placeholder",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const File: Story = {
  args: {
    type: "file",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
