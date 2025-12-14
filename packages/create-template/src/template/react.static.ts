/**
 * Static definitions for template creation
 */
export const frameworks = [
    "tanstack-router",
    "next/app",
    "next/pages"
] as const;
export type Framework = (typeof frameworks)[number];

/**
 * CSS
 */
export const csses = ["tailwind", "vanilla-extract"] as const;
export type ReactCss = (typeof csses)[number];

export interface InstallTemplateArgs {
    appName: string;
    root: string;
    framework: Framework;
    css: ReactCss;
}

/**
 * Library definitions
 */
export const libsArray = ["popup", "loading"] as const;
export type Lib = (typeof libsArray)[number];
interface SelectLib {
    title: string;
    value: Lib;
}
export const selectLibList: Array<SelectLib> = [
    { title: "Popup", value: "popup" },
    { title: "Loading", value: "loading" }
];
interface ReactLibrarySetting {
    stack: "react";
    lib: Lib;
    unitTest: boolean;
    storybook: boolean;
}
export type ReactLibrarySettings = Array<ReactLibrarySetting>;
export const librarySetting: ReactLibrarySettings = [
    {
        stack: "react",
        lib: "popup",
        unitTest: true,
        storybook: true
    },
    {
        stack: "react",
        lib: "loading",
        unitTest: true,
        storybook: true
    }
];
