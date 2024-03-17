const { Voiture } = require('../../db/sequelize')

//Exporter tout notre app
module.exports = app => {
    app.get('/api/voitures/:id', (req, res)=>{
        const id = parseInt(req.params.id)
        Voiture.findByPk(id)
            .then(v=>{
                const message = `Récupération de la voiture dont l'id 
                est ${id}`
                if(v === null){
                    const message = `La voiture dont l'id est ${id} n'existe pas`
                    return res.status(404).json({message})
                }
                res.json({message, data:v})
            }).catch(error =>{ //Erreur 404
                const message = `La voiture que vous voulez modifier n'existe pas`
                res.status(404).json({message})
            })
            .catch(error =>{ //Gerer l'erreur technique du a l'indisponibilité du serveur
                const message = `Ouups !!! Serveur indisponible temporairement`
                res.status(500).json({message, data: error})
            })
    })
}