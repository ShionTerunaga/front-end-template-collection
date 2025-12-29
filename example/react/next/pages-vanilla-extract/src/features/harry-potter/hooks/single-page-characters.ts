import { useEffect, useMemo, useState } from "react";
import { SinglePageGetCharacters } from "./characters.type";
import { optionUtility, Option } from "@/utils/option";
import { getCharacter } from "../service/get-character";
import { resultUtility } from "@/utils/result";
import { APIView } from "../model/model-view";
import { HttpError } from "@/utils/error/http";

export function useSinglePageCharacters() {
    const { isNG } = resultUtility;
    const { createSome, createNone, isNone } = optionUtility;

    const [fetchCharacter, setFetchCharacter] =
        useState<Option<Array<APIView>>>(createNone());

    const [error, setError] = useState<Option<HttpError>>(createNone());

    useEffect(() => {
        let isMounted = true;

        (async () => {
            const result = await getCharacter();

            if (!isMounted) return;

            if (isNG(result)) {
                setError(createSome(result.err));
                return;
            }

            setFetchCharacter(createSome(result.value));
        })();

        return () => {
            isMounted = false;
        };
    }, []);

    const isLoading: boolean = useMemo(() => {
        return isNone(fetchCharacter) && isNone(error);
    }, [fetchCharacter, error]);

    const characters: Array<SinglePageGetCharacters> = useMemo(() => {
        if (isNone(fetchCharacter)) {
            return [];
        }

        const characters: Array<SinglePageGetCharacters> =
            fetchCharacter.value.map((item) => ({
                id: item.id,
                name: item.name,
                image: item.image
            }));

        return characters;
    }, [fetchCharacter]);

    return {
        isLoading,
        characters,
        error
    };
}
