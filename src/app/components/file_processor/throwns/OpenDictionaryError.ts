export class OpenDictionaryError extends Error{
    constructor(fileName:string){
        super(`Failed to open '${fileName}'.`);
        this.fileName = fileName;
    }
    fileName:string;
}