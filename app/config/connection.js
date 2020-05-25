//connection.js handles the connection with the mysql database. It is done by creating instances of the sequelize object.

let Sequelize = require("sequelize"); //imports the sequelize library.

let sequelize = new Sequelize("placeholder","placeholder", "placeholder", {//login details.
    host: "placeholder",
    port: 3306,
    dialect: "mysql",
    pool:{//number of allowable connections.
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports = sequelize;
