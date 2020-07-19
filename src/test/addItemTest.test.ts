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
    await dict.initialization();
    await dict.addItem({
        word:'测验',
        pronunciation:'testo',
        part_of_Speech:PartOfSpeech.verb,
        meaning:'品质、性能、表现等兮考察来措施兮付。',
        translation:'test',
        verb_cases:VerbCases.ÏA,
        example:'吾持此pиogo测验。',
        note:'',
    });
})()