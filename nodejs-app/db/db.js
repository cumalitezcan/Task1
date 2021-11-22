//pg for postgre connection
const {Client} = require('pg');

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: '12345',
    database: 'postgres1'
});

client.connect();

module.exports = client