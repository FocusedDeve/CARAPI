const { Voiture } = require("../db/sequelize");

module.exports = app => {
    app.put('/api/voitures/:id', (req, res) => {
        const idProvided = parseInt(req.params.id);

        Voiture.update(req.body, {
            where: { id: idProvided }
        })
        .then(() => Voiture.findByPk(idProvided))
        .then(voiture => {
            const message = `Mise à jour de la voiture ${voiture.name} effectuée avec succès`;
            res.json({ message, data: voiture });
        });
    });
};
