import { ConnectionLayer } from "../database/ConnectionLayer";
import { Item } from "../declaration/dictionary/Item";
import { DictionaryConfig } from "../declaration/dictionary/DictionaryConfig";

export class Dictionary{

    constructor(connectionLayer:ConnectionLayer){
        this.connectionLayer = connectionLayer;
    }
    
    connectionLayer:ConnectionLayer;

    static DICTIONARY_NAME:string = 'dict';

    static CONFIG_NAME:string = 'config';

    async initialization(config:DictionaryConfig){
        let query = `create table ${Dictionary.DICTIONARY_NAME}(
            id integer primary key autoincrement,
            word varchar(64),
            pronunciation varchar(64),
            part_of_speech varchar(64),
            glosses varchar(1024),
            translations varchar(1024),
            examples varchar(1024),
            note varchar(1024),
            categories varchar(1024),
            related_to varchar(1024)
        )`;
        await this.connectionLayer.query(query);
        query = `create table ${Dictionary.CONFIG_NAME}(
            lang_name varchar(64),
            lang_id varchar(64),
            glossing_lang varchar(1024),
            part_of_speech_types varchar(1024)
        )`
        await this.connectionLayer.query(query);
        query = `insert into ${Dictionary.CONFIG_NAME} values(?,?,?,?)`
        await this.connectionLayer.query(query,[
            config.language.languageName,
            config.language.languageId,
            JSON.stringify(config.glossingLanguages),
            JSON.stringify(config.partOfSpeechTypes),
        ]);
    }

    async addItem(item:Item){
        let result = await this.connectionLayer.query(
            `insert into ${Dictionary.DICTIONARY_NAME} (word,pronunciation,part_of_speech,glosses,translations,examples,note,categories,related_to) values(?,?,?,?,?,?,?,?,?)`,
            [
                item.word,
                item.pronunciation,
                item.part_of_Speech,
                JSON.stringify(item.glosses),
                JSON.stringify(item.translations),
                JSON.stringify(item.examples),
                item.note,
                JSON.stringify(item.categories),
                JSON.stringify(item.related_to),
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

    async queryItems(word?:string,pronunciation?:string){
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
            `select id from ${Dictionary.DICTIONARY_NAME} where ${clause}`,
            valuesArray
        );
        return result.map((v)=>{
            return v.id;
        });
    }

    async updateItem(id:number,item:Partial<Item>){
        let setTargetArray:string[] = [];
        let valuesArray:string[] = [];
        for(let key in item){
            setTargetArray.push(`${key} = ?`);
            valuesArray.push(item[key as keyof Item] as string);
        }
        let result = await this.connectionLayer.query(
            `update ${Dictionary.DICTIONARY_NAME} set ${setTargetArray.join(',')} where id = ?`,
            [...valuesArray,id],
        );
    }

    async getItems(idList:number[]){
        let result:Item[] = await this.connectionLayer.query(
            `select * from ${Dictionary.DICTIONARY_NAME} where id in (${idList.join(',')})`
        );
        return result;
    }

    async deleteItems(idList:number[]){
        let result = await this.connectionLayer.query(
            `delete from ${Dictionary.DICTIONARY_NAME} where id in (${idList.join(',')})`
        );
        return result;
    }
}