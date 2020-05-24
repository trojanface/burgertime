let Sequelize = require ("sequelize");

let sequelize = require("../config/connection.js");

let Burger = sequelize.define("burger", {
    burger_name : Sequelize.STRING,
    devoured: Sequelize.BOOLEAN
});

Burger.sync();

module.exports = Burger;