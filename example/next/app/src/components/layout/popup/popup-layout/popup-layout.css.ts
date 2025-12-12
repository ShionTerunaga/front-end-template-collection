import { appTheme } from "@/shared/theme/theme";
import { style } from "@vanilla-extract/css";

const PopupLayoutStyles = {
    overlay: style({
        position: "absolute",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        background: "rgba(0,0,0,0.45)",
        zIndex: 900,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }),
    box: style({
        position: "absolute",
        left: "40%",
        top: "40%",
        transform: "translate(-50%, -50%)",
        zIndex: 901,
        backgroundColor: appTheme.white,
        borderRadius: 8,
        width: 450,
        height: 250,
        padding: 8,
        textAlign: "center"
    })
};

export default PopupLayoutStyles;
