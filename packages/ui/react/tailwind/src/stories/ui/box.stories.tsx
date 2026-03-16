import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box } from "@/components/ui";

const meta = {
    title: "components/box",
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
        children: <div className="p-5">Default box</div>
    }
};

export const AccentCard: Story = {
    args: {
        as: "article",
        width: "middle",
        boxShadow: "middle",
        color: "blue",
        border: "thin",
        borderRadius: "big",
        children: <div className="p-6">Accent card</div>
    }
};
