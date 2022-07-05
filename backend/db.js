const mongoose = require("mongoose");

const url =
  "mongodb+srv://rajprem4214:Pr69MR%407425%21@cluster0.tqvns.mongodb.net/college-quora?retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then (() => {
      console.log('MongoDB connected sucessfully')
  }).catch((error) => console.log("Error :",error));

};
