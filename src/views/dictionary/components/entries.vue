<template>
    <el-descriptions class="entry" v-bind:title="title" v-bind:column="1" border>
        <el-descriptions-item v-for="(definition, index) in definitions" v-bind:key="index" v-bind:label="index + 1">
            <p>{{ definition.definition }}</p>
            <p>{{ definition.parsedExamples }}</p>
        </el-descriptions-item>
    </el-descriptions>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { WiktionaryLanguageEntry } from "@/api/definition";

const props = defineProps<{
    entry: WiktionaryLanguageEntry
}>();

const title = computed( () => `${props.entry.language} - ${props.entry.partOfSpeech}` );
const definitions = computed( () => props.entry.definitions.filter( ({ definition }) => definition.trim() !== "" ) );
</script>
