import * as hapi from '@hapi/hapi';

export async function registerListener(server:hapi.Server){
    server.route({
        path:'/',
        method:'*',
        handler:(request,h)=>{
            
        }
    })
}