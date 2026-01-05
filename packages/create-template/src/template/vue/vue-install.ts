import { basename, resolve } from "node:path";
import { Noop, Result, resultUtility } from "../../utils/result";
import { TechMaterial } from "../core/core-static";
import { typescriptTemplateInstall } from "../common/typescript-template-install";

export async function vueInstaller({
    appPath,
    material
}: {
    appPath: string;
    material: TechMaterial;
}): Promise<Result<Noop, Error>> {
    const { createNg } = resultUtility;
    const { styleSheet } = material;

    if (styleSheet.isNone) {
        return createNg(new Error("CSS option is required"));
    }

    const root = resolve(appPath);
    const appName = basename(appPath);

    const installResult = await typescriptTemplateInstall({
        root,
        appName,
        material
    });

    return installResult;
}
