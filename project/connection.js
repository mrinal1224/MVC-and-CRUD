const mongoose = require('mongoose')

async function connectMongoDb(url) {
  return mongoose
    .connect(url)
    .then(() => {
      console.log("Connection Successful");
    })
    .catch(() => {
      console.log("Connection Unsuccesful");
    });
}

module.exports = {
    connectMongoDb
}
