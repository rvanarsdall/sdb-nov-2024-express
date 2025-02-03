const fs = require("fs")

function read(dbPath){
    const file = fs.readFileSync(dbPath)
    return JSON.parse(file)
}

module.exports = read;
