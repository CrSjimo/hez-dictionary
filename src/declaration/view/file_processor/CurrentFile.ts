import { Dictionary } from "../../../dictionary/Dictionary";

export interface CurrentFile{
    fileName:string|null;
    modified:boolean;
    dictionary:Dictionary|null;
}