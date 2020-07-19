import { DictionaryInterfaces } from "./DictionaryInterfaces";
import { Dictionary } from "../dictionary/Dictionary";

export interface CommandRequest{
    name:keyof DictionaryInterfaces;
    arg:any;
}

export interface CommandResponse{
    errMessage?:string;
    ret:any;
}