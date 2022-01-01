import client from "../../lib/connectDB"

async function update(req, res) {
    const value = req.body
    const text = `UPDATE todos SET text = '${value.text}' WHERE id = '${value.id}'`
    await client.query(text)
    const result = await client.query('SELECT * FROM todos')
    res.json(result.rows)
}
export default update
