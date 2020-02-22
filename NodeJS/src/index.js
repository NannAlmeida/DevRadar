const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const cors = require('cors');


const routes = require('./routes');
const { setupWebSocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-lbzbv.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(routes);

server.listen(3333);