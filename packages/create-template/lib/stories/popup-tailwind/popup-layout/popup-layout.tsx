import type { ChildrenOnly } from "@/shared/types/react";
import "../style.css";

export function PopupSampleLayout({ children }: ChildrenOnly) {
    return (
        <div className="bg-white rounded-md w-[450px] h-[250px] p-2 text-center">
            {children}
        </div>
    );
}

export default PopupSampleLayout;
