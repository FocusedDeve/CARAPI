const { Voiture } = require('../db/sequelize');

// Exporter toute notre application
module.exports = app => {
    // GET /api/voitures/:id -> Récupérer une seule voiture par son ID
    app.get('/api/voitures/:id', (req, res) => { 
        const id = req.params.id;
        Voiture.findByPk(id)
            .then(v => {
                const message = `Récupération de la voiture dont l'ID est ${id}`;
                v!= null ? res.json({message, data:v}):
                res.send(`la voiture dont l'id est ${id} n'existe pas`)            });
    });
};

 