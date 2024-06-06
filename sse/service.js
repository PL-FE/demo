const http = require('http');
let str = `客户端监听服务器发送的事件，\\n,并在收到更新时触发对应的事件处理器客户端监听服务器发送的事件，并在收到更新时触发对应的事件处理器客户端监听服务器发送的事件，并在收到更新时触发对应的事件处理器客户端监听服务器发送的事件，并在收到更新时触发对应的事件处理器客户端监听服务器发送的事件，并在收到更新时触发对应的事件处理器客户端监听服务器发送的事件，并在收到更新时触发对应的事件处理器客户端监听服务器发送的事件，并在收到更新时触发对应的事件处理器客户端监听服务器发送的事件，并在收到更新时触发对应的事件处理器客户端监听服务器发送的事件，并在收到更新时触发对应的事件处理器客户端监听服务器发送的事件，并在收到更新时触发对应的事件处理器客户端监听服务器发送的事件，并在收到更新时触发对应的事件处理器客户端监听服务器发送的事件，并在收到更新时触发对应的事件处理器`.replace(" ", "").replace("\n", "")
let idx = 1
http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Access-Control-Allow-Origin': '*'
  });
  // 每隔一秒发送一条消息
  setInterval(() => {
    idx = idx + 1
    // console.log('idx', str.slice(0,idx));
    // res.write('data: ' + str.slice(0,idx) + '\n\n');
    res.write('data: ' + '11111' + '\n\n' + '3434444');
    res.write('data: ' + '22222' + '\r\n'+ '6666');
  }, 500);
}).listen(3333);

console.log('Server running at http://localhost:3333/');
