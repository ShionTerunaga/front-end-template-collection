import type { Preview } from "@storybook/react-vite";
import "../src/stories/components/tailwind/styles.css";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        },
        layout: "centered"
    }
};

export default preview;
