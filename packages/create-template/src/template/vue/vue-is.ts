import { VueCss, vueCSSes, vueFramework, VueFramework } from "./vue-static";

export function isVueFramework(value: unknown): value is VueFramework {
    return (
        typeof value === "string" &&
        vueFramework.includes(value as VueFramework)
    );
}

export function isVueCss(value: unknown): value is VueCss {
    return typeof value === "string" && vueCSSes.includes(value as VueCss);
}
