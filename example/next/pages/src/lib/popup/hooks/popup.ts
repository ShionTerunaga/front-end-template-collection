import { ReactNode } from "react";
import { popupContext } from "../store/popup-context";

export function usePopup() {
    const [, usePopupContext] = popupContext;
    const [openState, setOpenState] = usePopupContext();

    const openPopup = ({ children }: { children: ReactNode }) => {
        setOpenState({
            type: "show",
            children
        });
    };

    const closePopup = () => {
        setOpenState({
            type: "hidden"
        });
    };

    return {
        openState,
        openPopup,
        closePopup
    };
}
