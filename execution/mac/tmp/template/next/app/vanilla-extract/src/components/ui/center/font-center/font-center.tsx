import { CheckerProps } from "@/shared/types/object";
import { ChildrenOnly } from "@/shared/types/react";
import { CSSProperties } from "react";
import fontCenterBaseStyle from "./font-center.css";

interface Props extends ChildrenOnly {
    className?: string;
    style?: Omit<CSSProperties, "center">;
}

function FontCenter<T extends Props>(
    props: CheckerProps<T, Props, "fontCenter has not any props.">
) {
    if (typeof props !== "object") {
        throw Error("runtime error");
    }

    const { className, style, children } = props;

    return (
        <div className={`${fontCenterBaseStyle} ${className}`} style={style}>
            {children}
        </div>
    );
}

export default FontCenter;
