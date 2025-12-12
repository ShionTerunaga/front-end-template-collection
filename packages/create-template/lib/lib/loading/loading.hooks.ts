import { useSyncExternalStore } from "react";
import { loadingStore } from "./store";

export function useLoading() {
    const { getSnapshot, subscribe } = loadingStore;

    const loading = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

    return loading.isLoading;
}
