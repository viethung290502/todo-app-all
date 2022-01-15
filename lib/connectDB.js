const { Client, Pool } = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'todos',
    password: '123456',
    port: 5432,
})
client.connect()
export default client