var router = require('express').Router();
var pool = require('./pool');

router.get('/', function(req, res) {
    console.log('In koalaList GET route');

    //connecting the SWIMMING POOLS
    pool.connect(function(koalaOOPS, client, done) {
        if (koalaOOPS) {
            console.log('koala OOPS connecting', koalaOOPS);
            res.sendStatus(500);
        }
        else {
            client.query('SELECT * FROM koalalas', function(error, resultSet){
                done();
                if (error) {
                    console.log('error db', error);
                    res.sendStatus(500);
                }
                else {
                    res.send(resultSet.rows);
                }
            })
        }
    })
})

router.post('/', function(req, res) {
    var fressKoalae = req.body;
    console.log('in POST koala list route, reqqin dot body', req.body);
    
    pool.connect(function(err, client, done) {
        if (err) {
            console.log('ERROR AHHHH', err);
            res.sendStatus(500)
        }
        else {
            client.query('INSERT INTO koalalas (name , age, gender, ready_for_transfer, notes) VALUES ($1, $2, $3, $4, $5);', [fressKoalae], function(err, resultObj){
                done();
                if (err) {
                    console.log('shit happened', err);
                    res.sendStatus(500);
                }
                else {
                    res.sendStatus(201);
                }
            })
        }
    })
})

module.exports = router;