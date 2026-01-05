import { appTheme } from "@/shared/theme/theme";
import { style } from "@vanilla-extract/css";

const popupBaseStyles = {
    background: style({
        width: "100vw",
        height: "100vh",
        position: "absolute",
        left: 0,
        top: 0,
        backgroundColor: appTheme.popupBackground,
        zIndex: 998
    }),
    base: style({
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
        zIndex: 999
    })
};

export default popupBaseStyles;
