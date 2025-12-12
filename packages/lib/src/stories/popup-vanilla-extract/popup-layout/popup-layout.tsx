import popupLayoutStyles from "./popup-layout.css";
import type { ChildrenOnly } from "@/shared/types/react";

export function PopupSampleLayout({ children }: ChildrenOnly) {
    return <div className={popupLayoutStyles.container}>{children}</div>;
}
