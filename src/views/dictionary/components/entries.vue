<template>
    <el-descriptions class="entry" v-bind:key="entry.partOfSpeech" v-bind:title="entry.language">
        {{ props.entry }}
    </el-descriptions>
</template>

<script setup lang="ts">
import type { WiktionaryLanguageEntry } from "@/api/definition";

const props = defineProps<{
    entry: WiktionaryLanguageEntry
}>();
</script>
