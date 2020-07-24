import * as os from 'os';
import * as fs from 'fs';
import * as path from 'path';
import { checkConfigDir } from './checkConfigDir';

export const storageState = new class StorageState{

    static STORAGE_PATH = path.join(os.homedir(),'.jidyen/storage.json');

    constructor(){
        checkConfigDir();
        if(fs.existsSync(StorageState.STORAGE_PATH)){
            try{
                this.storage = JSON.parse(fs.readFileSync(StorageState.STORAGE_PATH).toString());
            }catch(e){

            }
        }
    }

    storage:{[p:string]:any} = {};

    save():Promise<void>{
        return new Promise((resolve,reject)=>{
            fs.writeFile(StorageState.STORAGE_PATH,JSON.stringify(this.storage),(err)=>{
                if(err){
                    reject(err);
                }
                resolve();
            });
        })
    }
}