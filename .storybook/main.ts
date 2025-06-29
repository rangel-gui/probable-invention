import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../lib/**/*.mdx", "../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-a11y",
    "@storybook/addon-coverage",
    "@storybook/addon-themes"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
