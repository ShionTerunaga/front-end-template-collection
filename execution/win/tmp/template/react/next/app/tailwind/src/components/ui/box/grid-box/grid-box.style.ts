// Tailwind class maps replacing vanilla-extract style/styleVariants
export const gridBoxGap = {
    smallGap: "gap-2", // 8px
    medium: "gap-4", // 16px
    large: "gap-6" // 24px
} as const;

export const gridBoxGridTemplate = {
    three: "grid-cols-3",
    four: "grid-cols-4",
    five: "grid-cols-5"
} as const;

export const gridBoxBaseStyles = "grid justify-items-center" as const;
