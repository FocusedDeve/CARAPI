module.exports = (sequelize, DataTypes)=>{
    return sequelize.define('voiture', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                is: /[a-z0-9\t\n\f\r]+/  
            }  
        },
        modele: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            get(){
                return this.getDataValue("type").split(",")
            },
            set(type){
                this.setDataValue("type", type.toString())
            }
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: {
                    msg: "Le prix doit être un entier compris entre 1200 et 5000"
                },
                max: 5000,                  
                min: 1200
            }
        }
    },{
        timestamps: true,
        updatedAt: false
    })
}