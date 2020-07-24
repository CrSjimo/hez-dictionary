import * as electron from 'electron';
import { storageState } from '../storage/localStorage'
import { openDictionaryAction } from '../components/file_processor/actions/openDictionaryAction';
import { mainWindow } from '../../main';
import { executeFromMain } from '../components/commands/core/executeFromMain';

export let menuTemplate:electron.MenuItemConstructorOptions[] = [{
    label:'&File',
    submenu:[{
        label:'Create new dictionary',
        accelerator: 'CommandOrControl+N',
    },{
        type: 'separator',
    },{
        label:'Open a dictionary',
        accelerator: 'CommandOrControl+O',
        click: ()=>{
            executeFromMain('jidyen:open_dictionary');
        }
    },{
        label:'Open Recent',
        submenu:[...(storageState.storage.recent instanceof Array ? storageState.storage.recent.map((path)=>{
            return {
                label:path,
                click: ()=>{
                    executeFromMain('jidyen:open_dictionary',path);
                }
            }
        }):[]),{
            type:'separator',
        },{
            label:'Clear all',
        }],
    },{
        type: 'separator',
    },{
        label: 'Save',
        accelerator: 'CommandOrControl+S',
    },{
        type: 'separator',
    },{
        label: 'Close dictionary',
        accelerator: 'CommandOrControl+W',
    },{
        label: 'Close Editor',
        accelerator: 'CommandOrControl+F4'
    },{
        type: 'separator',
    },{
        role:'quit',
    },{
        role:'toggleDevTools',
    }],
}];