import { APIView, getCharacter } from "@/features/harry-potter";
import { Result } from "@/utils/result";
import { HttpError } from "@/utils/error/http";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import ServerSideRenderScreen from "@/screen/server-side-render/server-side-render-screen";

interface Props {
    character: Result<APIView[], HttpError>;
}

export const getServerSideProps = (async () => {
    const character = await getCharacter();

    return {
        props: {
            character
        }
    };
}) satisfies GetServerSideProps<Props>;

export default function ServerSideRender({
    character
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return <ServerSideRenderScreen character={character} />;
}
