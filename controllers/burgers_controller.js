//Controllers handle the behaviour between user input and program actions. In this case it is referring user routes to database queries using the burger model.

//Required dependencies.
let db = require("../models");

module.exports = function (app) {
    app.get("/", function (req, res) {//the home route
        db.burger.findAll({}).then(function (data) {//queries all entries in database and returns them
            let hbsObject = {//creates an object to load return data into.
                burgers: []
            };
            data.forEach((element, index) => {//cycles through the returned data object and loads only required info into object.
                hbsObject.burgers.push(
                    {
                        id: data[index].dataValues.id,
                        name: data[index].dataValues.burger_name,
                        devoured: data[index].dataValues.devoured
                    }
                );
            });
            res.render("index", hbsObject); //sends object to handlebars for display (conversion was required as handlebars can only handle (heh) objects)
        });
    });



    app.put("/api/burgers/:id", function (req, res) {//update burger in database.
        db.burger.update(
            {
                devoured: true//as this is the only option besides default it sets the variable to true.
            },
            { where: { id: req.params.id } }//will only apply this change to the matching id db entry.
        ).then(function () {
            res.json({ success: true });//returns this mock object so the promise is completed.
        });

    });

    app.post("/api/burgers", function (req, res) {//adds a new burger flavour
        db.burger.create({ burger_name: req.body.burger_name, devoured: false }).then(function () {//creates a new entry in the database with the burger name.
            res.json({ success: true });
        });

    });

    app.delete("/api/burgers/:id", function (req, res) {//deletes a burger with the matching id.
        db.burger.destroy({ where: { id: req.params.id } }).then(function () {
            res.json({ success: true });
        });
    });
};


