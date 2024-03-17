const { Animal, Sequelize } = require('../../db/sequelize');

module.exports = app => {
    app.put('/api/animaux/:id', (req, res) => {
        const idFourni = parseInt(req.params.id);

        // Vérifier si l'animal existe avant de le mettre à jour
        Animal.findByPk(idFourni)
            .then(animal => {
                // Si l'animal n'existe pas, renvoyer un message d'erreur
                if (!animal) {
                    const message = `L'animal avec l'ID ${idFourni} n'existe pas`;
                    return res.status(404).json({ message });
                }

                // Mettre à jour l'animal
                Animal.update(req.body, {
                    where: { id: idFourni }
                })
                    .then(() => {
                        // Récupérer les informations mises à jour de l'animal
                        Animal.findByPk(idFourni)
                            .then(updatedAnimal => {
                                const message = `Mise à jour de l'animal ${idFourni} avec succès`;
                                res.json({ message, data: updatedAnimal });
                            })
                            .catch(error => {
                                // Gérer l'erreur lors de la récupération de l'animal mis à jour
                                const message = 'Erreur lors de la récupération de l\'animal mis à jour';
                                res.status(500).json({ message, data: error });
                            });
                    })
                    .catch(error => {
                        // Gérer l'erreur lors de la mise à jour de l'animal
                        const message = 'Erreur lors de la mise à jour de l\'animal';
                        res.status(500).json({ message, data: error });
                    });
            })
            .catch(error => {
                // Gérer l'erreur lors de la recherche de l'animal
                const message = 'Erreur lors de la recherche de l\'animal';
                res.status(500).json({ message, data: error });
            });
    });
};
