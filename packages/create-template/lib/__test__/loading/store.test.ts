import { describe, it, expect, vi } from "vitest";
import { loadingStore } from "@/lib/loading/store";

describe("loadingStore", () => {
    it("has initial state false and toggles with start/finish", () => {
        expect(loadingStore.getSnapshot().isLoading).toBeFalsy();

        loadingStore.startLoading();
        expect(loadingStore.getSnapshot().isLoading).toBeTruthy();

        loadingStore.finishLoading();
        expect(loadingStore.getSnapshot().isLoading).toBeFalsy();
    });

    it("notifies subscribers and unsubscribe works", () => {
        const listener = vi.fn();
        const unsubscribe = loadingStore.subscribe(listener);

        loadingStore.startLoading();
        expect(listener).toHaveBeenCalled();

        unsubscribe();
        listener.mockClear();

        loadingStore.finishLoading();
        expect(listener).not.toHaveBeenCalled();
    });
});
