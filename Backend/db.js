const mongoose = require("mongoose");
const url =
  "mongodb+srv://Mohsinbalti:<71301mohsin>@ist.7g09b.mongodb.net/mydata?retryWrites=true&w=majority";
const connectToMogo = () => {
  mongoose.connect(url, () => {
    console.log("connect to mooges");
  });
};
module.exports = connectToMogo;
