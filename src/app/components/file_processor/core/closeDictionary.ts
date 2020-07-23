import { currentFile } from "./currentFile";
import { confirmSavingHandler } from "../handlers/confirmSavingHandler";

export function closeDictionary(){
    if(!currentFile.fileName){
        return;
    }
    if(currentFile.modified){
        if(!confirmSavingHandler()){
            return;
        }
    }
    currentFile.fileName = null;
    currentFile.modified = false;
    currentFile.dictionary = null;
    currentFile.dictConfig = null;
}