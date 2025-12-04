require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { ATLAS_URI } = process.env;
const cookieParser = require("cookie-parser");
const router = require("./router");

const app = express();
const PORT = 8080;

const corsOptions = {
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", router);
app.use(cookieParser());

mongoose
  .connect(ATLAS_URI)
  .then(async () => {
    await app.listen(PORT, () => {
      console.log(`Connected to DB and listening on port: ${PORT}`);
    });
  })
  .catch((error) => console.error(error));