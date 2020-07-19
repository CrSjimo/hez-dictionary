import * as mysql from 'mysql';
import { ConnectionLayer } from './ConnectionLayer';

export function connect(options:mysql.ConnectionConfig):Promise<ConnectionLayer>{
    let connection = mysql.createConnection(options);
    return new Promise((resolve,reject)=>{
        connection.connect((err)=>{
            if(err){
                reject(err);
            }else{
                resolve(new ConnectionLayer(connection));
            }
        });
    });
}