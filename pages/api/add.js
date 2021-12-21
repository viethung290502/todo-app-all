const fs = require('fs')

 async function them(req, res) {
    const A = req.body
    const B = fs.readFileSync('././data/todos.json', 'utf-8')
    const olddata = JSON.parse(B)
    const newdata = [A, ...olddata]
    fs.writeFileSync('././data/todos.json', JSON.stringify(newdata))
    res.json(newdata)
}
export default them;



