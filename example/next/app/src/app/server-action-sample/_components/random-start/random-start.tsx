"use client";

import { Box } from "@/components/ui";
import { getRandomDog } from "@/features/random-dog";
import { RandomDogRes } from "@/features/random-dog/model/random-dog";
import { ja } from "@/shared/lang/ja";
import { Option, optionUtility } from "@/utils/option";
import { resultUtility } from "@/utils/result";
import Image from "next/image";
import { useState } from "react";

function RandomStart() {
    const { createSome, createNone, isSome } = optionUtility;
    const { isOK } = resultUtility;

    const [dog, setDog] = useState<Option<RandomDogRes>>(createNone());
    const [error, setError] = useState<boolean>(false);

    const handleClick = async () => {
        if (error) {
            setError(false);
        }

        if (isSome(dog)) {
            setDog(createNone());
        }

        const res = await getRandomDog();

        if (isOK(res)) {
            setDog(createSome(res.value));
        } else {
            setError(true);
        }
    };

    return (
        <Box as="section">
            <Box>
                {error ? (
                    <p>{ja.app.serverActionSample.error}</p>
                ) : isSome(dog) ? (
                    <Image
                        src={dog.value.message}
                        width={150}
                        height={100}
                        alt=""
                    />
                ) : null}
            </Box>
            <button onClick={handleClick}>
                {ja.app.serverActionSample.button}
            </button>
        </Box>
    );
}

export default RandomStart;
