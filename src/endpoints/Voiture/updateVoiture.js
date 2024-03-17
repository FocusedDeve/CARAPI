const { Voiture } = require('../../db/sequelize')

//Exporter tout notre app
module.exports = app => {
    app.put('/api/voitures/:id', (req, res)=>{
        idprovided = parseInt(req.params.id)
        Voiture.update(req.body,{
            where:{id: idprovided}
        })
        .then(()=>{
            return Voiture.findByPk(idprovided)
                    .then(v =>{
                        if(v === null){
                            const message = `La voiture dont l'id est ${id} n'existe pas`
                            return res.status(404).json({message})
                        }
                        const message = `Mis à jour de la voiture 
                        ${v.name} avec succès`

                        res.json({message, data:v})
                    }).catch(error =>{ 
                        //Erreur due au fait qu'on a pas fournit un prix compris entre 1200 et 5000
                        if(error instanceof ValidationError){
                            return res.status(400).json({message: error.message})
                        }
                        //Gerer l'erreur liée qu fait que l'id de cette voiture n'existe
                        const message = `La voiture que vous voulez modifier n'existe pas`
                        res.status(404).json({message})
                    })
        })
        .catch(error =>{ //Gerer l'erreur technique du a l'indisponibilité du serveur
            const message = `Ouups !!! Serveur indisponible temporairement`
            res.status(500).json({message, data: error})
        })
    })
}