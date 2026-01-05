import { resolve, basename } from "node:path";
import { addPackage } from "../../lib/react/install-lib";
import { Noop, Result, resultUtility } from "../../utils/result";
import { TechMaterial } from "../core/core-static";

import { typescriptTemplateInstall } from "../common/typescript-template-install";

export async function reactInstaller({
    appPath,
    material
}: {
    appPath: string;
    material: TechMaterial;
}): Promise<Result<Noop, Error>> {
    const { createNg } = resultUtility;
    const { styleSheet, lib } = material;

    const root = resolve(appPath);
    const appName = basename(appPath);

    if (styleSheet.isNone) {
        return createNg(new Error("CSS option is required"));
    }

    if (lib.isNone) {
        return createNg(new Error("Library option is required"));
    }

    const installResult = await typescriptTemplateInstall({
        root,
        appName,
        material
    });

    if (installResult.isErr) {
        return installResult;
    }

    return await addPackage({ root, css: styleSheet.value, libs: lib.value });
}
