export const vueFramework = ["vue-router", "nuxt"] as const;
export type VueFramework = (typeof vueFramework)[number];

export const vueCSSes = ["vanilla-extract"] as const;
export type VueCss = (typeof vueCSSes)[number];
