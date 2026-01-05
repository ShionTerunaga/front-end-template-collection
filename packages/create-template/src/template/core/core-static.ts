import { Option } from "../../utils/option";
import { ReactCss, ReactLibrarySettings } from "../react/react-static";

export const techStacks = ["react", "vue"] as const;
export type TechStack = (typeof techStacks)[number];

export const techStackSelectList = [
    { title: "React", value: "react" },
    { title: "Vue", value: "vue" }
];

export type TechStackList = ReactLibrarySettings;

export type TechStackCss = ReactCss;

export interface TechMaterial {
    path: string;
    lib: Option<TechStackList>;
    styleSheet: Option<TechStackCss>;
}

export interface RunSuccess {
    name: string;
    tech: TechStack;
}
