import { ConnectionLayer } from "../database/ConnectionLayer";
import { Item } from "../declaration/Item";
import { PartOfSpeech } from "../declaration/PartOfSpeech";

export class Dictionary{

    constructor(connectionLayer:ConnectionLayer){
        this.connectionLayer = connectionLayer;
    }
    
    connectionLayer:ConnectionLayer;

    dictionaryName:string|null = null;

    checkOpenedDictName(){
        if(!this.dictionaryName){
            throw new Error('No dictionary opened.');
        }
    }

    async initialization(){
        this.checkOpenedDictName();
        let query = `create table ${this.dictionaryName}(
            id int primary key auto_increment,
            word varchar(64),
            pronunciation varchar(64),
            part_of_speech enum('noun','verb','adjective','adverb','pronoun','preposition','conjunction','numeral','measure','auxiliary','interjection','imitation'),
            meaning varchar(1024),
            translation varchar(1024),
            example varchar(1024),
            verb_cases tinyint,
            note varchar(1024)
        )`;
        await this.connectionLayer.query(query);
    }

    async addItem(item:Item){
        this.checkOpenedDictName();
        let result = await this.connectionLayer.query(
            `insert into ${this.dictionaryName} (word,pronunciation,part_of_speech,meaning,translation,example,verb_cases,note) values(?,?,?,?,?,?,?,?)`,
            [
                item.word,
                item.pronunciation,
                PartOfSpeech[item.part_of_Speech],
                item.meaning,
                item.translation,
                item.example,
                item.verb_cases,
                item.note,
            ]
        );
        //console.log(result);
        /*
        {
            fieldCount: 0,
            affectedRows: 1,
            insertId: 0,
            serverStatus: 2,
            warningCount: 0,
            message: '',
            protocol41: true,
            changedRows: 0
        }
        */
    }

    async queryItem(word?:string,pronunciation?:string){
        this.checkOpenedDictName();
        let clauseArray:string[] = [];
        let valuesArray:string[] = [];
        if(word){
            clauseArray.push(`word = ? `);
            valuesArray.push(word);
        }
        if(pronunciation){
            clauseArray.push(`pronunciation = ? `);
            valuesArray.push(pronunciation);
        }
        let clause = clauseArray.join('and');
        let result:{id:number}[] = await this.connectionLayer.query(
            `select id from ${this.dictionaryName} where ${clause}`,
            valuesArray
        );
        return result.map((v)=>{
            return v.id;
        });
    }

    async updateItem(id:number,item:Partial<Item>){
        this.checkOpenedDictName();
        let setTargetArray:string[] = [];
        let valuesArray:string[] = [];
        for(let key in item){
            setTargetArray.push(`${key} = ?`);
            valuesArray.push(item[key as keyof Item] as string);
        }
        let result = await this.connectionLayer.query(
            `update ${this.dictionaryName} set ${setTargetArray.join(',')} where id = ?`,
            [...valuesArray,id],
        );
    }

    async getItems(idList:number[]){
        this.checkOpenedDictName();
        let result:Item[] = await this.connectionLayer.query(
            `select * from ${this.dictionaryName} where id in (${idList.join(',')})`
        );
        return result;
    }
}