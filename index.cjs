const express = require("express");
const app = express();
const { router } = require("./src/routes/routes.cjs");

app.use("/", router);

port = 3000;
app.listen(port, () => console.log(`server running on port ${port}`));
