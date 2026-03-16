import type { Meta, StoryObj } from "@storybook/react-vite";
import { FontCenter } from "@/components/ui";

const meta = {
    title: "components/font-center",
    component: FontCenter
} satisfies Meta<typeof FontCenter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: <div className="p-6">Centered text</div>
    }
};

export const Callout: Story = {
    args: {
        className: "rounded-xl bg-slate-100 p-8",
        children: <div>Centered callout block</div>
    }
};
