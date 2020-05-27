require("dotenv").config();
//Contains the login detail for various environements. Also contains environment variables to protect sensitive info.
module.exports = {
  "development": {
    "username": process.env.DBUSERNAME,
      "password": process.env.DBPASSWORD,
        "database": "mattsBurgers_db",
          "host": "musicdb-g2.cykqhanvgs0f.ap-southeast-2.rds.amazonaws.com",
            "port": 3306,
              "dialect": "mysql"
  },
  "test": {
    "username": process.env.DBUSERNAME,
      "password": process.env.DBPASSWORD,
        "database": "mattsBurgers_db",
          "host": "musicdb-g2.cykqhanvgs0f.ap-southeast-2.rds.amazonaws.com",
            "port": 3306,
              "dialect": "mysql"
  },
  "production": {
    "username": process.env.DBUSERNAME,
      "password": process.env.DBPASSWORD,
        "database": "mattsBurgers_db",
          "host": "musicdb-g2.cykqhanvgs0f.ap-southeast-2.rds.amazonaws.com",
            "port": 3306,
              "dialect": "mysql"
  }
}
