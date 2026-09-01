require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// When you are ready, add MONGODB_URI to .env and replace the sample content
// below with documents from MongoDB.
const portfolio = {
  about: {},
  experience: [],
  projects: [],
  skills: [],
  contact: {},
};

app.get("/api/portfolio", (_request, response) => response.json(portfolio));

async function start() {
  if (process.env.MONGODB_URI) {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  }
  app.listen(port, () =>
    console.log(`Portfolio API listening on port ${port}`),
  );
}

start().catch((error) => {
  console.error("Unable to start the API:", error.message);
  process.exit(1);
});
