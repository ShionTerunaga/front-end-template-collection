import { PopupSampleLayout } from "@/components/layout/popup/popup-layout/popup-layout";
import { Heading } from "@/components/ui";
import { ja } from "@/shared/lang/ja";
import { PopupCloseButton } from "@/components/ui/popup/popup-close-button/popup-close-button";

export function ExplainPopup() {
    return (
        <PopupSampleLayout>
            <Heading as="h2">{ja.features.about.popup.title}</Heading>

            <p className="text-base mt-2 m-0">
                {ja.features.about.popup.contents}
            </p>

            <PopupCloseButton className="w-[60px] h-[25px] rounded bg-blue-500 text-white mt-4 cursor-pointer inline-flex items-center justify-center text-sm">
                {ja.features.about.popup.close}
            </PopupCloseButton>
        </PopupSampleLayout>
    );
}
