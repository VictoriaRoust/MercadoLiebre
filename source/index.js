const express = require("express");
const app = express();
const path = require("path")
//server
app.listen (3000, ()=> console.log("server on http://localhost:3000"));
//public access
app.use (express.static(path.resolve(__dirname, "../public")));

app.use (require("./routes/web"))
