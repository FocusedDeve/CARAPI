const {DataTypes} = require("sequelize");
module.exports = (sequelize, Datatypes) => {
    return sequelize.define('user', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING(30),
            unique: 'ce username est deja pris'
        },
        password: {
            type: DataTypes.STRING
        }
    })
}