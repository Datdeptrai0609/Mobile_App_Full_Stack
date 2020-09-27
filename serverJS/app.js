// define express
const express = require('express');
const app = express();
const port = 5000;

//define socket io
const server = require ("http").createServer(app);
const io = require ('socket.io')(server);


var path = require('path');
//use JSON to send req res
app.use(express.json());
// urlenconded
app.use(express.urlencoded({ extended: false }));
//use for static file like css html...
app.use('/static', express.static(path.join(__dirname, 'public')));

//connect to monopoly web file 
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'public/web.html'));
    console.log(`client join to localhost: ${port}`);
});

//socketIO-server
io.on("connection", (socket) => {
    // console.log(`id connect: ${socket.id}`);
    console.log(socket.id);
    socket.on("hello", data => {
        console.log(`hello ${data}`);
        server.emit("hello", "done to resend file");
    })
});
server.listen(port, () => {
    console.log(`server listening at localhost: ${port}`);
});