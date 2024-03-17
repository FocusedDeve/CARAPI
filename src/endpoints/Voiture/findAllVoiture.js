const { Voiture } = require('../../db/sequelize');

// Exporter tout notre app
module.exports = app => {
    app.get('/api/voitures', (req, res) => {
        const prixMinimum = req.query.prix; // Récupérer la valeur du paramètre de requête "prix"
        const limite = req.query.limite || 2; // Utiliser la valeur par défaut 2 si le paramètre "limite" n'est pas fourni
        
        // Construire l'objet de condition pour la requête SQL en fonction des paramètres fournis
        const condition = prixMinimum ? { price: { [Sequelize.Op.gte]: prixMinimum } } : {};
        
        Voiture.findAll({
            where: condition,
            limit: limite // Appliquer la limite
        })
        .then(voitures => {
            const message = 'Liste des voitures';
            res.json({ message, data: voitures });
        })
        .catch(error => {
            const message = 'Oups !!! Serveur indisponible temporairement';
            res.status(500).json({ message, data: error });
        });
    });
};
