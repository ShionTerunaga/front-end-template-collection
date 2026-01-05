import type { Noop, Result } from "../../utils/result";
import { type TechStack } from "./core-static";
import { reactInstaller } from "../react/react-installer";
import { reactCli } from "../react/react-setting";

export async function createApp({
    appPath,
    tech
}: {
    appPath: string;
    tech: TechStack;
}): Promise<Result<Noop, Error>> {
    switch (tech) {
        case "react": {
            const materialResult = await reactCli();

            if (materialResult.isErr) {
                return materialResult;
            }

            return await reactInstaller({
                appPath,
                material: materialResult.value
            });
        }
    }
}
