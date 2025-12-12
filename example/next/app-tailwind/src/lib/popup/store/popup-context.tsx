"use client";

import { createReducerContext } from "@/lib/context/reducer-context";
import { popupReducer } from "./popup-reducer";
import { PopupAction, PopupState } from "./popup.type";
import { ChildrenOnly } from "@/shared/types/react";
import { ReactNode } from "react";

export const popupContext = createReducerContext<PopupState, PopupAction>({
    errorMessage: "PopupProviderで初期化がされていません",
    reducer: popupReducer,
    initialState: {
        isOpen: false
    }
});

interface Props {
    layoutPopup: ReactNode;
}

export function PopupProvider({ layoutPopup, children }: Props & ChildrenOnly) {
    const [Provider] = popupContext;

    return (
        <Provider>
            {layoutPopup}
            {children}
        </Provider>
    );
}
