var http = require('http');
var qs = require('querystring');
const websocket = require('ws')

wsconnections = []

// Messages received on the http connection are forwarded
// to the browser via the websocket connection.
const wss = new websocket.Server({ port: 10001 })
wss.on('connection', (ws,req) => {
  log("WS Connection start.")
  log("req.url: " + req.url)
  var url = decodeURIComponent(req.url)
  log("url decoded: " + url)
  wsid = url.replace(/"/g,'')
  wsid = wsid.substr(7)
  log("wsid=" + wsid)
  wsconn = new Object()
  wsconn.wsid = wsid
  wsconn.ws = ws
  wsconnections.push(wsconn)

  ws.on('message', (message) => {
    log(`Received message => ${message}`)
  })

  ws.on('close', (eventData) => {
    log('Close connection received.');
    for(var i=0;i<wsconnections.length;i++) {
      log("wsconnections[" + i + "].wsid: " + wsconnections[i].wsid)
      if (wsconnections[i].ws == ws) {
        log("Removing wsconnections[" + i + "].wsid: " + wsconnections[i].wsid)
        wsconnections.splice(i,1)
      }
    }
  })
})

// Receive messages from the Twist integration
// and forward them to the browser via the web socket connection.
http.createServer(function (req, res) {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString(); // convert Buffer to string
  });
  req.on('end', () => {
    resCode = "200"
    resEndCode = "ok"

    log(body);
    wsconn = findConn(body);
    if (wsconn != null) {
      log("Found existing connection: " + wsconn.wsid)
      body = body.replace(/&/g,", ")
      dt = getTimeStamp()
      wsconn.ws.send(dt + ' ' + body)
    } else{
      log("Did not find connection in list.")
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
  //log("findConn(() body: " + body);
  result = body.match(/wsid=\"([0-9][0-9]*)\"/)
  //log("findConn(() result: " + result);
  if (result == null || result.index < 0) {
    log("Received old or non-DoistDemo msg. Discarding. Msg: " + body);
    return null
  }

  wsid = result[1];
  log("parsed wsid: " + wsid)
  for(var i=0;i<wsconnections.length;i++) {
    log("wsconnections[" + i + "].wsid: " + wsconnections[i].wsid)
    if (wsconnections[i].wsid == wsid) {
      return wsconnections[i]
    }
  }
  return null
}

function getTimeStamp() {
  dt = new Date().toISOString()
  return dt
}

function log(msg) {
  dt = getTimeStamp()
  console.log(dt + ": " + msg)
}
