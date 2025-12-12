"use client";

import { usePopup } from "@/lib/popup";
import { AnimatePresence, motion } from "motion/react";
import "../style.css";
import { popupAction } from "@/lib/popup/popup.action";

export function PopupBase() {
    const popup = usePopup();

    const { close } = popupAction;

    return (
        <AnimatePresence>
            {popup.isOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black/50 z-40"
                        onClick={() => close()}
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white"
                    >
                        {popup.children}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

export default PopupBase;
