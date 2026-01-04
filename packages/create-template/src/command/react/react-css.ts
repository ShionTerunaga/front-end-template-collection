import { type Option } from "../../utils/option";
import { isReactCss } from "./react-is";
import { cssCommand } from "../css/css-core";
import { ReactCss } from "../../template/react-static";

export async function cssReactCommand(optionCss: Option<unknown>) {
    const choises = [
        { title: "tailwindCSS", value: "tailwind" },
        { title: "vanilla-extract ", value: "vanilla-extract" }
    ];

    return await cssCommand<ReactCss>({
        optionCss,
        isCss: isReactCss,
        csses: choises
    });
}
