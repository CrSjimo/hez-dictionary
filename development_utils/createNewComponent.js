const changeCase = require('change-case');
const fs = require('fs');
const path = require('path');
let componentName = process.argv[2];
if(!componentName){
    process.exit(1);
}
let component = changeCase.snakeCase(componentName);
let componentRootDir = path.join('./src/app/components',component);
['','actions','core','handlers','throwns'].forEach((v)=>{
    fs.mkdirSync(path.join(componentRootDir,v));
});
