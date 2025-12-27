"use client";

import { popupAction } from "@/lib/popup";
import type { CheckerProps } from "@/shared/types/object";
import { omitElementObject } from "@/utils/object";
import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

type ButtonProps = Omit<
    DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >,
    "onClick"
> & {
    popupChildren: ReactNode;
};

export function PopupOpenButton<T extends ButtonProps>(
    props: CheckerProps<T, ButtonProps, "Not Expect In Open Popup Button Props">
) {
    if (typeof props !== "object") {
        throw new Error("This is not props expected elements.");
    }

    const { popupChildren } = props;
    const buttonProps = omitElementObject(props, ["popupChildren"]);

    const { open } = popupAction;

    return <button {...buttonProps} onClick={() => open(popupChildren)} />;
}
