const fs = require('fs')
function remove (req,res) {
    const id = JSON.parse(req.body)
    const data = fs.readFileSync('./data/todos.json','utf-8')
    const oldData = JSON.parse(data)
    const result = oldData.filter(item => item.id !==id)
    fs.writeFileSync('./data/todos.json',JSON.stringify(result))
    res.json(result)
}
export default remove