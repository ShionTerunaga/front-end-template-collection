import { ChildrenOnly } from "@/shared/types/react";
import popupLayoutStyles from "./popup-layout.css";
import { Box } from "@/components/ui";

export function PopupSampleLayout({ children }: ChildrenOnly) {
    return <Box className={popupLayoutStyles.container}>{children}</Box>;
}
