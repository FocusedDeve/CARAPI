module.exports = (sequelize, DataTypes)=>{
    return sequelize.define('voiture', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        modele: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },{
        timestamps: true,
        updatedAt: false
    })
}