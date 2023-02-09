declare module TheNamespace {
    export interface ParsedExample {
        example: string;
    }
    export interface Definition {
        definition: string;
        parsedExamples: ParsedExample[];
        examples: string[];
    }
    export interface En {
        partOfSpeech: string;
        language: string;
        definitions: Definition[];
    }
    export interface RootObject {
        en: En[];
    }

}

declare module WiktionaryUsage {
    export interface ParsedExample {
        example: string;
    }
    export interface RegularExample {
        example: string;
    }
    export interface RootObject {
        definition: string;
        parsedExamples: ParsedExample[];
        examples: RegularExample[];
    }
}

// http://json2ts.com/
declare module WiktionaryResponse {
    export interface RootObject {
        /**
         * @see <https://typescript.tv/errors/#TS2709>
         */
        [language: string]: WiktionaryUsage[]
    }
}

/**
 * @see <https://en.wiktionary.org/api/rest_v1/#/Page%20content/get_page_definition__term_>
 */
export const GetTerm = async (term: string) => {
    const url = `https://en.wiktionary.org/api/rest_v1/page/definition/${term}`;
    const r = await fetch(url);
    return await r.json();
};

export type { WiktionaryUsage, WiktionaryResponse, TheNamespace };
