import client from "../../lib/connectDB"

async function handler(req, res) {
    const todo = req.body
    const text = 'INSERT INTO todos(text) VALUES($1) RETURNING *'
    const values = [todo]
    await client
        .query(text, values)
        .then(value => res.json(value.rows[0]))
}

export default handler

