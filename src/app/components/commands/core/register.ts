import { commandMap } from "./commandMap";

export function registerCommand(commandName:string,commandHandler:((...args:any[])=>any)){
    commandMap.set(commandName,commandHandler);
}