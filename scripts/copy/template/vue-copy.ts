import path from "path";
import { root } from "./base";
import { run } from "./copy-logic";

export function vueCopy() {
    const srcVueVanillaExtractDir = path.join(
        root,
        "packages",
        "main-template",
        "vue",
        "vue",
        "vanilla-extract"
    );

    const destVueVanillaExtractPack = path.join(
        root,
        "packages",
        "create-template",
        "template",
        "vue",
        "vue",
        "vanilla-extract"
    );

    const destVueVanillaExtractMac = path.join(
        root,
        "execution",
        "mac",
        "tmp",
        "template",
        "vue",
        "vue",
        "vanilla-extract"
    );

    const destVueVanillaExtractExe = path.join(
        root,
        "execution",
        "win",
        "tmp",
        "template",
        "vue",
        "vue",
        "vanilla-extract"
    );

    run(srcVueVanillaExtractDir, destVueVanillaExtractPack);
    run(srcVueVanillaExtractDir, destVueVanillaExtractMac);
    run(srcVueVanillaExtractDir, destVueVanillaExtractExe);

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
}
