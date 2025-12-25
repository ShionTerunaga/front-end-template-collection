import { appTheme } from "@/shared/theme/theme";
import { style } from "@vanilla-extract/css";

const homeStyles = {
    button: style({
        width: 60,
        height: 25,
        borderRadius: 4,
        backgroundColor: appTheme.likeBlue,
        color: appTheme.white,
        border: "none",
        marginTop: 8,
        cursor: "pointer"
    })
};

export default homeStyles;
