<template>
    <div :class="container">
        <header :class="nav">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
            <NuxtLink to="/users">Users</NuxtLink>
            <NuxtLink to="/blog/hello-world">Blog Sample</NuxtLink>
        </header>
        <main>
            <slot />
        </main>
    </div>
</template>

<script setup lang="ts">
import { container, nav } from "~/app/styles.css.ts";
</script>
