import * as hapi from '@hapi/hapi';

export async function createServer(port:number){
    let server = hapi.server({
        port,
    });
    await server.start()
    return server;
}

