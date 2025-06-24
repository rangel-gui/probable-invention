import { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "./checkbox";
import { Label } from "../label/label";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="cb" {...args} />
      <Label htmlFor="cb">Checkbox</Label>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="cb" {...args} />
      <Label htmlFor="cb">Disabled checkbox</Label>
    </div>
  ),
};
