import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';
import { ConnectionLayer } from './ConnectionLayer';
import { ConnectionOptions } from '../declaration/database/ConnectionOptions';

export async function connect(options:ConnectionOptions):Promise<ConnectionLayer>{
    let connection = await sqlite.open({
        filename:options.path,
        driver:sqlite3.Database,
    })
    return new ConnectionLayer(connection);
}