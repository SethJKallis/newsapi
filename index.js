const {Control} = require('./controller/index');
const control = new Control();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3500;
app.use(
  cors(),
  express.json(),
  express.urlencoded({ extended: true }),
  bodyParser.json()
);

app.use((req, res, next) => {
  res.header("Access-COntrol-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});



app.use("/tesla", async (req, res) => {
  res.status(200).send(await control.teslaData());
});


app.use("/wsj", async (req, res) => {
  res.status(200).send(await control.wallStreetData());
});

app.use("/business", async (req, res) => {
  res.status(200).send(await control.businessData());
});

app.use("/tech", async (req, res) => {
  res.status(200).send(await control.techData());
});

app.use("/apple", async (req, res) => {
  res.status(200).send(await control.appleData());
});

app.listen(port, async () => {
  console.log(`Server is running on port: ${port}`);
});
