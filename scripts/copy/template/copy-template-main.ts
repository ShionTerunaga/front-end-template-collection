import fs from "fs";
import path from "path";
import { run } from "./copy-logic";

function main() {
    const root = path.resolve(__dirname, "..", "..", ".."); // repo root
    // Remove existing generated template/next to avoid stale files
    const destNextRoot = path.join(
        root,
        "packages",
        "create-template",
        "react",
        "template",
        "next"
    );

    if (fs.existsSync(destNextRoot)) {
        console.log(`Cleaning existing template directory: ${destNextRoot}`);
        fs.rmSync(destNextRoot, { recursive: true, force: true });
    }

    const destTanstackRoot = path.join(
        root,
        "packages",
        "create-template",
        "template",
        "react",
        "tanstack-router"
    );

    if (fs.existsSync(destTanstackRoot)) {
        console.log(
            `Cleaning existing template directory: ${destTanstackRoot}`
        );
        fs.rmSync(destTanstackRoot, { recursive: true, force: true });
    }

    const destNextMacRoot = path.join(
        root,
        "execution",
        "mac",
        "tmp",
        "template",
        "react",
        "next"
    );

    if (fs.existsSync(destNextMacRoot)) {
        console.log(`Cleaning existing template directory: ${destNextMacRoot}`);
        fs.rmSync(destNextMacRoot, { recursive: true, force: true });
    }
    const destTanstackMacRoot = path.join(
        root,
        "execution",
        "mac",
        "tmp",
        "template",
        "react",
        "tanstack-router"
    );

    if (fs.existsSync(destTanstackMacRoot)) {
        console.log(
            `Cleaning existing template directory: ${destTanstackMacRoot}`
        );
        fs.rmSync(destTanstackMacRoot, { recursive: true, force: true });
    }
    const destNextWinRoot = path.join(
        root,
        "execution",
        "win",
        "tmp",
        "template",
        "react",
        "next"
    );

    if (fs.existsSync(destNextWinRoot)) {
        console.log(`Cleaning existing template directory: ${destNextWinRoot}`);
        fs.rmSync(destNextWinRoot, { recursive: true, force: true });
    }
    const destTanstackWinRoot = path.join(
        root,
        "execution",
        "win",
        "tmp",
        "template",
        "react",
        "tanstack-router"
    );

    if (fs.existsSync(destTanstackWinRoot)) {
        console.log(
            `Cleaning existing template directory: ${destTanstackWinRoot}`
        );
        fs.rmSync(destTanstackWinRoot, { recursive: true, force: true });
    }

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

main();
