// Exercise: wscat client

// write a client that connects to one server.
// make sure that any input that the user types is captured and sent to the server
// Bonus try to recreate the command line interface of wscat where you type wscat -c ws://localhost:3000.
// this means your client takes two parameters, the first you should confirm is -c, 
// anything else should cause your program to exit ... unless you are supporting the -l option as well 
// (from the previous Bonus exercise)
// the second argument is the websocket address
// note that wscat also has the following properties
// wscat -c ws://localhost:3000 prints out right away connected (press CTRL+C to quit).
// when the server closes the connection (e.g. if you type CTRL+C in the terminal on the server side) 
// it prints out disconnected. Also exit the program.




var listen = process.argv[ 2 ];
var port = "ws://localhost:" + parseInt( process.argv[ 3 ] );
var WebSocket = require( "ws" );
var ws = new WebSocket( port );
if ( listen === "-c" )
{
    console.log( "connected to server!" )
    ws.on( "open", function ()
    {
        process.stdin.on( "data", function ( msg )
        {
            var sendMsg = msg.toString()
                .trim();
            ws.send( sendMsg );
        } );
        ws.on( "message", function ( msg )
        {
            ws.send( msg )
        } )
    } )
}
else
{
    ws.close();
    console.log( "Disconnected!" )
}