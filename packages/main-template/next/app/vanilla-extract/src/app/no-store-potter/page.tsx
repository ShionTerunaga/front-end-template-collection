import { Box } from "@/components/ui";
import { CardListView } from "@/components/view";
import { getCharacter } from "@/features/harry-potter";
import { ja } from "@/shared/lang/ja";
import { optionUtility } from "@/utils/option";
import { resultUtility } from "@/utils/result";
import { Suspense } from "react";

async function NoStorePotter() {
    const { isNG } = resultUtility;
    const { isNone } = optionUtility;

    const potters = await getCharacter("no-store");

    if (isNG(potters)) {
        return <Box>error</Box>;
    }

    if (isNone(potters.value)) {
        return <Box>no data</Box>;
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CardListView
                potters={potters.value.value}
                title={ja.app.noStorePotter.title}
            />
        </Suspense>
    );
}

export default NoStorePotter;
