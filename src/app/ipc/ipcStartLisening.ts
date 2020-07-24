import { ipcRenderer } from "electron";
import { execute } from "../components/commands/core/execute";

export function ipcStartListening(){
    ipcRenderer.on('command',(ev,command,...args)=>{
        execute(command,...args);
    });
}