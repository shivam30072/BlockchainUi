require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const connectDB = require("./db/connect");
const { apiCall } = require("./data/data");
const dataRouter = require("./routes/dataRoute");

app.use("/api/data", dataRouter);

//------------------------Deployment-----------------

const __dirname1 = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("api running successfully");
  });
}
//------------------------Deployment-----------------

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    apiCall();

    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
