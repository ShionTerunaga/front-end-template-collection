interface LoadingState {
    isLoading: boolean;
}

export const loadingStore = (function () {
    let snapshot: LoadingState = { isLoading: false };
    const listeners = new Set<() => void>();

    function getSnapshot(): LoadingState {
        return snapshot;
    }

    function subscribe(listener: () => void) {
        listeners.add(listener);
        return () => {
            listeners.delete(listener);
        };
    }

    function startLoading() {
        snapshot = { isLoading: true };
        listeners.forEach((l) => l());
    }

    function finishLoading() {
        snapshot = { isLoading: false };
        listeners.forEach((l) => l());
    }

    return {
        getSnapshot,
        subscribe,
        startLoading,
        finishLoading
    };
})();
