import {LitElement,customElement,html,property} from 'lit-element';

@customElement('item-editor')
class ItemEditor extends LitElement{

    @property({type:String})
    path = '';

    static render(){
        
    }
}