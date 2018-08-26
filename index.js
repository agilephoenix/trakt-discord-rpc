const DiscordRPC = require('discord-rpc');

const clientID = '482545712874389505';

DiscordRPC.register(clientID);

const rpc = new DiscordRPC.Client({ transport: 'ipc' });
const startTimestamp = new Date();

async function setActivity() {
    if (!rpc) {
        return;
    }

    rpc.setActivity({
        details: 
    })
}


