//Sets up the express server
require("dotenv").config();
let express = require("express");
var path = require('path');
let app = express();

let PORT = process.env.PORT || 8080;

//imports our models from index.js
let db = require("./models");

app.use(express.static("./public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Sets up handlebars
let exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
    defaultLayout: "main",
    extname: "handlebars"
}));
//Directs handlebars to where the views are kept
// var viewsPath = path.join(__dirname, '/app/views');
// app.set('views', viewsPath);

app.set("view engine", "handlebars");

//Imports the controller
require("./controllers/burgers_controller.js")(app);

//Syncs models and creates the server
db.sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});

