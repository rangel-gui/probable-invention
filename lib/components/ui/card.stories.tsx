import { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { ComponentProps } from "react";

type CardPropsWithCustomArgs = ComponentProps<typeof Card> & {
  title?: string;
  description?: string;
  content?: string;
  footer?: string;
};

const meta: Meta<CardPropsWithCustomArgs> = {
  component: Card,
  args: {
    title: "Card Title",
    description: "Card Description",
    content: "Card Content",
    footer: "Card Footer",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card>
      <CardHeader>
        <CardTitle>{args.title}</CardTitle>
        <CardDescription>{args.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{args.content}</p>
      </CardContent>
      <CardFooter>
        <p>{args.footer}</p>
      </CardFooter>
    </Card>
  ),
};
