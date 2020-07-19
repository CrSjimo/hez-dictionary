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
    await dict.updateItem((await dict.queryItem('','testo'))[0],{note:'test'});
})();