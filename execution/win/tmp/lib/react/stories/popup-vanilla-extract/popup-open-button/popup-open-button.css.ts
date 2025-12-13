import { style } from "@vanilla-extract/css";

const popupOpenButtonStyles = {
    button: style({
        padding: "8px 16px",
        backgroundColor: "#3b82f6",
        color: "#ffffff",
        borderRadius: 4,
        cursor: "pointer",
        border: "none",
        fontSize: 14,
        selectors: {
            "&:hover": {
                backgroundColor: "#2563eb"
            }
        }
    })
};

export default popupOpenButtonStyles;
