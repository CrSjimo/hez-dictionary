import * as electron from 'electron';
let mainWindow;

electron.app.whenReady().then(()=>{
    mainWindow = new electron.BrowserWindow();
    mainWindow.loadFile('statics/index.html');
});

electron.app.on('window-all-closed',()=>{
    electron.app.quit();
});