const { Voiture } = require("../db/sequelize");

module.exports = app => {
    app.delete('/api/voitures/:id', (req, res) => {
      idProvided = parseInt(req.params.id);
        Voiture.findByPk(id)
        .then(v=>{
            const voitureDeleted = v
            Voiture.destroy({
                where:{id:idProvided}
            })
            .then(()=>{
                const message = `la voiture ${voitureDeleted.name}
                a été ajouté avec succes`
                res.json({message, data: voitureDeleted})

            })
        })
       
    });
};
