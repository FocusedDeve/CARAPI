const { Voiture } = require('../db/sequelize');

// Exporter toute notre application
module.exports = app => {
    // GET /api/voitures/:id -> Récupérer une seule voiture par son ID
    app.post('/api/voitures/:id', (req, res) => { 
        Voiture.create(req.body)
            .then(v => {
                const message = `Insertion de la voiture ${req.body.name} reussi`;
                res.json({message: message, data: v});
                v!= null ? res.json({message, data:v}):
                res.send(`la voiture dont l'id est ${id} n'existe pas`)
            });
    });
};

 