import { commandMap } from "./commandMap";
import { CommandNotFoundError } from "../throwns/CommandNotFoundError";

export function execute(commandName:string,...args:any[]){
    let handler = commandMap.get(commandName);
    if(!handler){
        throw new CommandNotFoundError(commandName);
    }
    handler(...args);
}