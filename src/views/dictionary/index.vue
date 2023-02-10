<template>
    <div class="ajax">
        <term-form v-on:submit="submitted" />
        <el-row class="gap">
            <el-col :span="24">
                {{ entries }}
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TermForm from "./components/form.vue";
import { GetTerm } from "@/api/definition";
// Type
import type { WiktionaryResponse, WiktionaryLanguageEntry } from "@/api/definition";

const entries = ref<WiktionaryLanguageEntry[]>([]);
// States
const error = ref(false);

const requesting = ref(false);
const start_loading = () => { requesting.value = true; };
const finish_loading = () => { requesting.value = false; };

const ajax = (term: string) => {
    const insert_entiries = (response: WiktionaryResponse) => {
        const languages = Object.values(response);
        entries.value = languages;
    };
    start_loading();
    GetTerm( term ).then( insert_entiries ).finally( finish_loading );
};

/**
 * @see <https://stackoverflow.com/a/68033983>
 * @param params
 */
const submitted = ({ term }: { term: string }) => {
    /**
     * FIXME: IDK but why it triggered TWICE?
     */
    if( term != undefined ) {
        ajax(term);
    }
};
</script>

<style scoped>
.gap { margin-left: 1rem; }
</style>
