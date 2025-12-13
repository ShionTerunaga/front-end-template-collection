import { describe, it, expect, vi } from "vitest";
import { popupStore } from "@/lib/popup/store";

describe("popupStore", () => {
    it("starts closed", () => {
        const s = popupStore.getSnapshot();
        expect(s.isOpen).toBeFalsy();
    });

    it("open sets isOpen true and stores children", () => {
        popupStore.open("hello");

        const s = popupStore.getSnapshot();

        expect(s.isOpen).toBeTruthy();

        if (!s.isOpen) {
            throw new Error("Popup should be open");
        }

        expect(s.children).toBe("hello");
        popupStore.close();
    });

    it("listeners are notified on open/close", () => {
        const cb = vi.fn();
        const unsub = popupStore.subscribe(cb);

        popupStore.open("x");
        expect(cb).toHaveBeenCalled();

        cb.mockClear();
        popupStore.close();
        expect(cb).toHaveBeenCalled();

        unsub();
    });
});
