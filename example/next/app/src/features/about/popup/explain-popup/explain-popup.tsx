import { Heading } from "@/components/ui";
import { ja } from "@/shared/lang/ja";
import explainPopupStyles from "./explain-popup.css";
import { PopupCloseButton } from "@/components/ui/popup/popup-close-button/popup-close-button";

export function ExplainPopup() {
    return (
        <>
            <Heading as="h2">{ja.features.about.popup.title}</Heading>

            <p className={explainPopupStyles.text}>
                {ja.features.about.popup.contents}
            </p>

            <PopupCloseButton className={explainPopupStyles.button}>
                {ja.features.about.popup.close}
            </PopupCloseButton>
        </>
    );
}
