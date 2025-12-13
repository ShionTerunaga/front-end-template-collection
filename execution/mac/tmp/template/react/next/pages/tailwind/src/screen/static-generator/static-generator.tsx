import { Box } from "@/components/ui";
import { CardListView } from "@/components/view";
import { APIView } from "@/features/harry-potter";
import { ja } from "@/shared/lang/ja";
import { CheckerProps } from "@/shared/types/object";
import { Result, resultUtility } from "@/utils/result";
import { Option, optionUtility } from "@/utils/option";
import { FetcherError } from "@/utils/error/fetcher";

interface Props {
    character: Result<Option<APIView[]>, FetcherError>;
}

function StaticGeneratorScreen<T extends Props>(
    props: CheckerProps<T, Props, "This props is different from Props.">
) {
    const { character } = props;
    const { isNG } = resultUtility;
    const { isNone } = optionUtility;

    if (isNG(character)) {
        return <Box>静的生成が失敗してます。</Box>;
    }

    if (isNone(character.value)) {
        return <Box>表示するデータがありません。</Box>;
    }

    return (
        <CardListView
            potters={character.value.value}
            title={ja.app.staticGeneratorPotter.title}
        />
    );
}

export default StaticGeneratorScreen;
