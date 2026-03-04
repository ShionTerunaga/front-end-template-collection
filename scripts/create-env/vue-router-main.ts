import path from "path";
import { basePaths } from "./base-path";
import { Target } from "./create-env.type";

const content = `VITE_API_KEY="https://hp-api.onrender.com/api/characters"`;

export const vueRouterEnv: Array<Target> = [
    {
        dir: path.join(basePaths.mainVueRouterBase, "scoped-css"),
        content
    },
    {
        dir: path.join(basePaths.mainVueRouterBase, "vanilla-extract"),
        content
    }
];
