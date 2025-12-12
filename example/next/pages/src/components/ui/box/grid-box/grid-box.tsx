import { ChildrenOnly } from "@/shared/types/react";
import {
    gridBoxBaseStyles,
    gridBoxGap,
    gridBoxGridTemplate
} from "./grid-box.css";
import { CheckerProps } from "@/shared/types/object";

interface Props extends ChildrenOnly {
    gap?: keyof typeof gridBoxGap;
    gridTemplateColumns?: keyof typeof gridBoxGridTemplate;
}

export function GridBox<T extends Props>(
    props: CheckerProps<T, Props, "type error">
) {
    const { children, gap = "large", gridTemplateColumns = "three" } = props;

    const className: string = [
        gridBoxGap[gap],
        gridBoxGridTemplate[gridTemplateColumns],
        gridBoxBaseStyles
    ].join(" ");

    return <div className={className}>{children}</div>;
}
