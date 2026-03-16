import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heading } from "@/components/ui";

const meta = {
    title: "components/vanilla-extract/heading",
    component: Heading,
    parameters: {
        layout: "padded"
    }
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        as: "h1",
        fontStyle: "firstBig",
        color: "textNormal",
        children: "Vanilla Extract Heading"
    }
};

export const OnDark: Story = {
    render: (args) => (
        <div style={{ background: "#0f172a", borderRadius: 16, padding: 24 }}>
            <Heading {...args} />
        </div>
    ),
    args: {
        as: "h2",
        fontStyle: "firstMiddle",
        color: "textWhite",
        children: "Readable on dark backgrounds"
    }
};
