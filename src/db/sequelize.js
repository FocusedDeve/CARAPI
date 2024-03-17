/*const { Sequelize, DataTypes } = require("sequelize")
const VoitureModel = require("../models/VoitureModel")
const AnimalModel = require("../models/AnimalModel");
const UserModel = require("../models/UserModel");


const voitures = require("./voiture-fixtures")
const animaux = require('./Animal-fixtures');

// Configuration de Sequelize
const sequelize = new Sequelize(
    'nodejs',   // Nom de la base de données
    'root',       // Nom d'utilisateur
    '',           // Mot de passe
    {
        host: 'localhost',
        dialect: 'mysql',
        dialectOptions: {
            timezone: 'Etc/GMT-4'
        },
        logging: false
    }
)

// Connexion à la base de données
sequelize.authenticate()
    .then(() => console.log('Connexion à la base de données réussie'))
    .catch(error => console.log(`Échec de connexion à la base de données: ${error}`))

/ Instantiation des modèles
const Voiture = VoitureModel(sequelize, DataTypes)
const Animal = AnimalModel(sequelize, DataTypes)
const User = UserModel(sequelize, DataTypes)

// Synchronisation et remplissage de la base de données
const initDB = () => {
    return sequelize.sync({ force: true })
        .then(() => {
            console.log('Synchronisation avec la base de données réussie')
            voitures.map(v => {
                Voiture.create({
                    name: v.name,
                    modele: v.modele,
                    type: v.type.join(),
                    price: v.price,
                    createdAt: new Date()
                }).then(() => console.log('Enregistrement voiture réussi'))
                    .catch(error => console.log(`Erreur d'enregistrement voiture: ${error}`))
            })

            animaux.map(a => {
                Animal.create({
                    nom: a.nom,
                    sexe: a.sexe,
                    couleur: a.couleur,
                    poids: a.poids,
                    age: a.age
                })
                bcrypt.hash("Admin")
                .then(hash =>{
                    User.create({
                        username:"Admin",
                        password:  hash
                    })
                })
                
                    
                .then(() => console.log('Enregistrement d\'un utilisateur réussi'))
                    .catch(error => console.log(`Erreur d'enregistrement d\'utilisateur : ${error}`))
            })
        })
        .catch(error => console.log(`Échec de synchronisation: ${error}`))
}

module.exports = { Voiture, Animal, User, initDB }*/



const { Sequelize, DataTypes } = require("sequelize");
const bcrypt = require('bcrypt');
const VoitureModel = require("../models/VoitureModel");
const AnimalModel = require("../models/AnimalModel");
const UserModel = require("../models/UserModel");

const voitures = require("./voiture-fixtures");
const animaux = require('./Animal-fixtures');

// Configuration de Sequelize
const sequelize = new Sequelize(
    'nodejs',   // Nom de la base de données
    'root',       // Nom d'utilisateur
    '',           // Mot de passe
    {
        host: 'localhost',
        dialect: 'mysql',
        dialectOptions: {
            timezone: 'Etc/GMT-4'
        },
        logging: false
    }
);

// Connexion à la base de données
sequelize.authenticate()
    .then(() => console.log('Connexion à la base de données réussie'))
    .catch(error => console.log(`Échec de connexion à la base de données: ${error}`));

// Instantiation des modèles
const Voiture = VoitureModel(sequelize, DataTypes);
const Animal = AnimalModel(sequelize, DataTypes);
const User = UserModel(sequelize, DataTypes);

// Synchronisation et remplissage de la base de données
const initDB = () => {
    return sequelize.sync({ force: true })
        .then(() => {
            console.log('Synchronisation avec la base de données réussie');

            voitures.forEach(v => {
                Voiture.create({
                    name: v.name,
                    modele: v.modele,
                    type: v.type.join(),
                    price: v.price,
                    createdAt: new Date()
                })
                .then(() => console.log('Enregistrement voiture réussi'))
                .catch(error => console.log(`Erreur d'enregistrement voiture: ${error}`));
            });

            animaux.forEach(a => {
                Animal.create({
                    nom: a.nom,
                    sexe: a.sexe,
                    couleur: a.couleur,
                    poids: a.poids,
                    age: a.age
                })
                .then(() => console.log('Enregistrement animal réussi'))
                .catch(error => console.log(`Erreur d'enregistrement animal: ${error}`));
            });

            // Hasher le mot de passe "Admin" et créer un utilisateur
            bcrypt.hash("Admin", 10)
            .then(hash =>{
                return User.create({
                    username: "Admin",
                    password:  hash
                });
            })
            .then(() => console.log('Enregistrement de l\'utilisateur Admin réussi'))
            .catch(error => console.log(`Erreur d'enregistrement de l'utilisateur Admin: ${error}`));
        })
        .catch(error => console.log(`Échec de synchronisation: ${error}`));
};

module.exports = { Voiture, Animal, User, initDB };

