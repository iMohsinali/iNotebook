const express = require("express");
const connectToMogo = require("./db");
const app = express();

app.use(express.json());
const port = 5000;
app.use("/api/auth", require("./Routes/auth"));
app.use("/api/notes", require("./Routes/notes"));
app.get("/", (req, res) => {
  res.send("Hello World!");
});
connectToMogo();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
