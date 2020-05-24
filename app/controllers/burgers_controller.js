let express = require("express");
let Burger = require("../models/burger.js");
let router = express.Router();

router.get("/", function (req, res) {
    Burger.findAll({}).then(function (data) {
        let hbsObject = {
            burgers:[]
        };
        data.forEach((element, index) => {
            hbsObject.burgers.push(
                {
                    id: data[index].dataValues.id,
                 name: data[index].dataValues.burger_name,
                devoured: data[index].dataValues.devoured
                }
            );
        });
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});



router.put("/api/burgers/:id", function (req,res) {
    let condition = "id = " + req.params.id;
    Burger.update (
        {
            devoured: true

        },
        {where: {id: req.params.id}},
        function(result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    )

});

router.post("/api/burgers", function (req, res) {
    Burger.create({burger_name : req.body.burger_name, devoured: false});
});


module.exports = router;



// var data = {
//     animals: []
//   };

//   for (var i = 0; i < animals.length; i += 1) {
//     // Get the current animal.
//     var currentAnimal = animals[i];

//     // Check if this animal is a pet.
//     if (currentAnimal.pet) {
//       // If so, push it into our data.animals array.
//       data.animals.push(currentAnimal);
//     }
//   }

//   res.render("index", data);