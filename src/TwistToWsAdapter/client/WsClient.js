const WebSocket = require('ws');

wsid=Math.random()

const url = 'ws://localhost:10001?wsid="' + wsid + '"'
console.log("Before new WebSocket")
const connection = new WebSocket(url)
//const connection = new WebSocket(url, {
//  perMessageDeflate: false
//});

connection.onopen = () => {
  console.log("Before onopen")
  connection.send('hey') 
}

connection.onerror = (error) => {
  console.log("Before onerror")
  console.log(`WebSocket error: ${error}`)
}

connection.onmessage = (e) => {
  console.log("Before onmessage")
  console.log(e.data)
}

