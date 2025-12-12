"use client";

import { usePopup } from "@/lib/popup";
import { AnimatePresence, motion } from "motion/react";

export function PopupBase() {
    const { openState } = usePopup();

    return (
        <AnimatePresence>
            {openState.isOpen && (
                <>
                    <div className="fixed inset-0 w-screen h-screen bg-black/40 z-[998]" />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[999]"
                    >
                        {openState.children}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
