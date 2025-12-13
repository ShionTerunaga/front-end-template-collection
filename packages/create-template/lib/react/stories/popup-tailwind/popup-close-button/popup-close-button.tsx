"use client";

import type { CheckerProps } from "@/shared/types/object";
import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import "../style.css";
import { popupAction } from "@/lib/popup/popup.action";

type ButtonProps = Omit<
    DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >,
    "onClick"
>;

export function PopupCloseButton<T extends ButtonProps>(
    props: CheckerProps<
        T,
        ButtonProps,
        "Not Expect In Close Popup Button Props"
    >
) {
    if (typeof props !== "object") {
        throw new Error("This is not props expected elements.");
    }

    const { close } = popupAction;

    return (
        <button {...props} onClick={() => close()}>
            {props.children}
        </button>
    );
}

export default PopupCloseButton;
