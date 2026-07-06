import type { Preview } from "@storybook/react";
import nostalgiaNeoncss from '../lib/themes/nostalgia-neon/index.css?inline';
import oldLedgercss from '../lib/themes/old-ledger/index.css?inline';

const themes: Record<string, string> = {
    'nostalgia-neon': nostalgiaNeoncss,
    'old-ledger': oldLedgercss
};

export const globalTypes = {
    theme: {
        name: 'Theme',
        defaultValue: 'nostalgia-neon',
        toolbar: {
            icon: 'paintbrush',
            items: Object.keys(themes),
            showName: true,
        },
    },
};

const preview: Preview = {
    decorators: [
        (Story, context) => {
            const css = themes[context.globals.theme as string] ?? '';

            let style = document.getElementById('faceplate-theme') as HTMLStyleElement | null;
            if (!style) {
                style = document.createElement('style');
                style.id = 'faceplate-theme';
                document.head.appendChild(style);
            }
            style.textContent = css;

            return <Story />;
        },
    ],
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
