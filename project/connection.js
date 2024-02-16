const mongoose = require('mongoose')

async function connectMongoDb(url) {
  return mongoose
    .connect(url)
    .then(() => {
      console.log("Connection Successful");
    })
    .catch((err) => {
      console.log("Connection Unsuccesful" , err);
    });
}

module.exports = {
    connectMongoDb
}
