import { style } from "@vanilla-extract/css";

export const container = style({
    display: "grid",
    gap: "16px",
    padding: "24px",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f7fafc 0%, #e2e8f0 100%)"
});

export const nav = style({
    display: "flex",
    gap: "12px",
    alignItems: "center",
    paddingBottom: "16px"
});
