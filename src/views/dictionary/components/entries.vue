<template>
    <div class="entry">
        {{ props.entry }}
    </div>
</template>

<script setup lang="ts">
import type { WiktionaryLanguageEntry } from "@/api/definition";

const props = defineProps<{
    entry: WiktionaryLanguageEntry
}>();
</script>
