import { Item } from "./Item";

export interface DictionaryInterfaces{

    setDictName:{
        arg:string;
        ret:void;
    }

    initialization:{
        arg:void;
        ret:void;
    }

    addItem:{
        arg:Item;
        ret:void;
    }

    updateItem:{
        arg:{
            id:number,
            item:Partial<Item>
        }
        ret:void;
    }

    deleteItems:{
        arg:number[];
        ret:void;
    }

    queryItems:{
        arg:{
            word?:string,
            pronunciation?:string,
        }
        ret:number[];
    }

    getItems:{
        arg:number[];
        ret:Item[];
    }
}