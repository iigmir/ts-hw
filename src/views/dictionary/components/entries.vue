<template>
    <el-descriptions class="entry" v-bind:title="title" v-bind:column="1" border>
        <el-descriptions-item v-for="(definition, index) in definitions" v-bind:key="index" v-bind:label="index + 1">
            <p class="definition">{{ definition.definition }}</p>
            <entry-examples v-for="(example, eid) in definition.parsedExamples" v-bind:key="eid" v-bind:example="example" />
        </el-descriptions-item>
    </el-descriptions>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { WiktionaryLanguageEntry } from "@/api/definition";
import EntryExamples from "./entry-examples.vue";

const props = defineProps<{
    entry: WiktionaryLanguageEntry
}>();

const title = computed( () => `${props.entry.language} - ${props.entry.partOfSpeech}` );
const definitions = computed( () => props.entry.definitions.filter( ({ definition }) => definition.trim() !== "" ) );
</script>
