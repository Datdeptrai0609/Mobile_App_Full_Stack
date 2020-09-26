// define express
const express = require('express');
const app = express();
const port = 3000;

//define socket io
const server = require ('http').createServer();
const io = require ('socket.io')(server);


var path = require('path');

app.get('/', (req,res) => {
    res.send('hello dat');
    console.log(`client join to localhost: ${port}`);
    console.log(`test at ${port}`);
});

app.listen(port , () => {
    console.log(`server listening at localhost ${port}`);
});