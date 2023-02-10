<template>
    <p class="definition" v-html="definition"></p>
</template>

<script lang="ts">
export default {
    props: {
        definition: {
            type: String,
            default: "",
        },
    },
};
</script>
