const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const indexRouter = require("./routes/index");

mongoose.connect("mongodb+srv://simmonskhadir:fsdevkd@cluster0.52rj2ts.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`CRM app listening at http://localhost:${port}`);
});
