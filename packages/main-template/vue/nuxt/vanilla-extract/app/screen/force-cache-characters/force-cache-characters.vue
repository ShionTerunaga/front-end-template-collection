<script setup lang="ts">
import { CharacterList } from "~/components/view";
import { getCharacter } from "~/features/harry-potter";
import { ja } from "~/shared/lang/ja";

const characterList = await getCharacter("force-cache");
</script>

<template>
    <CharacterList
        :title="ja.app.forceCacheCharacter.title"
        :characterList="characterList"
    />
</template>
