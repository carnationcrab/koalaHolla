var Pool = require('pg').Pool;

var config = {
    host: 'localhost',
    port: 5432,
    database: 'koalaHolla',
};

var pool = new Pool(config);

module.exports = pool;