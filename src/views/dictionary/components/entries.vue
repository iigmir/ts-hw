<template>
    <el-descriptions class="entry" v-bind:title="title">
        {{ props.entry }}
    </el-descriptions>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { WiktionaryLanguageEntry } from "@/api/definition";

const props = defineProps<{
    entry: WiktionaryLanguageEntry
}>();

const title = computed( () => `${props.entry.language} - ${props.entry.partOfSpeech}` );
</script>
