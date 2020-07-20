import { connect } from "../database/connect";
import { Dictionary } from "../dictionary/Dictionary";
import { PartOfSpeech } from "../declaration/PartOfSpeech";
import { VerbCases } from "../declaration/VerbCases";

(async()=>{
    let connectionLayer = await connect({
        path:'./test.db'
    });
    let dict = new Dictionary(connectionLayer);
    console.log(await dict.queryItems('','testo'));
})();