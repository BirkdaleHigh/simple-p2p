var start = document.getElementById('connect')
var join = document.getElementById('join')
var message = document.getElementById('sendMessage')
var output = document.getElementById('output')
var conn
var peer

start.addEventListener('click', function(){
  var userID = document.getElementById('name').value
  
  peer = new Peer(userID, {key: '9ra3elywboekx1or', debug:2})

  peer.on('open', function(id){
    start.value = 'Hello ' + id
    start.disabled = true
  })
  
  peer.on('connection', function(connection) {
    connection.on('data', function(data) {
      var node = document.createTextNode(data + "\n")
      output.appendChild(node)
    })
  })

})

join.addEventListener('click', function(){
  var peerID = document.getElementById('peer').value
  
  conn = peer.connect(peerID)

})

message.addEventListener('click', function(){
  var msg = document.getElementById('message').value
  
  conn.send(msg)

})
