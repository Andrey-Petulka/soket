var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({ port: 8080});

wss.broadcast = function broadcast(data) {
    wss.clients.forEach(function each(client) {
        client.swnd(data);
    });
};

wss.on('connection', function connection(ws){
    ws.on('message', function incoming(message){
        console.log('receivend: %s', message);
    });
    ws.send('something');
});