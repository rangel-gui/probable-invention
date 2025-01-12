import type { Preview } from "@storybook/react";
import "../lib/index.css";
import { ThemeDecorator } from "./decorators/theme-decorator"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [ThemeDecorator]
};

export default preview;
