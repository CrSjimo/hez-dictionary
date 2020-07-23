import * as os from 'os';
import * as fs from 'fs';
import * as path from 'path';
import { checkConfigDir } from './checkConfigDir';

export const localStorage = new class LocalStorage{

    static STORAGE_PATH = path.join(os.homedir(),'.jidyen/storage.json');

    constructor(){
        checkConfigDir();
        if(fs.existsSync(LocalStorage.STORAGE_PATH)){
            try{
                this.storage = JSON.parse(fs.readFileSync(LocalStorage.STORAGE_PATH).toString());
            }catch(e){

            }
        }
    }

    storage:{[p:string]:any} = {};

    save():Promise<void>{
        return new Promise((resolve,reject)=>{
            fs.writeFile(LocalStorage.STORAGE_PATH,JSON.stringify(this.storage),(err)=>{
                if(err){
                    reject(err);
                }
                resolve();
            });
        })
    }
}