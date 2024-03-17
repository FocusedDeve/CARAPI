const { ValidationError } = require('sequelize');
const { Animal } = require('../../db/sequelize');

// Exporter tout notre app
module.exports = app => {
    app.post('/api/animaux/', (req, res) => {
        // Vérifier si un animal avec les mêmes attributs existe déjà
        Animal.findOne({ where: req.body })
            .then(existingAnimal => {
                if (existingAnimal) {
                    // Si un animal avec les mêmes attributs existe déjà, renvoyer un message d'erreur
                    const message = `Un animal avec les mêmes attributs existe déjà`;
                    return res.status(400).json({ message });
                }
                // Si l'animal n'existe pas encore, créer un nouvel animal
                Animal.create(req.body)
                    .then(animal => {
                        const message = `Insertion de l'animal ${req.body.nom} réussie`;
                        res.json({ message, data: animal });
                    })
                    .catch(error => {
                        // Gérer l'erreur technique due à l'indisponibilité du serveur
                        const message = `Oups !!! Serveur indisponible temporairement`;
                        res.status(500).json({ message, data: error });
                    });
            })
            .catch(error => {
                // Gérer l'erreur technique due à l'indisponibilité du serveur
                const message = `Oups !!! Serveur indisponible temporairement`;
                res.status(500).json({ message, data: error });
            });
    });
};
