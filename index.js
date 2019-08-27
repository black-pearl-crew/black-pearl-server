if (process.env.NODE_ENV !== 'production') require('dotenv').config();

//Express Init
const express = require('express');
const router = require('./router')
const server = express();
const port = process.env.PORT || 9000;
server.use(express.json());
server.use('/api', router);
server.get('/', (req, res) => res.status(200).send("It's alive!"));
server.listen(port, () => console.log(`\u{1F680}\u{1F680}\u{1F680} http://localhost:${port}/ \u{1F680}\u{1F680}\u{1F680}`));