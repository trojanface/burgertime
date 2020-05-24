let express = require("express");
var path = require('path');
let app = express();

let PORT = process.env.PORT || 8080;


app.use(express.static("app/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main",
    extname: "handlebars"
}));
var viewsPath = path.join(__dirname, '/app/views');  
app.set('views', viewsPath); 

app.set("view engine", "handlebars");

let routes = require("./app/controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
