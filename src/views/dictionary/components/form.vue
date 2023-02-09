<template>
    <el-form v-model="form" label-width="120px" class="the-form" v-on:submit.prevent="emit">
        <el-form-item label="Term">
            <el-input name="term" v-model="form.term" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" native-type="submit">Search</el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts">
export default {
    data: () => ({
        form: {
            term: ""
        },
    }),
    methods: {
        emit(event: any) {
            const term = (new FormData(event.target)).get("term");
            this.$emit("submit", { term });
        }
    }
};
</script>

<style scoped>
.the-form > * {
    max-width: 680px;
}
</style>
