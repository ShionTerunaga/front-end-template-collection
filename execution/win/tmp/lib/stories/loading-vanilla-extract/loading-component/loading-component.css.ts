import { style, keyframes } from "@vanilla-extract/css";

const spin = keyframes({
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" }
});

const loadingStyles = {
    container: style({
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.6)"
    }),

    indicator: style({
        width: 100,
        height: 100,
        borderRadius: "50%",
        border: "8px solid rgba(59,130,246,0.12)",
        borderTopColor: "rgba(59,130,246,0.9)",
        boxSizing: "border-box",
        animation: `${spin} 800ms linear infinite`
    })
};

export default loadingStyles;
