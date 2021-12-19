const fs = require('fs');

function render(req, res) {
  const data = fs.readFileSync('././data/todos.json', 'utf-8')
  const oldData  = JSON.parse(data)
  res.json(oldData)
}
export default render