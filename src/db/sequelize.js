const { Sequelize } = require("sequelize")
const VoitureModel = require("../models/VoitureModel")


const voitures = require("./voiture-fixtures")

//configuration de la sequelize
const sequelize = new Sequelize(
    'voitures',   //Le nom de BD
    'root',  // Nom d'utlisateur
    '', // Mot de passe
    {
        host: 'localhost',
        dialect: 'mysql',
        dialectOptions:{
            timezone: 'Etc/GMT'
        },
        logging: false
    }
)

//Connexion a la BD
sequelize.authenticate()
        .then(()=>console.log('Connexion a la BD reussi'))
        .catch(error=>console.log(`Echec de connexion a la BD: ${error}`))

//Instantiation du modèle
const Voiture = VoitureModel(sequelize, DataTypes)

//Synchronisation et remplissage de la BD
const initDB = ()=>{
    return sequelize.sync({force:true})
        //pré remplissage de la BD
        .then(()=>{
            console.log('Synchronisation avec la BD OK')
            voitures.map(v => {
                Voiture.create({
                name: v.name,
                modele: v.modele,
                type: v.type.join(),
                price: v.prix,
                createdAt: new Date()
            }).then(()=>console.log('Enregistrement ok'))
              .catch(error => console.log(`Erreur d'enregistrement ${error}`))
            })
           
        })
    .catch(error=> console.log(`Echec de synchronisation: ${error}`))
}

module.exports = {Voiture, initDB}

