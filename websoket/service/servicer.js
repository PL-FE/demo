const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', function connection(ws, req) {
    const username = req.url.split('=')[1];
    ws.username = username;

    ws.on('message', function incoming(message) {
        const parsedMessage = JSON.parse(message);
        if (parsedMessage.type === 'group') {
            wss.clients.forEach(function each(client) {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({ type: 'group', username: ws.username, text: parsedMessage.text }));
                }
            });
        } else if (parsedMessage.type === 'private') {
            wss.clients.forEach(function each(client) {
                if (client.username === parsedMessage.recipient && client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({ type: 'private', username: ws.username, text: parsedMessage.text }));
                }
            });
        }
    });
});
