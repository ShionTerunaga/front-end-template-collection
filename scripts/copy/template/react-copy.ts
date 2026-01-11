import path from "path";
import { run } from "./copy-logic";
import { root } from "./base";

export function reactCopy() {
    const srcAppVanillaExtractDir = path.join(
        root,
        "packages",
        "main-template",
        "react",
        "next",
        "app",
        "vanilla-extract"
    );
    const destAppVanillaExtractPack = path.join(
        root,
        "packages",
        "create-template",
        "template",
        "react",
        "next",
        "app",
        "vanilla-extract"
    );

    const destAppVanillaExtractMac = path.join(
        root,
        "execution",
        "mac",
        "tmp",
        "template",
        "react",
        "next",
        "app",
        "vanilla-extract"
    );

    const destAppVanillaExtractExe = path.join(
        root,
        "execution",
        "win",
        "tmp",
        "template",
        "react",
        "next",
        "app",
        "vanilla-extract"
    );

    run(srcAppVanillaExtractDir, destAppVanillaExtractPack);
    run(srcAppVanillaExtractDir, destAppVanillaExtractMac);
    run(srcAppVanillaExtractDir, destAppVanillaExtractExe);

    const srcAppTailwindDir = path.join(
        root,
        "packages",
        "main-template",
        "react",
        "next",
        "app",
        "tailwind"
    );
    const destAppTailwindPack = path.join(
        root,
        "packages",
        "create-template",
        "template",
        "react",
        "next",
        "app",
        "tailwind"
    );

    const destAppTailwindMac = path.join(
        root,
        "execution",
        "mac",
        "tmp",
        "template",
        "react",
        "next",
        "app",
        "tailwind"
    );

    const destAppTailwindExe = path.join(
        root,
        "execution",
        "win",
        "tmp",
        "template",
        "react",
        "next",
        "app",
        "tailwind"
    );

    run(srcAppTailwindDir, destAppTailwindPack);
    run(srcAppTailwindDir, destAppTailwindMac);
    run(srcAppTailwindDir, destAppTailwindExe);

    const srcPagesDir = path.join(
        root,
        "packages",
        "main-template",
        "react",
        "next",
        "pages",
        "tailwind"
    );
    const destPagesTailwindPack = path.join(
        root,
        "packages",
        "create-template",
        "template",
        "react",
        "next",
        "pages",
        "tailwind"
    );
    const destPagesTailwindMac = path.join(
        root,
        "execution",
        "mac",
        "tmp",
        "template",
        "react",
        "next",
        "pages",
        "tailwind"
    );
    const destPagesTailwindExe = path.join(
        root,
        "execution",
        "win",
        "tmp",
        "template",
        "react",
        "next",
        "pages",
        "tailwind"
    );

    run(srcPagesDir, destPagesTailwindPack);
    run(srcPagesDir, destPagesTailwindMac);
    run(srcPagesDir, destPagesTailwindExe);

    const srcPagesVanillaExtractDir = path.join(
        root,
        "packages",
        "main-template",
        "react",
        "next",
        "pages",
        "vanilla-extract"
    );
    const destPagesVanillaExtractPack = path.join(
        root,
        "packages",
        "create-template",
        "template",
        "react",
        "next",
        "pages",
        "vanilla-extract"
    );
    const destPagesVanillaExtractMac = path.join(
        root,
        "execution",
        "mac",
        "tmp",
        "template",
        "react",
        "next",
        "pages",
        "vanilla-extract"
    );
    const destPagesVanillaExtractExe = path.join(
        root,
        "execution",
        "win",
        "tmp",
        "template",
        "react",
        "next",
        "pages",
        "vanilla-extract"
    );

    run(srcPagesVanillaExtractDir, destPagesVanillaExtractPack);
    run(srcPagesVanillaExtractDir, destPagesVanillaExtractMac);
    run(srcPagesVanillaExtractDir, destPagesVanillaExtractExe);

    const srcTailwindSrcDir = path.join(
        root,
        "packages",
        "main-template",
        "react",
        "tanstack-router",
        "tailwind"
    );
    const destTailWindSrcTanstackPack = path.join(
        root,
        "packages",
        "create-template",
        "template",
        "react",
        "tanstack-router",
        "tailwind"
    );

    const destTailWindSrcTanstackMac = path.join(
        root,
        "execution",
        "mac",
        "tmp",
        "template",
        "react",
        "tanstack-router",
        "tailwind"
    );

    const destTailWindSrcTanstackExe = path.join(
        root,
        "execution",
        "win",
        "tmp",
        "template",
        "react",
        "tanstack-router",
        "tailwind"
    );

    run(srcTailwindSrcDir, destTailWindSrcTanstackPack);
    run(srcTailwindSrcDir, destTailWindSrcTanstackMac);
    run(srcTailwindSrcDir, destTailWindSrcTanstackExe);

    const srcVanillaExtractSrcDir = path.join(
        root,
        "packages",
        "main-template",
        "react",
        "tanstack-router",
        "vanilla-extract"
    );
    const destVanillaExtractSrcTanstackPack = path.join(
        root,
        "packages",
        "create-template",
        "template",
        "react",
        "tanstack-router",
        "vanilla-extract"
    );

    const destVanillaExtractSrcTanstackMac = path.join(
        root,
        "execution",
        "mac",
        "tmp",
        "template",
        "react",
        "tanstack-router",
        "vanilla-extract"
    );

    const destVanillaExtractSrcTanstackExe = path.join(
        root,
        "execution",
        "win",
        "tmp",
        "template",
        "react",
        "tanstack-router",
        "vanilla-extract"
    );

    run(srcVanillaExtractSrcDir, destVanillaExtractSrcTanstackPack);
    run(srcVanillaExtractSrcDir, destVanillaExtractSrcTanstackMac);
    run(srcVanillaExtractSrcDir, destVanillaExtractSrcTanstackExe);

    const srcReactRouterVanillaExtractDir = path.join(
        root,
        "packages",
        "main-template",
        "react",
        "react-router",
        "vanilla-extract"
    );

    const destReactRouterVanillaExtractPack = path.join(
        root,
        "packages",
        "create-template",
        "template",
        "react",
        "react-router",
        "vanilla-extract"
    );

    const destReactRouterVanillaExtractMac = path.join(
        root,
        "execution",
        "mac",
        "tmp",
        "template",
        "react",
        "react-router",
        "vanilla-extract"
    );

    const destReactRouterVanillaExtractExe = path.join(
        root,
        "execution",
        "win",
        "tmp",
        "template",
        "react",
        "react-router",
        "vanilla-extract"
    );

    run(srcReactRouterVanillaExtractDir, destReactRouterVanillaExtractPack);
    run(srcReactRouterVanillaExtractDir, destReactRouterVanillaExtractMac);
    run(srcReactRouterVanillaExtractDir, destReactRouterVanillaExtractExe);

    // lib copy

    const srcLibDir = path.join(root, "packages", "lib", "react", "src", "lib");

    const destLibDev = path.join(
        root,
        "packages",
        "create-template",
        "lib",
        "react",
        "lib"
    );

    const destLibMacPack = path.join(
        root,
        "execution",
        "mac",
        "tmp",
        "lib",
        "react",
        "lib"
    );

    const destLibWinPack = path.join(
        root,
        "execution",
        "win",
        "tmp",
        "lib",
        "react",
        "lib"
    );

    run(srcLibDir, destLibDev);
    run(srcLibDir, destLibMacPack);
    run(srcLibDir, destLibWinPack);

    const srcStoriesDir = path.join(
        root,
        "packages",
        "lib",
        "react",
        "src",
        "stories"
    );

    const destStoriesDev = path.join(
        root,
        "packages",
        "create-template",
        "lib",
        "react",
        "stories"
    );

    const destStoriesMacPack = path.join(
        root,
        "execution",
        "mac",
        "tmp",
        "lib",
        "react",
        "stories"
    );

    const destStoriesWinPack = path.join(
        root,
        "execution",
        "win",
        "tmp",
        "lib",
        "react",
        "stories"
    );

    run(srcStoriesDir, destStoriesDev);
    run(srcStoriesDir, destStoriesMacPack);
    run(srcStoriesDir, destStoriesWinPack);

    const srcTestDir = path.join(
        root,
        "packages",
        "lib",
        "react",
        "src",
        "__test__"
    );

    const destTestDev = path.join(
        root,
        "packages",
        "create-template",
        "lib",
        "react",
        "__test__"
    );

    const destTestMacPack = path.join(
        root,
        "execution",
        "mac",
        "tmp",
        "lib",
        "react",
        "__test__"
    );

    const destTestWinPack = path.join(
        root,
        "execution",
        "win",
        "tmp",
        "lib",
        "react",
        "__test__"
    );

    run(srcTestDir, destTestDev);
    run(srcTestDir, destTestMacPack);
    run(srcTestDir, destTestWinPack);
}
