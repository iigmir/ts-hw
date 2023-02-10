<template>
    <div class="examples">
        <p class="example" v-html="props.example.example"></p>
        <p v-if="props.example.translation" class="translation">
            <em v-html="props.example.translation" />
        </p>
    </div>
</template>

<script setup lang="ts">
import type { WiktionaryParsedExample } from "@/api/definition";

const props = defineProps<{
    example: WiktionaryParsedExample
}>();
</script>
