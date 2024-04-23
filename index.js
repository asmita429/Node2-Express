const express = require("express");
const app = express();

// console.dir(app);

let port = 3000; //8080

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

app.use((req, res) => {
  console.log("Request received");
  // res.send("Basic string response");
  // res.send("<h1>html response</h1>")
  res.send({
    name: "apple",
    color: "red",
  });
});
