//Models are the server side data objects. They are synched witht he database to ensure they contain the same information.

let Sequelize = require ("sequelize");

let sequelize = require("../config/connection.js");

let Burger = sequelize.define("burger", {//create an entry in the 'burger' table with (burger_name) & (devoured) as attributes
    burger_name : Sequelize.STRING,
    devoured: Sequelize.BOOLEAN
});

Burger.sync();

module.exports = Burger;//exports this burger object so it can be used to create new entries.