//Models are the server side data objects. They are synched witht he database to ensure they contain the same information.



module.exports = function(sequelize, DataTypes) {//exports this burger object so it can be used to create new entries.
    let Burger = sequelize.define("burger", {//create an entry in the 'burger' table with (burger_name) & (devoured) as attributes
    burger_name : DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
});

return Burger;
};

