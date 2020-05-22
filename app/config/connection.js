let Sequelize = require("sequelize");

let sequelize = new Sequelize("mattsBurgers_db","admin", "En9VAkHhCBk4Ii3CBJ4L", {
    host: "musicdb-g2.cykqhanvgs0f.ap-southeast-2.rds.amazonaws.com",
    port: 3306,
    dialect: "mysql",
    pool:{
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports = sequelize;
