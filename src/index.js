require("dotenv").config();
const express = require("express");

const apiRouter = require("./routes");

const app = express();

app.use(express.json());

// Versioned API
app.use("/api/v1", apiRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});