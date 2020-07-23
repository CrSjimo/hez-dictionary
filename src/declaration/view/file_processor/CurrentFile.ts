import { Dictionary } from "../../../dictionary/Dictionary";
import { DictionaryConfig } from "../../dictionary/DictionaryConfig";

export interface CurrentFile{
    fileName:string|null;
    modified:boolean;
    dictionary:Dictionary|null;
    dictConfig:DictionaryConfig|null;
}