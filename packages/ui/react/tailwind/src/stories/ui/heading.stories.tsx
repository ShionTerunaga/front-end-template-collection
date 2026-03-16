import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heading } from "@/components/ui";

const meta = {
    title: "components/heading",
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
        children: "Tailwind Heading"
    }
};

export const Inverted: Story = {
    render: (args) => (
        <div className="rounded-xl bg-slate-900 p-6">
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
