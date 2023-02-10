<template>
    <p class="definition" v-html="result"></p>
</template>

<script lang="ts">
export default {
    props: {
        definition: {
            type: String,
            default: "",
        },
    },
    computed: {
        result() {
            return this.definition;
        }
    }
};
</script>
