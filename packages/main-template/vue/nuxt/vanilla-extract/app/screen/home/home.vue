<template>
    <section>
        <h1>{{ ja.app.home.title }}</h1>

        <NuxtLink to="/force-cache-characters">
            {{ ja.app.home.toForceCacheHarryPotterLink }}
        </NuxtLink>
    </section>
</template>

<script setup lang="ts">
import { ja } from "@/shared/lang/ja";
</script>
