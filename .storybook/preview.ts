import type { Preview } from "@storybook/react";
import "../lib/themes/nostalgia-neon/index.css";


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
