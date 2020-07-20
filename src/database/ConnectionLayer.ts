import * as sqlite from 'sqlite';

export class ConnectionLayer{

    constructor(connection:sqlite.Database){
        this.connection = connection;
    }

    connection:sqlite.Database;

    _currentTable:string|null = null;

    get currentTable(){
            return this._currentTable;
    }

    set currentTable(v:string|null){
        this._currentTable = v;
    }

    async query(sql:string,values?:any[]):Promise<any>{
        return await this.connection.all(sql,values)
    }

    async terminate():Promise<void>{
        await this.connection.close()
    }
}