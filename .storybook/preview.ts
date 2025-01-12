import type { Preview } from "@storybook/react";
import { withThemeByClassName } from '@storybook/addon-themes';
import "../lib/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
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
