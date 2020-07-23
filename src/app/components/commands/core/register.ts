import { commandMap } from "./commandMap";

export function registerCommand(commandName:string,commandHandler:(()=>any)){
    commandMap.set(commandName,commandHandler);
}