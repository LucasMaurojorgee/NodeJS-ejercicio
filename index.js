const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(console.log("Hello World"));
});

port = 3000;
app.listen(port, () => console.log(`server running on port ${port}`));
