import { connect } from "../database/connect";
import { Dictionary } from "../dictionary/Dictionary";

(async()=>{
    let connectionLayer = await connect({
        path:'./test.db'
    });
    let dict = new Dictionary(connectionLayer);
    await dict.updateItem((await dict.queryItems('','testo'))[0],{note:'test'});
})();