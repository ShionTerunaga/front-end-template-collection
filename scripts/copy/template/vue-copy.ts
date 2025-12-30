import path from "path";
import { root } from "./base";
import { run } from "./copy-logic";

export function vueCopy() {
    const srcVueDir = path.join(
        root,
        "packages",
        "main-template",
        "vue",
        "vue"
    );

    const destVuePack = path.join(
        root,
        "packages",
        "create-template",
        "template",
        "vue",
        "vue"
    );

    const destVueMac = path.join(
        root,
        "execution",
        "mac",
        "tmp",
        "template",
        "vue",
        "vue"
    );

    const destVueExe = path.join(
        root,
        "execution",
        "win",
        "tmp",
        "template",
        "vue",
        "vue"
    );

    run(srcVueDir, destVuePack);
    run(srcVueDir, destVueMac);
    run(srcVueDir, destVueExe);
}
