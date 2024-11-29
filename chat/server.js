var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({ port: 5500 });

wss.broadcast = function broadcast(data) {
    wss.clients.forEach(function each(client) {
        client.send(data);
    });
};

wss.on('connection', function connection(ws){
    ws.on('message', function incoming(message){
        wss.clients.forEach(function each(client) {
            client.send(message);
        });
    });
    ws.send('something');
});