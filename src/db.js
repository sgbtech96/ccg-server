const mongoose = require("mongoose");
const DB_PASS = process.env.DB_PASS;
mongoose.connect(
  `mongodb+srv://sgbtech96:${DB_PASS}@cluster0-hluvl.mongodb.net/ccg?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
