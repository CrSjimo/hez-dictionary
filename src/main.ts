import * as electron from 'electron';
import { registerMenu } from './app/application_menu/registerMenu';
export let mainWindow:electron.BrowserWindow;
import './app/components';

function initialization(){
    registerMenu();
}

electron.app.whenReady().then(()=>{
    mainWindow = new electron.BrowserWindow({
        webPreferences:{
            nodeIntegration:true,
        }
    });
    mainWindow.loadFile('statics/index.html');
    initialization();
});

electron.app.on('window-all-closed',()=>{
    electron.app.quit();
});
