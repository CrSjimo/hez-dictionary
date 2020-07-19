import * as mysql from 'mysql';

export class ConnectionLayer{

    constructor(connection:mysql.Connection){
        this.connection = connection;
    }

    connection:mysql.Connection;

    _currentTable:string|null = null;

    get currentTable(){
            return this._currentTable;
    }

    set currentTable(v:string|null){
        this._currentTable = v;
    }

    query(sql:string,values?:any[]):Promise<any>{
        return new Promise((resolve,reject)=>{
            this.connection.query(sql,values,(err,results)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(results);
                }
            });
        });
    }

    terminate():Promise<void>{
        return new Promise((resolve,reject)=>{
            this.connection.end((err)=>{
                if(err){
                    reject(err);
                }else{
                    resolve();
                }
            });
        });
    }
}