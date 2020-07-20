import { PartOfSpeech } from "./PartOfSpeech";

export interface Item{
    word: string;
    pronunciation: string;
    part_of_Speech: string;
    glosses:[{
        languageId:string;
        gloss:string;
    }];
    translations: [{
        languageId:string;
        translation:string;
    }];
    examples: [{
        languageId:string;
        origin:string;
        translation:string;
    }];
    note: string;
    categories: string[];
    related_to: number[];
}