import { Box } from "@/components/ui";
import { CardListView } from "@/components/view";
import { APIView } from "@/features/harry-potter";
import { ja } from "@/shared/lang/ja";
import { CheckerProps } from "@/shared/types/object";
import { HttpError } from "@/utils/error/http";
import { Result, resultUtility } from "@/utils/result";

interface Props {
    character: Result<APIView[], HttpError>;
}

function ServerSideRenderScreen<T extends Props>(
    props: CheckerProps<T, Props, "This props is different from Props.">
) {
    const { character } = props;
    const { isNG } = resultUtility;

    if (isNG(character)) {
        return <Box>サーバーサイドレンダーが失敗してます。</Box>;
    }

    return (
        <CardListView
            potters={character.value}
            title={ja.app.serverSideRenderPotter.title}
        />
    );
}

export default ServerSideRenderScreen;
