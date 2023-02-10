<template>
    <div class="examples">
        <p class="example" v-html="props.example.example"></p>
        <p v-if="props.example.translation" class="translation" v-html="props.example.translation"></p>
    </div>
</template>

<script setup lang="ts">
import type { WiktionaryParsedExample } from "@/api/definition";

const props = defineProps<{
    example: WiktionaryParsedExample
}>();
</script>

<style scoped>
.examples { margin-left: 1rem; }
.examples .translation { margin-left: 2rem; }
</style>
