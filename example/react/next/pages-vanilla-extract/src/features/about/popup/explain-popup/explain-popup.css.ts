import { appTheme } from "@/shared/theme/theme";
import { style } from "@vanilla-extract/css";

const explainPopupStyles = {
    text: style({
        fontSize: 16,
        margin: 0,
        marginTop: 8
    }),
    button: style({
        width: 60,
        height: 25,
        borderRadius: 4,
        backgroundColor: appTheme.likeBlue,
        color: appTheme.white,
        border: "none",
        marginTop: 16,
        cursor: "pointer"
    })
};

export default explainPopupStyles;
