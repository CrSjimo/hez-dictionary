import { openDictionary } from "../core/openDictionary";
import * as electron from "electron";
import { registerCommand } from "../../commands/core/register";

export async function openDictionaryAction(path?:string){
    console.log(path);
    if(path){
        openDictionary(path)
    }else{
        let fileName = electron.remote.dialog.showOpenDialogSync(electron.remote.getCurrentWindow(),{
            filters:[{
                name:'Dictionary',
                extensions:['db'],
            }],
            properties:['openFile'],
        });
        if(fileName && fileName[0]){
            openDictionary(fileName[0]);
        }
    }
}

registerCommand('jidyen:open_dictionary',openDictionaryAction);