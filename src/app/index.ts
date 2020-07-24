import '../../statics/css/layout.css';
import '@material/mwc-button';
import '@material/mwc-list';
import '@material/mwc-dialog';
import '@material/mwc-textfield';
import '@material/mwc-icon-button';
import '@material/mwc-select';
import './components';
import { initialization } from './initialization';

document.onreadystatechange = ()=>{
    if(document.readyState == 'complete'){
        initialization();
    }
}