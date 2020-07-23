import * as electron from 'electron';
import { localStorage } from '../../storage/localStorage'
import { openDictionaryAction } from '../components/file_processor/actions/openDictionary';

export let menuTemplate:electron.MenuItemConstructorOptions[] = [{
    label:'File',
    submenu:[{
        label:'Create new dictionary',
        accelerator: 'CommandOrControl+N',
    },{
        label:'Open a dictionary',
        accelerator: 'CommandOrControl+O',
        click: ()=>{
            openDictionaryAction();
        }
    },{
        label:'Open Recent',
        // submenu:[...(localStorage.storage.recent instanceof Array ? localStorage.storage.recent.map((path)=>{
        //     return {
        //         label:path,
        //     }
        // }):[]),{
        //     type:'separator',
        // },{
        //     label:'Clear all',
        // }],
    }],
}];