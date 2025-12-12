"use client";

import { useSyncExternalStore } from "react";
import { PopupState, popupStore } from "./store";

export type SubPopupSnapshot = PopupState & {
    open: typeof popupStore.open;
    close: typeof popupStore.close;
};

export function useSubPopup() {
    const { subscribe, getSnapshot } = popupStore;
    const state = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

    return {
        ...state,
        open: popupStore.open,
        close: popupStore.close
    } as const;
}
