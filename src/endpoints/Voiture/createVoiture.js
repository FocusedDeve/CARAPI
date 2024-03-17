const { ValidationError } = require('sequelize')
const { Voiture } = require('../../db/sequelize')

//Exporter tout notre app
module.exports = app => {
    app.post('/api/voitures/', (req, res)=>{
        Voiture.create(req.body)
            .then(v=>{
                const message = `Insertion de la voiture ${req.body.name} 
                réussie`
                res.json({message, data:v})
            })
            .catch(error =>{ 
                //Erreur due au fait qu'on a pas fournit un prix compris entre 1200 et 5000
                if(error instanceof ValidationError){
                    if(error.message === "Validation error"){
                        error.message = "Cette voiture existe déjà"
                    }
                    return res.status(400).json({message: error.message})
                }
                //Gerer l'erreur technique du a l'indisponibilité du serveur
                const message = `Ouups !!! Serveur indisponible temporairement`
                res.status(500).json({message, data: error})
            })
    })
}