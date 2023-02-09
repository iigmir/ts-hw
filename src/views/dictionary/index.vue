<template>
    <div class="ajax">
        <term-form v-on:submit="submitted" />
        <!-- HelloMoto -->
        <el-row>
            <el-col :span="24">
                <div class="grid-content ep-bg-purple-dark" />
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TermForm from "./components/form.vue";
import { GetTerm } from "@/api/definition";
// Type
import type { WiktionaryResponse, WiktionaryUsage } from "@/api/definition";
// import type { Ref } from "vue";

const entries = ref<typeof WiktionaryUsage[]>([]);

const ajax = (term: string) => {
    GetTerm( term ).then( (response: typeof WiktionaryResponse) => {
        const languages = Object.values( response );
        entries.value = languages;
    });
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
