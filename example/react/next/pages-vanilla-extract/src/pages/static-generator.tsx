import { APIView, getCharacter } from "@/features/harry-potter";
import StaticGeneratorScreen from "@/screen/static-generator/static-generator";
import { HttpError } from "@/utils/error/http";
import { Result } from "@/utils/result";
import type { InferGetStaticPropsType, GetStaticProps } from "next";

interface Props {
    character: Result<APIView[], HttpError>;
}

export const getStaticProps = (async () => {
    const character = await getCharacter();

    return {
        props: {
            character
        }
    };
}) satisfies GetStaticProps<Props>;

export default function StaticGenerator({
    character
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return <StaticGeneratorScreen character={character} />;
}
