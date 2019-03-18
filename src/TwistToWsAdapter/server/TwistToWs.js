var http = require('http');
var qs = require('querystring');
const websocket = require('ws')

const wss = new websocket.Server({ port: 10001 })

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
      resEndCode = "BAD"
    }
    res.writeHead(resCode, {'Content-Type': 'application/json'});
    res.write('' ); 
    res.end(resEndCode);
  });

  
}).listen(10000,"0.0.0.0");

function findConn(body) {
  body = qs.unescape(body)
  console.log("findConn(() body: " + body);
  result = body.match(/wsid=\"([0-9][0-9]*)\"/)
  console.log("findConn(() result: " + result);
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
