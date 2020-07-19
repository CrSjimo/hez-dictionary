import { UserInterface } from "./UserInterface";
import { Dictionary } from "../dictionary/Dictionary";
import { DictionaryInterfaces } from "../declaration/DictionaryInterfaces";
import { CommandRequest, CommandResponse } from "../declaration/Command";

export class InteractionHost{

    constructor(handler:UserInterface){
        this.handler = handler;
    }

    handler:UserInterface;

    async execute(request:CommandRequest):Promise<CommandResponse>{
        try{
            return{
                ret:await(this.handler[request.name]as any)(request.arg),
            }
        }catch(e){
            return{
                errMessage:e.toString(),
                ret:null,
            }
        }
    }
}