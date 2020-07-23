export class CommandNotFoundError extends Error{
    constructor(commandName:string){
        super(`Command '${commandName}' not found.`);
        this.commandName = commandName;
    }
    commandName:string;
}