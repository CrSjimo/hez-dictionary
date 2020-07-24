import { mainWindow } from "../../../../main";

export function executeFromMain(commandName:string,...args:any[]){
    mainWindow.webContents.send('command',commandName,...args);
}