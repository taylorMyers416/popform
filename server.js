const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();

const db = require('./config/database');


// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

//Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Index route

//Api routes
app.use(routes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
