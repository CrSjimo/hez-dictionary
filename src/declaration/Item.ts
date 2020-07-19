import { PartOfSpeech } from "./PartOfSpeech";

export interface Item{
    word: string;
    pronunciation: string;
    part_of_Speech: PartOfSpeech;
    meaning: string;
    translation: string;
    example: string;
    verb_cases: number;
    note: string;
}