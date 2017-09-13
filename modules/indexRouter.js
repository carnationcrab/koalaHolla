var router = require('express').Router();
var path = require('path');

router.get('/', function(req, res) {
    var junglePath = path.join(__dirname, '../server/public/index.html');
    res.sendFile(junglePath);
})

module.exports = router;