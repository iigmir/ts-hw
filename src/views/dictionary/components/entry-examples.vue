<template>
    <p class="example">
        {{ props.example.example }}
    </p>
</template>

<script setup lang="ts">
// import { computed } from "vue";
import type { WiktionaryParsedExample } from "@/api/definition";

const props = defineProps<{
    example: WiktionaryParsedExample
}>();
</script>
