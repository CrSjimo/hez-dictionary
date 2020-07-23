import { openDictionary } from "../core/openDictionary";
import * as electron from "electron";
import { registerCommand } from "../../commands/core/register";

export async function openDictionaryAction(){
    let fileName =  electron.dialog.showOpenDialogSync(electron.remote.getCurrentWindow(),{
        filters:[{
            name:'Dictionary',
            extensions:['db'],
        }],
        properties:['openFile'],
    });
    if(fileName){
        openDictionary(fileName[0]);
    }
}

registerCommand('jidyen:open_dictionary',openDictionaryAction);