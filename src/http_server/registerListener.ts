import * as hapi from '@hapi/hapi';
import { InteractionHost } from '../user_interface/InteractionHost';

export function registerListener(server:hapi.Server,host:InteractionHost){
    server.route({
        path:'/',
        method:'*',
        handler:async(request,h)=>{
            return await host.execute(request.payload as any);
        }
    });
}