"use client";

import { AnimatePresence, motion } from "motion/react";
import { usePopup, popupAction } from "@/lib/popup";
import subPopupStyles from "./popup-layout.css";

export function PopupLayout() {
    const popup = usePopup();
    const { close } = popupAction;
    return (
        <AnimatePresence>
            {popup.isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className={subPopupStyles.overlay}
                        onClick={close}
                        aria-hidden
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.24 }}
                        className={subPopupStyles.box}
                    >
                        {popup.children}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

export default PopupLayout;
