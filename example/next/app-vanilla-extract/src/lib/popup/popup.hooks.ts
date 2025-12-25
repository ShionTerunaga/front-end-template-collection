"use client";

import { useSyncExternalStore } from "react";
import { type PopupState, popupStore } from "./store";

export type SubPopupSnapshot = PopupState & {
    open: typeof popupStore.open;
    close: typeof popupStore.close;
};

export function usePopup() {
    const { subscribe, getSnapshot } = popupStore;
    const state = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

    return {
        ...state
    } as const;
}
