"use client";

import { usePopup } from "@/lib/popup";
import { CheckerProps } from "@/shared/types/object";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

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

    const { closePopup } = usePopup();

    return <button {...props} onClick={() => closePopup()} />;
}
