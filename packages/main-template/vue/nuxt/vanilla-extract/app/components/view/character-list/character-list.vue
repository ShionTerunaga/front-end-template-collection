<script setup lang="ts">
import { type Result } from "~/utils/result";
import { type Option } from "~/utils/option";
import type { APIView } from "~/features/harry-potter";
import type { FetcherError } from "~/utils/error/fetcher";
import { Error } from "~/components/layout";
import { gridBoxBaseStyles, titleStyles } from "./harry-potter-characters.css";
import { Card } from "~/components/layout";

const props = defineProps<{
    characterList: Result<Option<Array<APIView>>, FetcherError>;
    title: string;
}>();
</script>

<template>
    <main>
        <h1 :class="titleStyles">{{ props.title }}</h1>
        <Error
            v-if="props.characterList.isErr"
            :errorMessage="props.characterList.err.message"
        />
        <Error
            v-else-if="props.characterList.value.isNone"
            error-message="データがありません"
        />
        <div v-else :class="gridBoxBaseStyles">
            <Card
                v-for="character in props.characterList.value.value"
                :key="character.id"
                :title="character.name"
                :src="character.image"
                :alt="character.name"
                :boxHeight="300"
                :srcWidth="150"
                :srcHeight="200"
            />
        </div>
    </main>
</template>
