import PopupBase from "./popup-base/popup-base";
import PopupSampleLayout from "./popup-layout/popup-layout";
import PopupCloseButton from "./popup-close-button/popup-close-button";
import PopupOpenButton from "./popup-open-button/popup-open-button";

export default {
    title: "Popup/tailwind",
    component: PopupBase
};

export const Default = () => (
    <>
        <PopupOpenButton
            popupChildren={
                <PopupSampleLayout>
                    Popup content
                    <br />
                    <PopupCloseButton className="px-[16px] py-[8px] bg-[red] text-white rounded-[4px]">
                        Close
                    </PopupCloseButton>
                </PopupSampleLayout>
            }
            className="px-[16px] py-[8px] bg-[#3b82f6] text-white rounded-[4px] text-[14px]"
        >
            Open Popup
        </PopupOpenButton>
        <PopupBase />
    </>
);
