import type { Meta, StoryObj } from "@storybook/react-vite";
import { FontCenter } from "@/components/ui";

const meta = {
    title: "components/vanilla-extract/font-center",
    component: FontCenter
} satisfies Meta<typeof FontCenter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: <div style={{ padding: 24 }}>Centered text</div>
    }
};

export const Callout: Story = {
    args: {
        style: {
            backgroundColor: "#f8fafc",
            borderRadius: 16,
            padding: 32
        },
        children: <div>Centered callout block</div>
    }
};
