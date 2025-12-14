import { Noop, Result, resultUtility } from "../utils/result";
import { type TechStack } from "./core.static";
import { reactInstaller } from "./react.installer";
import { reactCli } from "./react.setting";

export async function createApp({
    appPath,
    tech
}: {
    appPath: string;
    tech: TechStack;
}): Promise<Result<Noop, Error>> {
    const { isNG } = resultUtility;

    switch (tech) {
        case "react": {
            const materialResult = await reactCli();
            if (isNG(materialResult)) {
                return materialResult;
            }

            return await reactInstaller({
                appPath,
                material: materialResult.value
            });
        }
    }
}
