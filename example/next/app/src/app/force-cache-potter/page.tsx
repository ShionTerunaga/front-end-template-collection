import { Box } from "@/components/ui";
import { CardListView } from "@/components/view";
import { getCharacter } from "@/features/harry-potter";
import { ja } from "@/shared/lang/ja";
import { resultUtility } from "@/utils/result";

async function ForceCachePotter() {
    const { isNG } = resultUtility;

    const potters = await getCharacter("force-cache");

    if (isNG(potters)) {
        return <Box>error</Box>;
    }

    return (
        <CardListView
            potters={potters.value}
            title={ja.app.forceCachePotter.title}
        />
    );
}

export default ForceCachePotter;
