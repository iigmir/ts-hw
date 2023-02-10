interface WiktionaryUsage {
    definition: string;
    parsedExamples: string[];
    examples: string[];
}

interface WiktionaryLanguageEntry {
    partOfSpeech: string;
    language: string;
    definitions: WiktionaryUsage[];
}

interface WiktionaryResponse {
    [language: string]: WiktionaryLanguageEntry
}

/**
 * @see <https://en.wiktionary.org/api/rest_v1/#/Page%20content/get_page_definition__term_>
 */
export const GetTerm = async (term: string) => {
    const url = `https://en.wiktionary.org/api/rest_v1/page/definition/${term}`;
    const r = await fetch(url);
    return await r.json();
};

export type { WiktionaryUsage, WiktionaryLanguageEntry, WiktionaryResponse };
