import { LanguageDeclaration } from "./LanguageDeclaration";

export interface DictionaryConfig{
    language:LanguageDeclaration;
    glossingLanguages:LanguageDeclaration[];
    partOfSpeechTypes:string[];
}