import { connect } from "../database/connect";
import { Dictionary } from "../dictionary/Dictionary";
import { PartOfSpeech } from "../declaration/PartOfSpeech";
import { VerbCases } from "../declaration/VerbCases";

(async()=>{
    let connectionLayer = await connect({
        database: 'dictionary',
        user: 'root',
        password: '123456',
    });
    let dict = new Dictionary(connectionLayer);
    dict.dictionaryName = 'test';
    console.log(await dict.getItems(await dict.queryItem('','testo')));
})();