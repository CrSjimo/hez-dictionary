import { ipcStartListening } from "./ipc/ipcStartLisening";

export function initialization(){
    ipcStartListening();
}