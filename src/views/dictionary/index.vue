<template>
    <div class="ajax">
        <term-form v-on:submit="submitted" />
        <!-- HelloMoto -->
        <el-row>
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


const ajax = (term: string) => {
    const insert_entiries = (response: WiktionaryResponse) => {
        const languages = Object.values(response);
        entries.value = languages;
    };
    GetTerm( term ).then( insert_entiries );
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
