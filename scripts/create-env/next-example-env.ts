import path from "path";
import { Target } from "./create-env.type";
import { basePaths } from "./base-path";

const appContents = `API_KEY="https://hp-api.onrender.com/api/characters"\nAPI_KEY2="https://dog.ceo/api/breeds/image/random"`;
const pagesContents = `NEXT_PUBLIC_API_KEY="https://hp-api.onrender.com/api/characters"`;

export const examplesNext: Array<Target> = [
    {
        dir: path.join(basePaths.exampleNextBase, "app"),
        content: appContents
    },
    {
        dir: path.join(basePaths.exampleNextBase, "pages"),
        content: pagesContents
    },
    {
        dir: path.join(basePaths.exampleNextBase, "app-tailwind"),
        content: appContents
    },
    {
        dir: path.join(basePaths.exampleNextBase, "pages-tailwind"),
        content: pagesContents
    }
];
