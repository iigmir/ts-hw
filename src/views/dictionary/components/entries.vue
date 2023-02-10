<template>
    <el-descriptions class="entry" v-bind:title="title" v-bind:column="1" border>
        <el-descriptions-item v-for="(definition, index) in definitions" v-bind:key="index" v-bind:label="index + 1" label-class-name="label-class">
            <entry-definition v-bind:definition="definition.definition" />
            <entry-examples v-for="(example, eid) in definition.parsedExamples" v-bind:key="eid" v-bind:example="example" />
        </el-descriptions-item>
    </el-descriptions>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { WiktionaryLanguageEntry } from "@/api/definition";
// Components
import EntryExamples from "./entry-examples.vue";
import EntryDefinition from "./entry-definition.vue";

const props = defineProps<{
    entry: WiktionaryLanguageEntry
}>();

const title = computed( () => `${props.entry.language} - ${props.entry.partOfSpeech}` );
const definitions = computed( () => props.entry.definitions.filter( ({ definition }) => definition.trim() !== "" ) );
</script>

<style scoped>
.entry :deep( .label-class ) { width: 100px; }
</style>
