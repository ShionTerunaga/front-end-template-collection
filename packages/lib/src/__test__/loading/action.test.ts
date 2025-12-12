import { describe, it, expect } from "vitest";
import { loadingAction } from "@/lib/loading/loading.action";
import { loadingStore } from "@/lib/loading/store";

describe("loadingAction", () => {
    it("delegates to store methods", () => {
        loadingAction.startLoading();
        expect(loadingStore.getSnapshot().isLoading).toBeTruthy();

        loadingAction.finishLoading();
        expect(loadingStore.getSnapshot().isLoading).toBeFalsy();
    });
});
