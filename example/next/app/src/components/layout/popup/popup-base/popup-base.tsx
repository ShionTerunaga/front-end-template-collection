"use client";

import { CheckerProps } from "@/shared/types/object";
import { ChildrenOnly } from "@/shared/types/react";
import { createPortal } from "react-dom";

type GlobalPopupProps = ChildrenOnly;

export function GlobalPopup<T extends GlobalPopupProps>(
    props: CheckerProps<T, GlobalPopupProps, "GlobalPopupProps">
) {
    const { children } = props;

    // Guard against server-side render — only create portal when `document` is available.
    if (typeof document === "undefined") {
        return null;
    }

    return createPortal(children, document.body);
}
