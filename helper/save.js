const fs = require("fs")

function save(data, dataPath){
    fs.writeFileSync(dataPath, JSON.stringify(data),(err) => {
        if (err) {
          console.log(err);
          return false;
        }
      });
      return true;
}

module.exports = save