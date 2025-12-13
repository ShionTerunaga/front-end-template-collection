import path from "path";

interface Base {
    exampleNextBase: string;
    exampleTanstackBase: string;
    mainNextAppBase: string;
    mainNextPagesBase: string;
    mainTanstackBase: string;
}

export const basePaths: Base = {
    exampleNextBase: path.resolve(__dirname, "../../example/next"),
    exampleTanstackBase: path.resolve(__dirname, "../../example/tanstack"),
    mainNextAppBase: path.resolve(
        __dirname,
        "../../packages/main-template/react/next/app"
    ),
    mainNextPagesBase: path.resolve(
        __dirname,
        "../../packages/main-template/react/next/pages"
    ),
    mainTanstackBase: path.resolve(
        __dirname,
        "../../packages/main-template/react/tanstack-router"
    )
};
