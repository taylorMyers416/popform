const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();

//Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Routes
app.use(routes);

//Port
const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
