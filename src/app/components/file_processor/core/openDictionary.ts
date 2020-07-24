import { connect } from "../../../../database/connect";
import { Dictionary } from "../../../../dictionary/Dictionary";
import { currentFile } from "./currentFile";
import { OpenDictionaryError } from "../throwns/OpenDictionaryError";
import { dictionaryDidOpenedHandler } from "../handlers/dictionaryDidOpenedHandler";
import { storageState } from "../../../storage/localStorage";

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
        storageState.storage.recent instanceof Array && fileName !in storageState.storage.recent ? storageState.storage.recent.push(fileName) : storageState.storage.recent = [fileName];
        storageState.save();
        dictionaryDidOpenedHandler();
    }catch(e){
        throw new OpenDictionaryError(fileName);
    }
}