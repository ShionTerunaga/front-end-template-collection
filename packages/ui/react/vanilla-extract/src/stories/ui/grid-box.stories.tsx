import type { Meta, StoryObj } from "@storybook/react-vite";
import { GridBox } from "@/components/ui";

const meta = {
    title: "components/vanilla-extract/grid-box",
    component: GridBox,
    parameters: {
        layout: "fullscreen"
    }
} satisfies Meta<typeof GridBox>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = (
    <>
        <div
            style={{
                width: "100%",
                borderRadius: 12,
                background: "#f1f5f9",
                padding: 16
            }}
        >
            Item 1
        </div>
        <div
            style={{
                width: "100%",
                borderRadius: 12,
                background: "#e2e8f0",
                padding: 16
            }}
        >
            Item 2
        </div>
        <div
            style={{
                width: "100%",
                borderRadius: 12,
                background: "#f1f5f9",
                padding: 16
            }}
        >
            Item 3
        </div>
        <div
            style={{
                width: "100%",
                borderRadius: 12,
                background: "#e2e8f0",
                padding: 16
            }}
        >
            Item 4
        </div>
        <div
            style={{
                width: "100%",
                borderRadius: 12,
                background: "#f1f5f9",
                padding: 16
            }}
        >
            Item 5
        </div>
    </>
);

export const ThreeColumns: Story = {
    args: {
        gap: "large",
        gridTemplateColumns: "three",
        children: items
    }
};

export const FiveColumns: Story = {
    args: {
        gap: "medium",
        gridTemplateColumns: "five",
        children: items
    }
};
