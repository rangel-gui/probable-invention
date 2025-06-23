import type { Preview } from "@storybook/react-vite";
import { withThemeByClassName } from '@storybook/addon-themes';
import { allModes } from "./modes";
import "../lib/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    chromatic: {
      modes: {
        light: allModes["light"],
        dark: allModes["dark"],
      },
    },
  },
  decorators: [withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'dark',
  }),]
};

export default preview;
