import { connect } from "../../../../database/connect";
import { Dictionary } from "../../../../dictionary/Dictionary";
import { currentFile } from "./currentFile";
import { OpenDictionaryError } from "../throwns/OpenDictionaryError";
import { dictionaryDidOpenedHandler } from "../handlers/dictionaryDidOpenedHandler";

export async function openDictionary(fileName:string){
    try{
        let dictionary = new Dictionary(await connect({
            path: fileName,
        }));
        let dictConfig = await dictionary.getConfig();
        [
            currentFile.fileName,
            currentFile.dictionary,
            currentFile.dictConfig,
        ] = [
            fileName,
            dictionary,
            dictConfig,
        ];
        dictionaryDidOpenedHandler();
    }catch(e){
        throw new OpenDictionaryError(fileName);
    }
}