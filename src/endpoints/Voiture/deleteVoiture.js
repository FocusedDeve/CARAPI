const { Voiture } = require('../../db/sequelize')

//Exporter tout notre app
module.exports = app => {
    app.delete('/api/voitures/:id', (req, res)=>{
        idprovided = parseInt(req.params.id)
        Voiture.findByPk(idprovided)
            .then(v=>{
                const voitureDeleted = v
                Voiture.destroy({
                    where:{id: idprovided}
                })
                
                .then(()=>{
                    if(v === null){
                        const message = `La voiture dont l'id est ${id} n'existe pas`
                        return res.status(404).json({message})
                    }
                    const message = `La voiture ${voitureDeleted.name} 
                    a été supprimé avec succès`
                    res.json({message, data: voitureDeleted})
                })
                .catch(error =>{ //Erreur 404
                    res.status(404).json({message})
                })
            })
            .catch(error =>{ //Gerer l'erreur technique du a l'indisponibilité du serveur
                const message = `Ouups !!! Serveur indisponible temporairement`
                res.status(500).json({message, data: error})
            })
    })
}