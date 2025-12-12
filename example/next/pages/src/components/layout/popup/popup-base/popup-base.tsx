import { usePopup } from "@/lib/popup";
import { AnimatePresence, motion } from "motion/react";
import popupBaseStyles from "./popup-base.css";

export function PopupBase() {
    const { openState } = usePopup();

    return (
        <AnimatePresence>
            {openState.isOpen && (
                <>
                    <div className={popupBaseStyles.background} />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className={popupBaseStyles.base}
                    >
                        {openState.children}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
