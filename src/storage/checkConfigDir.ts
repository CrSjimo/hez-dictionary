import * as os from 'os';
import * as fs from 'fs';
import * as path from 'path';

export function checkConfigDir(){
    const CONFIG_DIR = path.join(os.homedir(),'.jidyen');
    if(!fs.existsSync(CONFIG_DIR)){
        fs.mkdirSync(CONFIG_DIR);
    }
}