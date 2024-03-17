const { Animal } = require('../../db/sequelize')

// Exporter tout notre app
module.exports = app => {
    app.delete('/api/animaux/:id', (req, res) => {
        const idFourni = parseInt(req.params.id)
        Animal.findByPk(idFourni)
            .then(animal => {
                if (animal === null) {
                    const message = `L'animal dont l'id est ${idFourni} n'existe pas`
                    return res.status(404).json({ message })
                }
                const animalSupprime = animal
                Animal.destroy({
                    where: { id: idFourni }
                })
                    .then(() => {
                        const message = `L'animal ${animalSupprime.nom} a été supprimé avec succès`
                        res.json({ message, data: animalSupprime })
                    })
                    .catch(error => { // Erreur 404
                        res.status(404).json({ message })
                    })
            })
            .catch(error => { // Gérer l'erreur technique due à l'indisponibilité du serveur
                const message = `Oups !!! Serveur indisponible temporairement`
                res.status(500).json({ message, data: error })
            })
    })
}
