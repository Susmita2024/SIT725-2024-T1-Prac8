const express = require('express');
const app = express();
const router = require('./router');

const port = process.env.port || 3000;

let http = require('http').Server(app);
let io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', router);


//socket add
io.on('connection', (socket) => {
  console.log('a user is connected');
  socket.on('disconnect', () => {
    console.log('user is disconnected');
  });
  setInterval(() => {
    socket.emit('number', parseInt(Math.random() * 10));
  }, 1000);
});

http.listen(port, () => {
  console.log("Listening on the port ", port);
});


// app.listen(port, () => {
//   console.log('App listening to: ' + port);
// });






