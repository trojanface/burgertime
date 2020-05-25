//Sets up the express server

let express = require("express");
var path = require('path');
let app = express();

let PORT = process.env.PORT || 8080;


app.use(express.static("app/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Sets up handlebars
let exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
    defaultLayout: "main",
    extname: "handlebars"
}));
//Directs handlebars to where the views are kept
var viewsPath = path.join(__dirname, '/app/views');  
app.set('views', viewsPath); 

app.set("view engine", "handlebars");

//Imports the routes
let routes = require("./app/controllers/burgers_controller.js");

app.use(routes);

//Creates the server
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
