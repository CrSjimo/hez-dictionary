import * as electron from "electron";
import { menuTemplate } from "./menuTemplate";

export function registerMenu(){
    electron.Menu.setApplicationMenu(electron.Menu.buildFromTemplate(menuTemplate));
}