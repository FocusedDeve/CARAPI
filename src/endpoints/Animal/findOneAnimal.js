const { Animal } = require('../../db/sequelize')

// Exporter tout notre app
module.exports = app => {
    app.get('/api/animaux/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Animal.findByPk(id)
            .then(animal => {
                const message = `Récupération de l'animal dont l'id est ${id}`
                if (animal === null) {
                    const message = `L'animal dont l'id est ${id} n'existe pas`
                    return res.status(404).json({ message })
                }
                res.json({ message, data: animal })
            })
            .catch(error => { // Gérer l'erreur technique due à l'indisponibilité du serveur
                const message = `Oups !!! Serveur indisponible temporairement`
                res.status(500).json({ message, data: error })
            })
    })
}
