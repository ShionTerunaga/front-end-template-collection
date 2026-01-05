import { optionUtility } from "../../utils/option";
import { Command } from "commander";
import { InitialReturnValue } from "prompts";

export const commanderCore = (function () {
    const { optionConversion } = optionUtility;

    const program = new Command("create-react-template")
        .version("0.1.0", "-v, --version", "output the current version")
        .argument("[directory]")
        .usage("[directory] [options]")
        .helpOption("-h, --help", "display help for command")
        .allowUnknownOption()
        .option("-n, --name <name>", "specify the project name")
        .option("-t, --tech-stack <techStack>", "specify the tech stack(react)")
        .option(
            "--rf, --react-framework <reactFramework>",
            "framework to use (tanstack-router | next/app | next/pages)"
        )
        .option(
            "--vf, --vue-framework <vueFramework>",
            "vue framework to use (vue-router | nuxt)"
        )
        .option(
            "-c,--css <css>",
            "select css framework (tailwind | vanilla-extract)"
        )
        .option("--use-all-components", "install all available components")
        .parse(process.argv);

    const opts = program.opts();

    const optionName = optionConversion(opts.name);
    const optionReactFramework = optionConversion(opts.reactFramework);
    const optionVueFramework = optionConversion(opts.vueFramework);
    const optionTechStack = optionConversion(opts.techStack);
    const optionCss = optionConversion(opts.css);
    const optionUseAllComponents = optionConversion(opts.useAllComponents);

    const onPromptState = (state: {
        value: InitialReturnValue;
        aborted: boolean;
        exited: boolean;
    }) => {
        if (state.aborted) {
            process.stdout.write("\x1B[?25h");
            process.stdout.write("\n");
            process.exit(1);
        }
    };

    return {
        onPromptState,
        optionName,
        optionReactFramework,
        optionVueFramework,
        optionTechStack,
        optionCss,
        optionUseAllComponents
    };
})();
