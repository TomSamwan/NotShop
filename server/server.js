const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
  origin: ["http://localhost:5173"],
};
const connect = require('./connect.js')

app.use(cors(corsOptions));

const PORT = 8080;

app.get("/api", (req, res) => {
  res.json({ message: "If you see this, it works!" });
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
