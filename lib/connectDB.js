const { Client, Pool } = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'todos',
    password: '037202001873',
    port: 5432,
})
client.connect()
export default client