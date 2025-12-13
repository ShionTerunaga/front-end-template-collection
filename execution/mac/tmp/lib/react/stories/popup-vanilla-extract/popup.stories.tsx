import { PopupBase } from "./popup-base/popup-base";
import { PopupCloseButton } from "./popup-close-button/popup-close-button";
import { PopupSampleLayout } from "./popup-layout/popup-layout";
import { PopupOpenButton } from "./popup-open-button/popup-open-button";
import popupOpenButtonStyles from "./popup-open-button/popup-open-button.css";

export default {
    title: "Popup/vanilla",
    component: PopupOpenButton
};

const ExamplePopupContent = () => (
    <PopupOpenButton
        popupChildren={
            <PopupSampleLayout>
                Popup content
                <br />
                <PopupCloseButton
                    style={{
                        backgroundColor: "red",
                        padding: "8px 16px",
                        color: "white",
                        borderRadius: 4
                    }}
                >
                    Close
                </PopupCloseButton>
            </PopupSampleLayout>
        }
        className={popupOpenButtonStyles.button}
    >
        Open Popup
    </PopupOpenButton>
);

export const Default = () => (
    <>
        <ExamplePopupContent />
        <PopupBase />
    </>
);
