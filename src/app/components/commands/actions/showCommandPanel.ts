export function showCommandPanel():Promise<string>{
    return new Promise((resolve,reject)=>{
        try{
            let dialog = document.createElement('mwc-dialog');
            dialog.heading = 'Command Panel';//TODO i18n
            let commandInput = document.createElement('mwc-textfield');
            commandInput.className = 'full-width';
            commandInput.label = 'Command';//TODO i18n;
            commandInput.setAttribute('dialoginitialfocus','');
            let OkButton = document.createElement('mwc-button');
            OkButton.textContent = 'OK';//TODO i18n;
            OkButton.slot = 'primaryAction';
            OkButton.setAttribute('dialogaction','close');
            dialog.appendChild(commandInput);
            dialog.appendChild(OkButton);
            document.body.appendChild(dialog);
            dialog.show();
            dialog.onclose = ()=>{
                dialog.remove();
                resolve(commandInput.value);
            }
        }catch(e){
            reject(e);
        }
    });
}