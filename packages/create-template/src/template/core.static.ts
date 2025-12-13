export const techStacks = ["react"] as const;
export type TechStack = (typeof techStacks)[number];

export const techStackSelectList = [{ title: "React", value: "react" }];
