import { popupStore } from "./store";

export const popupAction = (function () {
    const { open, close } = popupStore;

    return { open, close };
})();
