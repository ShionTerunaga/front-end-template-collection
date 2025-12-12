"use client";

import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { useSubPopup } from "@/lib/popup/popup.hooks";
import subPopupStyles from "./popup-layout.css";

export function PopupLayout() {
    const popup = useSubPopup();

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
