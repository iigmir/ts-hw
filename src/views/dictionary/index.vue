<template>
    <div class="ajax">
        <term-form v-on:submit="submitted" />
        <el-row class="gap">
            <el-col v-bind:span="24" v-loading="requesting">
                <div v-if="entry_loaded" class="entries">
                    <div v-for="(languages, lid) in entries" v-bind:key="lid" class="languages">
                        <wt-entries v-for="entry in languages" v-bind:key="entry.partOfSpeech" v-bind:entry="entry" />
                    </div>
                </div>
                <el-empty v-else-if="entries.length < 1" description="No entry" />
                <div v-else-if="error">
                    <el-result
                        icon="warning"
                        title="Request failed"
                        sub-title="Please follow the instructions"
                    />
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { GetTerm } from "@/api/definition";
// Components
import TermForm from "./components/form.vue";
import WtEntries from "./components/entries.vue";
// Type
import type { WiktionaryResponse, WiktionaryLanguageEntry } from "@/api/definition";

const entries_source = ref<WiktionaryResponse>({});
const entries = computed<WiktionaryLanguageEntry[][]>( () => Object.values( entries_source.value ) );
const insert_entiries_source = (response: WiktionaryResponse) => {
    entries_source.value = response;
};

const error = ref(false);
const show_error = () => { error.value = true; };

const requesting = ref(false);
const start_loading = () => { requesting.value = true; };
const finish_loading = () => { requesting.value = false; };

const entry_loaded = computed( () => {
    return !error.value && entries.value.length > 0;
});

const ajax = (term: string) => {
    start_loading();
    GetTerm( term )
        .then( insert_entiries_source )
        .catch( show_error )
        .finally( finish_loading )
    ;
};

/**
 * @see <https://stackoverflow.com/a/68033983>
 * @param params
 */
const submitted = ({ term }: { term: string }) => {
    /**
     * FIXME: IDK but why the event triggered TWICE?
     */
    if( term != undefined ) {
        ajax(term);
    }
};
</script>

<style scoped>
.gap { margin-left: 1rem; }
</style>
