import client from "../../lib/connectDB"

async function remove(req, res) {
  const id = req.body.id
  const text = `DELETE FROM todos WHERE id = '${id}'`
  await client.query(text)
  const result = await client.query('SELECT * FROM todos')
  res.json(result.rows)
}
export default remove