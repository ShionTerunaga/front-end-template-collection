"use client";

import { usePopup } from "@/lib/popup";
import { AnimatePresence, motion } from "motion/react";
import popupBaseStyles from "./popup-base.css";
import { popupAction } from "@/lib/popup/popup.action";

export function PopupBase() {
    const popup = usePopup();
    const { close } = popupAction;

    return (
        <AnimatePresence>
            {popup.isOpen && (
                <>
                    <div
                        className={popupBaseStyles.background}
                        onClick={() => close()}
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className={popupBaseStyles.base}
                    >
                        {popup.children}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
