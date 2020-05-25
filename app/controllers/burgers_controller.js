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
        res.render("index", hbsObject);
    });
});



router.put("/api/burgers/:id", function (req,res) {
    Burger.update (
        {
            devoured: true
        },
        {where: {id: req.params.id}}
    ).then(function () {
        res.json({ success: true });
    });

});

router.post("/api/burgers", function (req, res) {
    Burger.create({burger_name : req.body.burger_name, devoured: false}).then(function () {
        res.json({ success: true });
    });
 
});

router.delete("/api/burgers/:id", function (req, res) {
    Burger.destroy({where : {id : req.params.id}}).then(function () {
        res.json({ success: true });
    });
});

module.exports = router;



