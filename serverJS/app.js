// define express
const express = require('express');
const app = express();
const port = 3000;

//define socket io
const server = require ('http').createServer();
const io = require ('socket.io')(server);


var path = require('path');

//use for static file like css html...
app.use('/static', express.static(path.join(__dirname, 'public')));


app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'public/web.html'));
    console.log(`client join to localhost: ${port}`);
});

app.listen(port , () => {
    console.log(`server listening at localhost ${port}`);
});