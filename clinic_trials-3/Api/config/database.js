const Sequelize = require('sequelize').Sequelize;
module.exports = new Sequelize('clinic', 'germanvaldez', 'mysecretpassword', {
    // gimme postgres, please!
    host:'localhost',
    dialect: 'postgres',
    define: {
        //prevent sequelize from pluralizing table names
        freezeTableName: true,
        timestamps: false,
    }
})
