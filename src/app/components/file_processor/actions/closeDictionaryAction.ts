import { closeDictionary } from "../core/closeDictionary";
import { registerCommand } from "../../commands/core/register";

export async function closeDictionaryAction(){
    closeDictionary();
}
registerCommand('jidyen:close_dictionary',closeDictionary);