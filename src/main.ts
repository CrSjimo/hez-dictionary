import * as electron from 'electron';
import { initialization } from './app/initialization';
export let mainWindow:electron.BrowserWindow;

electron.app.whenReady().then(()=>{
    mainWindow = new electron.BrowserWindow();
    mainWindow.loadFile('statics/index.html');
    mainWindow.setMenu(null);
    //initialization();
});

electron.app.on('window-all-closed',()=>{
    electron.app.quit();
});
