import { loadingStore } from "./store";

export const loadingAction = (function () {
    const { startLoading, finishLoading } = loadingStore;

    return {
        startLoading,
        finishLoading
    };
})();
