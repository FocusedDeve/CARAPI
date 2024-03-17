
module.exports = (sequelize, DataTypes)=>{
    return sequelize.define('animal',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false
       
             
        },
        sexe: {
            type: DataTypes.STRING,
            allowNull: false
             
        },
        couleur: {
            type: DataTypes.STRING,
            allowNull: false
           
             
        },
        poids: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,           
        }
  
    })
}


// module.exports = (sequelize, DataTypes) => {
//     return sequelize.define('animal', {
//         id: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         nom: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 is: /[a-z0-9\t\n\f\r]+/  
//             } 
//         },
//         sexe: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 is: /[a-z0-9\t\n\f\r]+/  
//             } 
//         },
//         couleur: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 is: /[a-z0-9\t\n\f\r]+/  
//             } 
//         },
//         poids: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             validate: {
//                 is: /[0-9]+/// Accepte uniquement des entiers
//             }
//         },
//         age: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             validate: {
//                 isInt: true, // Accepte uniquement des entiers
//                 min: 0 // L'âge ne peut pas être négatif
//             }
//         }
//     });
// };
