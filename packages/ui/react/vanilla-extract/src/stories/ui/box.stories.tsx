import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box } from "@/components/ui";

const meta = {
    title: "components/vanilla-extract/box",
    component: Box
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        width: "middle",
        boxShadow: "small",
        color: "white",
        borderRadius: "middle",
        children: <div style={{ padding: 20 }}>Default box</div>
    }
};

export const AccentCard: Story = {
    args: {
        as: "article",
        width: "middle",
        boxShadow: "middle",
        color: "green",
        border: "thin",
        borderRadius: "big",
        children: <div style={{ padding: 24 }}>Accent card</div>
    }
};
