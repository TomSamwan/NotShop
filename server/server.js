const connect = require("./connect.js");
const express = require("express");
const cors = require("cors");
const corsOptions = {
  origin: ["http://localhost:5173"],
};
const router = require("./router");

const app = express();
const PORT = 8080;

app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  connect.connectToServer();
  console.log(`listening on port: ${PORT}`);
});