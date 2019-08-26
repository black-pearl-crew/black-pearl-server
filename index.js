if (process.env.NODE_ENV !== 'production') require('dotenv').config();

//Express Init
const express = require('express');
const server = express();
server.use(express.json());
const port = process.env.PORT || 9000;

//Express Endpoints
server.get('/', (req, res) => res.status(200).send("It's alive!"));

const db = require('./db/api');
server.post('/add-room', (req,res) => {
    db.addRoom(req.body)
    .then((result) => {
        res.status(200).send(result);
    })
    .catch((error) => {
        res.status(500).send({message: error.message})
    });
});

server.put('/update-room', (req,res) => {
    db.updateRoom(req.body)
    .then((result) => {
        res.status(200).send(result);
    })
    .catch((error) => {
        res.status(500).send({message: error.message})
    });
});

server.get('/get-room/:id', (req,res) => {
    db.getRoom(req.params.id)
    .then((result) => {
        res.status(200).send(result);
    })
    .catch((error) => {
        res.status(500).send({message: error.message})
    });
});

server.get('/get-graph', (req,res) => {
    db.getGraph()
    .then((result) => {
        res.status(200).send(result);
    })
    .catch((error) => {
        res.status(500).send({message: error.message})
    });
});

server.listen(port, () => console.log(`\u{1F680}\u{1F680}\u{1F680} http://localhost:${port}/ \u{1F680}\u{1F680}\u{1F680}`));