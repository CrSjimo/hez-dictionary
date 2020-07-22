import { connect } from "../database/connect";
import { Dictionary } from "../dictionary/Dictionary";

(async()=>{
    let connectionLayer = await connect({
        path:'./test.db'
    });
    let dict = new Dictionary(connectionLayer);
    await dict.initialization({
        language:{
            languageName:'hez',
            languageId:'hez',
        },
        glossingLanguages:[{
            languageName:'English',
            languageId:'en',
        }],
        partOfSpeechTypes:[
            'noun', //名词
            'verb', //动词
            'adjective', //饰词
            'adverb', //副词
            'pronoun', //代词
            'preposition', //介动词
            'conjunction', //介连词
            'numeral', //数词
            'measure', //量词
            'auxiliary', //助词
            'interjection', //叹词
            'imitation', //拟词
            'affix', //接附词
        ]
    });
    await dict.addItem({
        word:'测验',
        pronunciation:'testo',
        part_of_Speech:'verb',
        glosses:[{
            languageId:'hez',
            gloss:'品质、性能、表现等兮考察来措施兮付。',
        }],
        translations:[{
            languageId:'en',
            translation:'test'
        }],
        examples:[{
            languageId:'en',
            origin:'吾持此pиogo测验。',
            translation:'I test the program.',
        }],
        note:'',
        categories:['ÏA-verb'],
        related_to:[],
    });
})()