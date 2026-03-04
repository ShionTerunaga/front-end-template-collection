import path from "path";
import { root } from "./base";
import { run } from "./copy-logic";

export function vueCopy() {
    const srcVueVanillaExtractDir = path.join(
        root,
        "packages",
        "main-template",
        "vue",
        "vue-router",
        "vanilla-extract"
    );

    const destVueVanillaExtractPack = path.join(
        root,
        "packages",
        "create-template",
        "template",
        "vue",
        "vue-router",
        "vanilla-extract"
    );

    const destVueVanillaExtractMac = path.join(
        root,
        "execution",
        "mac",
        "tmp",
        "template",
        "vue",
        "vue-router",
        "vanilla-extract"
    );

    const destVueVanillaExtractExe = path.join(
        root,
        "execution",
        "win",
        "tmp",
        "template",
        "vue",
        "vue-router",
        "vanilla-extract"
    );

    run(srcVueVanillaExtractDir, destVueVanillaExtractPack);
    run(srcVueVanillaExtractDir, destVueVanillaExtractMac);
    run(srcVueVanillaExtractDir, destVueVanillaExtractExe);

    const srcVueScopedCssDir = path.join(
        root,
        "packages",
        "main-template",
        "vue",
        "vue-router",
        "scoped-css"
    );

    const destVueScopedCssPack = path.join(
        root,
        "packages",
        "create-template",
        "template",
        "vue",
        "vue-router",
        "scoped-css"
    );

    const destVueScopedCssMac = path.join(
        root,
        "execution",
        "mac",
        "tmp",
        "template",
        "vue",
        "vue-router",
        "scoped-css"
    );

    const destVueScopedCssExe = path.join(
        root,
        "execution",
        "win",
        "tmp",
        "template",
        "vue",
        "vue-router",
        "scoped-css"
    );

    run(srcVueScopedCssDir, destVueScopedCssPack);
    run(srcVueScopedCssDir, destVueScopedCssMac);
    run(srcVueScopedCssDir, destVueScopedCssExe);

    const srcNuxtVanillaExtractDir = path.join(
        root,
        "packages",
        "main-template",
        "vue",
        "nuxt",
        "vanilla-extract"
    );

    const destNuxtVanillaExtractPack = path.join(
        root,
        "packages",
        "create-template",
        "template",
        "vue",
        "nuxt",
        "vanilla-extract"
    );

    const destNuxtVanillaExtractMac = path.join(
        root,
        "execution",
        "mac",
        "tmp",
        "template",
        "vue",
        "nuxt",
        "vanilla-extract"
    );

    const destNuxtVanillaExtractExe = path.join(
        root,
        "execution",
        "win",
        "tmp",
        "template",
        "vue",
        "nuxt",
        "vanilla-extract"
    );

    run(srcNuxtVanillaExtractDir, destNuxtVanillaExtractPack);
    run(srcNuxtVanillaExtractDir, destNuxtVanillaExtractMac);
    run(srcNuxtVanillaExtractDir, destNuxtVanillaExtractExe);

    const srcNuxtScopedCssDir = path.join(
        root,
        "packages",
        "main-template",
        "vue",
        "nuxt",
        "scoped-css"
    );

    const destNuxtScopedCssPack = path.join(
        root,
        "packages",
        "create-template",
        "template",
        "vue",
        "nuxt",
        "scoped-css"
    );

    const destNuxtScopedCssMac = path.join(
        root,
        "execution",
        "mac",
        "tmp",
        "template",
        "vue",
        "nuxt",
        "scoped-css"
    );

    const destNuxtScopedCssExe = path.join(
        root,
        "execution",
        "win",
        "tmp",
        "template",
        "vue",
        "nuxt",
        "scoped-css"
    );

    run(srcNuxtScopedCssDir, destNuxtScopedCssPack);
    run(srcNuxtScopedCssDir, destNuxtScopedCssMac);
    run(srcNuxtScopedCssDir, destNuxtScopedCssExe);
}
