// const {mongourl, configObj,dbStreamHandler } = require('./dbconfig.js');
const mongoose = require("mongoose");

const mongourl =
  process.env.MONGO_URI ||
  "mongodb+srv://imohsin:imohsin@cluster0.iixqk.mongodb.net/abc?retryWrites=true&w=majority";
const dbStreamHandler = {
  error: () => {
    console.log("Fail to connect Database");
  },
  open: () => {
    console.log("Connection successfully Completed");
  },
};
const connectToMogo = () => {
  mongoose.connect(mongourl);

  const db = mongoose.connection;

  db.on("error", dbStreamHandler.error);
  db.on("open", dbStreamHandler.open);

  // mongoose.set("useCreateIndex", true);
};

// export const configObj = {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     useFindAndModify: false,
// };

module.exports = connectToMogo;
