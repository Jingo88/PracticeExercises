// var WSS = require('ws').Server;

// var server = new WSS({port: 3000});

// server.on('connection', function(client){
// 	console.log('A newb has attempted to contact you');

// 	client.send('What you looking at?');

// 	client.on('message', function(x){
// 		client.send('Man aint nobody give a crap about you');
// 		client.send('Yeah well ' + x + ' and so is your mom');
// 	})
// });

// var ws = new WS (process.argv[2]+ ' ws://localhost: ' + process.argv[3]);

// var party = false; 

// var listen = process.argv[2];
// var portNumber = parseInt(process.argv[3]);

// var WSS = require('ws').Server;
// var server = new WSS({port: portNumber});


// server.on('connection', function(connect){
// 	console.log('You are now talking to somebody');

// 	if (party === false){
// 		connect.send('ASL?');
// 		party = true;

// 	} else if (party === true){
// 		connect.send('Sorry party is full');
// 		connect.close();
// 	}

// 		process.stdin.on( 'data', function(x){
// 		var msg = x.toString().trim();
// 		connect.send(msg);
// 	})

// 	connect.on('close', function(){
// 		party = false; 
// 	})
// })



var WSS = require('ws').Server;

var server = new WSS({port: 3000});

var history = [];

var clients = [];

server.on('connection', function(connect){

	clients.push(connect);

	connect.on('message', function(x){
		history.push(x);
		console.log(x);
	})

	var index = clients.indexOf(clients.length-1);

	if (clients.length > 1)
	{
		console.log(index);
		// var oldChat = history.join('/n');
		clients.lastIndex.send(history.join('/n'));
	}

	process.stdin.on('data', function(x){
		var msg = x.toString().trim();
		connect.send(msg);
	})
})




























