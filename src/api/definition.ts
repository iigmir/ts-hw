interface WiktionaryParsedExample {
    example: string;
    translation: string;
}

interface Definition {
    definition: string;
    parsedExamples: WiktionaryParsedExample[];
    examples: string[];
}

interface WiktionaryLanguageEntry {
    partOfSpeech: string;
    language: string;
    definitions: Definition[];
}

interface WiktionaryResponse {
    [language: string]: WiktionaryLanguageEntry[]
}

/**
 * @see <https://en.wiktionary.org/api/rest_v1/#/Page%20content/get_page_definition__term_>, <https://stackoverflow.com/a/65699870>
 */
export const GetTerm = async (term: string): Promise<WiktionaryResponse> => {
    // eslint-disable-next-line no-unused-vars
    const main = (resolve: (value: WiktionaryResponse | PromiseLike<WiktionaryResponse>) => void, reject: (reason?: any) => void): void => {
        const api = `https://en.wiktionary.org/api/rest_v1/page/definition/${term}`;
        const do_response_action = (response: Response): void => {
            const json = response.json();
            if (response.ok) {
                resolve(json);
            } else {
                reject(json);
            }
        };
        fetch( api ).then( do_response_action );
    };
    return new Promise( main );
};

export type { WiktionaryParsedExample, Definition, WiktionaryLanguageEntry, WiktionaryResponse };
