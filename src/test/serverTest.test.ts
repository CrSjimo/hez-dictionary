import { connect } from "../database/connect";
import { Dictionary } from "../dictionary/Dictionary";
import { PartOfSpeech } from "../declaration/PartOfSpeech";
import { VerbCases } from "../declaration/VerbCases";
import { UserInterface } from "../user_interface/UserInterface";
import { InteractionHost } from "../user_interface/InteractionHost";
import { createServer } from "../http_server/createServer";
import { registerListener } from "../http_server/registerListener";

(async()=>{
    let connectionLayer = await connect({
        database: 'dictionary',
        user: 'root',
        password: '123456',
    });
    let dict = new Dictionary(connectionLayer);
    let ui = new UserInterface(dict);
    let host = new InteractionHost(ui);
    let server = await createServer(16423);
    registerListener(server,host);
})();