import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../lib/**/*.mdx", "../lib/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  docs: {
    autodocs: true
  },
  core: {
    disableTelemetry: true
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  }
};
export default config;
