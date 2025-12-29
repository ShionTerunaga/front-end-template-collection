import { ReactNode } from "react";

interface OpenState {
    isOpen: true;
    children: ReactNode;
}

interface CloseState {
    isOpen: false;
}

export type PopupState = OpenState | CloseState;

interface OpenAction {
    type: "show";
    children: ReactNode;
}

interface CloseAction {
    type: "hidden";
}

export type PopupAction = OpenAction | CloseAction;
