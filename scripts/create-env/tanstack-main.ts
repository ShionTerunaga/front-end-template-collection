import { basePaths } from "./base-path";
import { Target } from "./create-env.type";
import path from "path";

const content = `VITE_API_KEY="https://hp-api.onrender.com/api/characters"`;

export const tanstackRouterEnv: Array<Target> = [
    {
        dir: path.join(basePaths.mainTanstackBase, "tailwind"),
        content
    },
    {
        dir: path.join(basePaths.mainTanstackBase, "vanilla-extract"),
        content
    }
];
