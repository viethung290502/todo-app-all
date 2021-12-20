const fs = require('fs')

    

 async function them(req, res) {
     console.log(req.body)
    const A = req.body
    
    const B = fs.readFileSync('././data/save.json', 'utf-8')
    const olddata = JSON.parse(B)
    const newdata = [A, ...olddata]
    fs.writeFileSync('././data/save.json', JSON.stringify(newdata))
    res.json(newdata)

}
export default them;

