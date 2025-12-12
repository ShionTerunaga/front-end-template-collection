// Tailwind classes replacing vanilla-extract popup base styles.
// NOTE: Background color token replaced with a generic backdrop style; customize as needed.
const popupBaseStyles = {
    background: "fixed inset-0 w-screen h-screen bg-black/40 z-[998]",
    base: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[999]"
} as const;

export default popupBaseStyles;
