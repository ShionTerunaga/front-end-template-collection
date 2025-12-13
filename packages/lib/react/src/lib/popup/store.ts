import { type ReactNode } from "react";

interface ShowPopup {
    isOpen: true;
    children: ReactNode;
}

interface HidePopup {
    isOpen: false;
}
export type PopupState = ShowPopup | HidePopup;

export const popupStore = (function () {
    let snapshot: PopupState = { isOpen: false };
    const listeners = new Set<() => void>();

    function getSnapshot(): PopupState {
        return snapshot;
    }

    function subscribe(listener: () => void) {
        listeners.add(listener);
        return () => {
            listeners.delete(listener);
        };
    }

    function close() {
        snapshot = { isOpen: false };
        listeners.forEach((l) => l());
    }

    function open(children?: React.ReactNode) {
        snapshot = { isOpen: true, children };
        listeners.forEach((l) => l());
    }

    return {
        getSnapshot,
        subscribe,
        open,
        close
    };
})();
