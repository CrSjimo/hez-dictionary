import { Dictionary } from "../dictionary/Dictionary";
import { Item } from "../declaration/Item";


export class UserInterface{

    constructor(dict:Dictionary){
        this.dict = dict;
    }

    dict:Dictionary;

    async setDictName(arg:string){
        this.dict.dictionaryName = arg;
    }

    async initialization(arg:void){
        await this.dict.initialization();
    }

    async addItem(arg:Item){
        await this.dict.addItem(arg);
    }

    async updateItem(arg:{
        id:number,
        item:Partial<Item>
    }){
        await this.dict.updateItem(arg.id,arg.item);
    }

    async deleteItems(arg:number[]){
        await this.dict.deleteItems(arg);
    }

    async queryItems(arg:{
        word?:string,
        pronunciation?:string,
    }){
        return await this.dict.queryItems(arg.word,arg.pronunciation)
    }

    async getItems(arg:number[]){
        return await this.dict.getItems(arg);
    }
}