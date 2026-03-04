import { basePaths } from "./base-path";
import { Target } from "./create-env.type";
import path from "path";

const content = `NUXT_PUBLIC_API_KEY="https://hp-api.onrender.com/api/characters"`;

export const nuxtEnv: Array<Target> = [
    {
        dir: path.join(basePaths.mainNuxtBase, "scoped-css"),
        content
    },
    {
        dir: path.join(basePaths.mainNuxtBase, "vanilla-extract"),
        content
    }
];
