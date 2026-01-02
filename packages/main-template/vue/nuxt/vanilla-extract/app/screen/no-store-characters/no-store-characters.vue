<script setup lang="ts">
import { CharacterList } from "~/components/view";
import { getCharacter } from "~/features/harry-potter";
import { ja } from "~/shared/lang/ja";

const characterList = await getCharacter("no-store");
</script>

<template>
    <CharacterList
        :title="ja.app.noStoreCharacter.title"
        :characterList="characterList"
    />
</template>
