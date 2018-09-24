const http = require("http");
const server = http.createServer();
const io = require("socket.io")(server);

io.on("connect", (socket) => {

    console.log("connected");
  
    socket.on("send", (data) => {
        console.log("TEST SOCKET");
        // make somthing with data...
      
        // return a msg
        io.emit("msg", {msg: "Hey, how are you :-)"});
    });
});

server.listen(8080);