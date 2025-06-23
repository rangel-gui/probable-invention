import { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "./label";
import { expect, userEvent, within } from "storybook/test";

const meta: Meta<typeof Label> = {
  component: Label,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Label",
  },
};

export const Disabled: Story = {
  args: {
    children: "Label",
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <input type="checkbox" className="peer" id="terms" disabled />
      <Label {...args} htmlFor="terms" />
    </div>
  ),
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByLabelText(args.children?.toString()!);
    const checkbox = canvas.getByRole("checkbox");

    await userEvent.click(label);

    await expect(checkbox).not.toBeChecked();
  },
};
