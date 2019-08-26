const db = require('./db/api');
const express = require('express');
const router = express.Router();
router.use(auth)

//Authentication Middleware
function auth(req,res,next) {
    if (req.headers.Authorization !== process.env.SECRET) {
        res.status(300).send({message: "Request missing Authorization header"})
    } else {
        next();
    }
}

router.post('/add-room', (req,res) => {
    db.addRoom(req.body)
    .then((result) => {
        res.status(200).send(result);
    })
    .catch((error) => {
        res.status(500).send({message: error.message})
    });
});

router.put('/update-room', (req,res) => {
    db.updateRoom(req.body)
    .then((result) => {
        res.status(200).send(result);
    })
    .catch((error) => {
        res.status(500).send({message: error.message})
    });
});

router.get('/get-room/:id', (req,res) => {
    db.getRoom(req.params.id)
    .then((result) => {
        res.status(200).send(result);
    })
    .catch((error) => {
        res.status(500).send({message: error.message})
    });
});

router.get('/get-graph', (req,res) => {
    db.getGraph()
    .then((result) => {
        res.status(200).send(result);
    })
    .catch((error) => {
        res.status(500).send({message: error.message})
    });
});

module.exports = router;