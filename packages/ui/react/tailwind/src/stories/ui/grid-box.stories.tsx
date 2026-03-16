import type { Meta, StoryObj } from "@storybook/react-vite";
import { GridBox } from "@/components/ui";

const meta = {
    title: "components/grid-box",
    component: GridBox,
    parameters: {
        layout: "fullscreen"
    }
} satisfies Meta<typeof GridBox>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = (
    <>
        <div className="w-full rounded-lg bg-slate-100 p-4">Item 1</div>
        <div className="w-full rounded-lg bg-slate-200 p-4">Item 2</div>
        <div className="w-full rounded-lg bg-slate-100 p-4">Item 3</div>
        <div className="w-full rounded-lg bg-slate-200 p-4">Item 4</div>
        <div className="w-full rounded-lg bg-slate-100 p-4">Item 5</div>
    </>
);

export const ThreeColumns: Story = {
    args: {
        gap: "large",
        gridTemplateColumns: "three",
        children: items
    }
};

export const FourColumns: Story = {
    args: {
        gap: "medium",
        gridTemplateColumns: "four",
        children: items
    }
};
