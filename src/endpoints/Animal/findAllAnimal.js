const { Animal } = require('../../db/sequelize')

// Exporter tout notre app
module.exports = app => {
    app.get('/api/animaux', (req, res) => {
        Animal.findAll()
            .then(animaux => {
                const message = 'Liste des animaux'
                res.json({ message, data: animaux })
            })
            .catch(error => { // Gérer l'erreur technique due à l'indisponibilité du serveur
                const message = `Oups !!! Serveur indisponible temporairement`
                res.status(500).json({ message, data: error })
            })
    })
}
