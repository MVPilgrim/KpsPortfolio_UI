var http = require('http');
const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 10001 })

wsconnections = []

wss.on('connection', (ws,req) => {
  console.log("req.url: " + req.url)
  wsid = req.url.substr(10,req.url.length - 13)
  console.log("wsid=" + wsid)
  wsconn = new Object()
  wsconn.wsid = wsid
  wsconn.ws = ws
  wsconnections.push(wsconn)
  ws.on('message', (message) => {
    console.log(`Received message => ${message}`)
  })
})



http.createServer(function (req, res) {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString(); // convert Buffer to string
  });
  req.on('end', () => {
    resCode = "200"
    resEndCode = "ok"

    console.log(body);
    ws = findConn(body);
    if (ws != null) {
      console.log("ws: not null")
      ws.send(body)
    } else{
      console.log("ws: is null")
      resCode = "500"
      resEndCode = "bad"
    }
    res.writeHead(resCode, {'Content-Type': 'application/json'});
    res.write('' ); 
    res.end(resEndCode);
  });

  
}).listen(10000,"0.0.0.0");

function findConn(body) {
  result = body.match(/Doist.Demo.wsid%3D(..*)%5D%28/)
  if (result == null || result.index < 0) {
    console.log("Received non-DoistDemo msg. Discarding. Msg: " + body);
    return null
  }

  wsid = result[1];
  console.log("parsed wsid: " + wsid)
  for(var i=0;i<wsconnections.length;i++) {
    console.log("wsconnections[i].wsid: " + wsconnections[i].wsid)
    if (wsconnections[i].wsid == wsid) {
      return wsconnections[i].ws
    }
  }
  return null
}
